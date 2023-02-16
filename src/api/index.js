import axios from "axios"

const key = "AIzaSyBYbvl2OWdk-n638fiDd7Z12KhjeWTuiuY"

const getPlaylists = async (playlistId, pageToken = '', result = []) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`
    const { data } = await axios.get(URL);
    result = [...result, ...data.items]
    if (data.nextPageToken) {
        result = await getPlaylists(playlistId, data.nextPageToken, result)
    }
    return result;
}

export default getPlaylists;


/* 
https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBYbvl2OWdk-n638fiDd7Z12KhjeWTuiuY&part=id,contentDeatils,snippet&maxResults=50&playlistId=PLEYpvDF6qy8bYhgob8V5BnHkhC6P99YhU&pageToken=   
*/