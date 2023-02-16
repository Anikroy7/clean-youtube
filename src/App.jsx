import { useEffect } from "react";
import getPlaylists from "./api";

const App = () => {

    useEffect(() => {
        getPlaylists("PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1")
            .then((data) => {
                console.log('data form you tube api: ', data);
            })

    }, [])
    return (
        <div>
            <h2>Hello fresh you tube</h2>
        </div>
    );
};

export default App;                                                     