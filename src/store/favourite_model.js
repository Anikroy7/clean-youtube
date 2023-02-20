import { action, createStore, persist } from "easy-peasy";


const favouriteModel = persist({
    items: [],
    addToFavourite: action((state, payload) => {
        state.items.push(payload)
    }),
    removeToFavourite: action((state, payload) => {
        state.items = state.items.filter((playlistId) => playlistId !== payload)
    })
})


export default favouriteModel;