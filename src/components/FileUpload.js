import React, { useState } from 'react';
import { Button, Paper, Box } from '@mui/material';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/api/scores/upload', formData);
      console.log('Upload success:', response.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <Paper elevation={3}>
      <Box p={3}>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
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
