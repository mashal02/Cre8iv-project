// YourComponent.js
import React from 'react';
import { useState, useRef } from 'react';
import { uploadImage } from '../api/imgupload/index';
import '../css/uploadImg.css';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    // Trigger file input click when the custom button is clicked
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      await uploadImage(formData);

      console.log('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <>
      <div className="frame-6">
        <div>
          <div className="text-wrapper-3">
            <input
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />

            {/* Custom-styled button or div */}
            <div onClick={handleButtonClick} className="frame-7">
              Browse
            </div>
          </div>
        </div>
      </div>


       
       
       {selectedFile && (
        <div
          style={{
            width: '450',
            height: '200px',
            display: 'inline-table',
           
          }}
        >
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Image"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              marginTop: '10px',
            }}
          />
        </div>
      )}

      <div>
        {selectedFile && (
          <div className="text-wrapper-3">
            <button onClick={handleUpload} className="frame-7">
              Generate Caption
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUpload;
