import { useState } from "react"
import getPlaylists from "../api"

const usePlaylists = () => {

    const [state, setState] = useState({
        playlists: {},
        recentPlaylists: [],
        favourites: []
    })
    const getPlaylistById = async (playlistId, force = false) => {
        /*     if (state.playlists[playlistId] && !force) {
                return;
            } */
        let result = await getPlaylists(playlistId);
        let cId, ct;

        result = result.map(({ snippet: { channelId, title, description, thumbnails: { medium }, channelTitle }, contentDetails }) => {
            if (!cId) {
                cId = channelId;
            }

            if (!ct) {
                ct = channelTitle
            }

            return {
                title,
                description,
                thumbnails: medium,
                contentDetails
            }
        })

        setState((prev) => ({
            ...prev,
            playlists: {
                ...prev.playlists,
                [playlistId]: {
                    items: result,
                    playlistId,
                    channelId: cId,
                    channelTitle: ct
                }
            }

        }))
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
        addToRecent
    }
}

export default usePlaylists;