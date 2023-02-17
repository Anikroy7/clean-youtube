
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PlayCircle, PlayCircleFilledOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';




const PlaylistCard = ({ playlistDescription, playlistTitle, playlistThumbnail, channelTitle }) => {
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia
                component="img"
                height="194"
                image={playlistThumbnail.url}
                alt={playlistTitle}
            />
            <CardContent>
                <Typography variant='h6' color='text.secondary'>
                    {playlistTitle.length > 40 ? playlistTitle.substr(0, 40) + "..." : playlistTitle}
                </Typography>
                <Typography variant='p' color='text.secondary'>
                    {channelTitle}
                </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }}></Box>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <PlayCircle sx={{ marginRight: 0 }} color='error' />
                </IconButton>
                <Typography sx={{
                    '&:hover': {
                        color: 'red',
                        cursor: "pointer"
                    },
                }} variant='body1'>
                    Get Started
                </Typography>
            </CardActions>
        </Card>
    );
}

export default PlaylistCard;