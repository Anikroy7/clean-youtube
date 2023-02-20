import { action, thunk, useStoreState } from "easy-peasy";
import getPlaylists from "../api/getPlaylist";
import storage from "../utils/storage";


const STORAGE_KEY = 'cl_001'
const playlistsModel = {
    data: {},
    loading: false,
    error: "",
    setLoading: action((state, payload) => {
        state.loading = payload
    }),
    setError: action((state, payload) => {
        state.error = payload
    }),
    addPlaylist: action((state, payload) => {
        state.data[payload.playlistId] = {
            ...payload
        }
    }),
    addFromStorage: action((state, payload) => {
        if (payload) {
            state.data = payload
        } else {
            state.data = {}
        }
    }),
    getPlaylistData: thunk(async ({ addPlaylist, setError, setLoading }, payload, { getState }) => {

        if (getState().data[payload]) {
            return;
        }
        setLoading(true)
        try {
            const data = await getPlaylists(payload);
            addPlaylist(data);
            const storageData = storage.get(STORAGE_KEY);

            console.log(storageData);
            storage.set(STORAGE_KEY, getState().data)
            setError('')
        } catch (error) {
            setError((error?.response?.data?.error?.message) || (error?.message) || ('Something unknown error happend!!'));
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }),
}

export default playlistsModel;
