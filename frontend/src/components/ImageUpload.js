// ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No image selected');
      return;
    }

    console.log(selectedFile);
    console.log(selectedFile.name);
    // Get the entire file path
    const filePath = selectedFile.webkitRelativePath || selectedFile.name;

    console.log(typeof filePath);

    try {
      // Make a POST request to the server with the file path
      const response = await axios.post(
        'https://localhost:3001/upload',
        { filePath },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle the response as needed
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
