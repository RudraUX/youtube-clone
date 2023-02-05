import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';
import { height } from '@mui/system';

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}: {
  video: any;
}) {
  console.log(snippet);
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          component='img'
          alt={snippet?.title}
          sx={{ height: 180, width: 358 }}
        />
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
              {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/video/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant='subtitle1' fontWeight='bold' color='gray'>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ color: '#fff', fontSize: 'small' }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VideoCard;
