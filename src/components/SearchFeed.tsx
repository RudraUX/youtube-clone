import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router';
import { Videos } from './';

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams<{ searchTerm: string }>();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  if (!videos)
    return (
      <h1
        style={{
          color: '#FC1503',
          height: '100vh',
          textAlign: 'center',
          marginTop: '10rem',
        }}
      >
        Sorry {searchTerm} Not Found😓
      </h1>
    );

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      {}
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Result For:{}{' '}
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
