import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/system';

const Loading = () => {
    return (
        <Container maxWidth={'lg'} >
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
            </Stack>
        </Container>
    );
}

export default Loading;