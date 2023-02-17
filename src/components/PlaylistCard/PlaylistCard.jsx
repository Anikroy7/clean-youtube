
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { PlayCircle } from '@mui/icons-material';




const PlaylistCard = ({ playlistDescription, playlistTitle, playlistThumbnail, channelTitle }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image={playlistThumbnail.url}
                alt={playlistTitle}
            />
            <CardContent>
                <Typography variant='h6' color='text.secondary'>
                    {playlistTitle}
                </Typography>
                <Typography variant='p' color='text.secondary'>
                    {channelTitle}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {playlistDescription}
                </Typography> */}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <PlayCircle />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default PlaylistCard;