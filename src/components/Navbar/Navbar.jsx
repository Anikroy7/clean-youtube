import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/system';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { deepOrange } from '@mui/material/colors';
import PlaylistModal from '../playlistModal/PlaylistModal';



const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='transparent' sx={{ padding: '20px' }}>
                <Container maxWidth='lg'>
                    <Toolbar>
                        <Stack sx={{ flexGrow: 1 }}>
                            <Link component={RouterLink} to="/" sx={{ textDecoration: "none" }}>
                                <Typography
                                    sx={{ color: "red" }}
                                    variant='h4'>
                                    Fresh YouTube
                                </Typography>

                            </Link>
                            <Link href='https://www.linkedin.com/in/anik-roy-a14185241/' target={'_blank'}>
                                <Typography
                                    variant="body1"
                                >
                                    By Anik roy dfd
                                </Typography>
                            </Link>
                        </Stack>
                        <Button
                            variant='contained'
                            sx={{
                                bgcolor: deepOrange[500],
                                '&:hover': {
                                    background: deepOrange[800],
                                },
                            }}
                            onClick={handleClickOpen}
                        >
                            <AddIcon />
                            Add Playlist
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <PlaylistModal
                open={open}
                handleClose={handleClose}
            />
        </Box>
    );
}

export default Navbar;