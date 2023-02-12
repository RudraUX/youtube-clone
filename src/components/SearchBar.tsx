import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const navigateToSearch = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm) {
      navigateToSearch(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component={'form'}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3 ',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search.....'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
