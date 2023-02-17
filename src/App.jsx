import { Button, CssBaseline, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./components/Navbar/Navbar";
import PlaylistCard from "./components/PlaylistCard/PlaylistCard";
import usePlaylists from "./hooks/usePlaylists";


const App = () => {
    const { getPlaylistById, playlists, error } = usePlaylists()

    const playlistArray = Object.values(playlists);

    console.log(playlistArray);


    return (
        <>
            <CssBaseline />
            <Navbar getPlaylistById={getPlaylistById} />
            <Container maxWidth={'lg'} sx={{ marginTop: 2 }}>
                <Stack direction="row" spacing={2}>
                    {
                        playlistArray.length > 0 && playlistArray.map(({ playlistThumbnail, playlistTitle, playlistDescription, id, channelTitle }) => {

                            return <PlaylistCard
                                key={id}
                                channelTitle={channelTitle}
                                playlistThumbnail={playlistThumbnail}
                                playlistTitle={playlistTitle}
                                playlistDescription={playlistDescription}
                            />
                        })
                    }
                </Stack>
            </Container>
        </>
    );
};

export default App;                                                     