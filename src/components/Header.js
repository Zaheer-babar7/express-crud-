import { Paper, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Paper elevation={5} sx={{ p: 2 }}>
      <Typography textAlign='center' variant='h6'>
        Mern Store
      </Typography>
    </Paper>
  );
};

export default Header;
