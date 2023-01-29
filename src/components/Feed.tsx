import { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { SideBar, Videos } from './';

function Feed() {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <Box
        sx={{
          height: {
            xs: 'auto',
            md: '92vh',
          },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />

        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 , Pollab D.
        </Typography>
      </Box>

      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          New <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
}

export default Feed;
