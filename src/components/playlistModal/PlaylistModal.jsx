import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreActions, useStoreState } from 'easy-peasy';
import storage from '../../utils/storage';



const PlaylistModal = ({ open, handleClose }) => {
    const { getPlaylistData, addPlaylist } = useStoreActions((actions) => actions.playlists)
    const { playlists: { data } } = useStoreState((state) => state);
    const [playlistId, setPlaylistId] = useState('')
    const handleSubmit = () => {
        if (!playlistId) {
            alert('Give a valid playlist url!!')
            return
        }

        if (data[playlistId]) {
            alert("Playlist already exits!!")
            handleClose()
            return
        }
        getPlaylistData(playlistId)
        setPlaylistId('');
        handleClose()
    }

    return (

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Playlist</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please paste youtube playlist url or id link. Before add please check the link and then paste it for get the correct playlist.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Paste url here"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setPlaylistId(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default PlaylistModal;