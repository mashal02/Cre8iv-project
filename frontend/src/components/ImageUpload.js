// ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    const type = file.type;

    console.log(type);

    reader.onloadend = () => {
      const res = reader.result;
      setSelectedImage({ data: res });
    };

    reader.readAsDataURL(file);
    console.log(reader);
  };

  const handleUpload = async () => {
    console.log('hello');
    console.log(selectedImage);
    if (!selectedImage) {
      console.error('No image selected');
      return;
    }

    try {
      // Make a POST request to the server with the image data and path
      const response = await axios.post(
        'https://localhost:3001/send-message',
        { image: selectedImage },
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
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
