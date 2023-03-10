import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

type VideosProps = {
  videos: any[];
  direction: string;
};

function Videos({ videos }: VideosProps) {
  return (
    <Stack
      direction={'row'}
      flexWrap='wrap'
      justifyContent='start'
      alignItems='start'
      gap={2}
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard channelDetail={item} marginTop={''} />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
