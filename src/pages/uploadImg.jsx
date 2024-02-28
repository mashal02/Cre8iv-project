// UploadImg.js
import React from 'react';
import ImageUpload from '../components/imgupload'; // Adjust the path based on your project structure
import '../css/uploadImg.css';

export default function UploadImg() {
  return (
    <div className="upload-image">
      <div className="frame">
        <div className="div">
          <img
            className="depositphotos"
            alt="Depositphotos"
            src="https://c.animaapp.com/TpyzO73n/img/depositphotos-65365277-stock-illustration-medic-doctor-circle-ic@2x.png"
          />
          <div className="div-wrapper">
            <div className="text-wrapper">User</div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-2">
          <p className="p">Upload Image to get Caption</p>
          <div className="frame-3">
            <ImageUpload />{' '}
            {/* Replace the "Choose Image" button with ImageUpload component */}
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
