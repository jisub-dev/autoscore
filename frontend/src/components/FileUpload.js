import React, { useState } from 'react';
import { Button, Paper, Box, Typography } from '@mui/material';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    console.log('Selected file:', file.name);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: 'auto', mt: 2 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Upload Audio File
        </Typography>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          style={{ marginBottom: '1rem', display: 'block' }}
        />
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleUpload}
          disabled={!file}
        >
          Upload
        </Button>
      </Box>
    </Paper>
  );
};

export default FileUpload;
