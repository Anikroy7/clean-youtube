import { createStore } from "easy-peasy";
import playlistsModel from "./playlistModel";

const store = createStore({
    playlists: playlistsModel,

})

export default store;