import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react"
import getPlaylists from "../api/getPlaylist"
import storage from "../utils/storage";

f

/* const init = {
    playlists: {},
    recentPlaylists: [],
    favourites: []
}
 */
const usePlaylists = () => {
    /* const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(init) */
    const { getPlaylistData, addPlaylist, setError, setLoading } = useStoreActions((actions) => actions.playlists);
    const state = useStoreState((state) => state.playlists)
    console.log(state);
    useEffect(() => {
        const state = storage.get(STORAGE_KEY);
        if (state) {
            addPlaylist({ ...state })
        }
    }, [])

    useEffect(() => {
        if (state !== init) {
            storage.set(STORAGE_KEY, state)
        }
    }, [state])

    const getPlaylistById = async (playlistId, force = false) => {

        if (state.playlists[playlistId] && !force) {
            alert('Alredy exits this playlist')
            return;
        }
        setLoading(true)

        try {
            const playlist = await getPlaylists(playlistId);
            setState(prev => ({
                ...prev,
                playlists: {
                    ...prev.playlists,
                    [playlistId]: playlist
                }
            }))
            setError('')
        } catch (e) {
            setError(e.response.data.error.message || 'Something unknown error happend!!');
        } finally {
            setLoading(false)
        }


    }

    const addToFavourites = (playlistId) => {
        setState(prev => ({
            ...prev,
            favouritePlaylists: [...prev, playlistId]
        }))
    }
    const addToRecent = (playlistId) => {
        setState(prev => ({
            ...prev,
            recentPlaylists: [...prev, playlistId]
        }))
    }

    const getPlaylistsByIds = (ids = []) => {
        return ids.map(id => state.playlists[id])
    }

    return {
        playlists: state.playlists,
        getFavourites: getPlaylistsByIds(state.favourites),
        recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
        getPlaylistById,
        addToFavourites,
        addToRecent,
        loading,
        error
    }
}

export default usePlaylists;