import { useEffect } from "react";
import getPlaylists from "./api";
import usePlaylists from "./hooks/usePlaylists";

const App = () => {
    const { playlists, getPlaylistById } = usePlaylists()

    useEffect(() => {
        getPlaylistById("PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1")
    }, [])

    console.log("playlists", playlists);
    return (
        <div>
            <h2>Hello fresh you tube</h2>
        </div>
    );
};

export default App;                                                     