import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';

type VideosProps = {
  videos: any[];
};

function Videos({ videos }: VideosProps) {
  console.log(videos);
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap='2'>
      {videos.map((item, idx) => (
        <Box key={idx}>{item.id.videoID && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
}

export default Videos;
