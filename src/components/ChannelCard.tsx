import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

function ChannelCard({ channelDetail }: { channelDetail: any }) {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px' }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            component='img'
            alt={channelDetail?.snippet?.title}
            sx={{
              height: 180,
              width: 180,
              borderRadius: '50%',
              mb: 2,
              border: '2px solid #e3e3e3',
            }}
          />
          <Typography variant='h6' fontWeight='bold'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ color: 'gray', fontSize: '14px', ml: '5px' }} />
          </Typography>
          <Typography>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
