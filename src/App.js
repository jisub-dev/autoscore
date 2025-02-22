import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FileUpload from './components/FileUpload';
import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Audio to Score Converter
        </Typography>
        <FileUpload />
      </Box>
    </Container>
  );
}

export default App;
