import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PlaylistModal = ({ open, handleClose, getPlaylistId }) => {

    const [state, setState] = useState('')

    const handleSubmit = () => {
        if (!state) {
            alert('Give a valid playlist url!!')

        }
        else {
            getPlaylistId(state)
            setState('')
            handleClose()
        }
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
                    onChange={(e) => setState(e.target.value)}
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