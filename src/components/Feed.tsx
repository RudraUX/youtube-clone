import { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';

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
            md: '100vh',
          },
        }}
      ></Box>
    </Stack>
  );
}

export default Feed;
