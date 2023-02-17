import { Button, CssBaseline, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PlaylistCard from "./components/PlaylistCard/PlaylistCard";
import Loading from "./components/Shared/Loading";
import NotFound from "./components/Shared/NotFound";
import usePlaylists from "./hooks/usePlaylists";




const HomePage = ({ playlistArray, loading }) => {

    return <Container maxWidth={'lg'} sx={{ marginTop: 2 }}>
        {
            loading && <Loading />
        }

        <Grid container spacing={2}>
            {
                playlistArray.length > 0 && playlistArray.map(({ playlistThumbnail, playlistTitle, playlistDescription, id, channelTitle }) => {
                    return <Grid key={id} item xs={12} md={6} lg={4}>

                        <PlaylistCard
                            channelTitle={channelTitle}
                            playlistThumbnail={playlistThumbnail}
                            playlistTitle={playlistTitle}
                            playlistDescription={playlistDescription}
                        />
                    </Grid>
                })
            }
        </Grid>

    </Container>

}


const App = () => {

    const { getPlaylistById, playlists, error, loading } = usePlaylists()


    const playlistArray = Object?.values(playlists);
    console.time('ls');
    return (
        <>
            <BrowserRouter>
                <CssBaseline />
                <Navbar getPlaylistById={getPlaylistById} />

                <Routes>
                    <Route path="/" element={<HomePage
                        playlistArray={playlistArray}
                        loading={loading}
                    />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
console.timeEnd('ls')
export default App;                                                     