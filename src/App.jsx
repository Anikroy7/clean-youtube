import { CardContent, CssBaseline, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PlaylistCard from "./components/PlaylistCard/PlaylistCard";

import NotFound from "./components/Shared/NotFound";
import storage from "./utils/storage";


const HomePage = ({ playlistArray, loading }) => {


    return <Container maxWidth={'lg'} sx={{ marginTop: 2 }}>
        {/*    {
            loading && <Loading />
        } */}

        <Grid container spacing={2}>
            {
                playlistArray.length > 0 && playlistArray.map(({ playlistThumbnail, playlistTitle, playlistDescription, playlistId, channelTitle }) => {
                    return <Grid key={playlistId} item xs={12} md={6} lg={4}>

                        <PlaylistCard
                            channelTitle={channelTitle}
                            playlistThumbnail={playlistThumbnail}
                            playlistTitle={playlistTitle}
                            playlistDescription={playlistDescription}
                            playlistId={playlistId}
                        />
                    </Grid>
                })
            }
        </Grid>

    </Container>

}

const App = () => {
    const { data } = useStoreState(state => state.playlists);
    const { addFromStorage } = useStoreActions(actions => actions.playlists)
    const playlistArray = Object.values(data);
    // console.log(actions);
    const STORAGE_KEY = 'cl_001'

    useEffect(() => {
        const storageData = storage.get(STORAGE_KEY);
        addFromStorage(storageData)
    }, [])




    return (
        <>
            <BrowserRouter>
                <CssBaseline />
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage
                        playlistArray={playlistArray}
                    />} />
                    <Route path="/player/:playlistId" element={<PlayerPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};


const PlayerPage = ({ playlists }) => {

    return <CardContent>
        <Typography variant='h6' color='text.secondary'>
            {'playlistTitle'}
        </Typography>
        <Typography variant='p' color='text.secondary'>
            {'playlistDescription'}
        </Typography>
    </CardContent>
}

export default App;
