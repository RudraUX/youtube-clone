import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function ChannelDetail() {
  const { id } = useParams<{ id: string }>();
  const [videos, setVideos] = useState([]);
  const [channelDetail, setchannelDetail] = useState(null);

  console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(0,185,203,1) 0%, rgba(217,0,219,1) 100%, rgba(94,175,0,1) 100%, rgba(195,0,0,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
