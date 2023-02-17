import { useState } from "react"
import getPlaylists from "../api/getPlaylist"

const usePlaylists = () => {

    const [state, setState] = useState({
        playlists: {},
        recentPlaylists: [],
        favourites: []
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const getPlaylistById = async (playlistId, force = false) => {
        if (state.playlists[playlistId] && !force) {
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