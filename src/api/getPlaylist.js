import axios from "axios"

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistsItems = async (playlistId, pageToken = '', result = []) => {

    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`

    const { data } = await axios.get(URL);
    result = [...result, ...data.items]
    if (data.nextPageToken) {
        result = getPlaylistsItems(playlistId, data.nextPageToken, result)
    }
    return result;
}

const getPlaylists = async (playlistId) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

    const { data } = await axios.get(URL);
    let playlistItems = await getPlaylistsItems(playlistId);
    const { title: playlistTitle, description: playlistDescription, thumbnails, channelTitle, channelId } = data?.items[0]?.snippet;

    playlistItems = playlistItems.map((
        { snippet: {
            channelTitle,
            title,
            description,
            thumbnails: { high } },
            contentDetails }) => {
        return {
            title,
            description,
            thumbnails: high,
            contentDetails
        }
    })


    return {
        playlistId,
        playlistTitle,
        playlistDescription,
        playlistThumbnail: thumbnails.default,
        channelTitle,
        playlistItems
    }
}

export default getPlaylists;

/* 
https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBYbvl2OWdk-n638fiDd7Z12KhjeWTuiuY&part=id,contentDeatils,snippet&maxResults=50&playlistId=PLEYpvDF6qy8bYhgob8V5BnHkhC6P99YhU&pageToken=   
*/