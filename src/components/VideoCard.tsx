import React from 'react';
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

function VideoCard({ video: { id: videoId } }: { video: any }) {
  console.log(videoId);
  return <div>VideoCard</div>;
}

export default VideoCard;
