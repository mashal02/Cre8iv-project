import React from 'react';
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
            <div className="frame-4">
              <div className="frame-5">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/TpyzO73n/img/rectangle-5@2x.png"
                />
                <div className="text-wrapper-2">Choose Image</div>
              </div>
            </div>
            <div className="frame-6">
              <div className="frame-7">
                <div className="text-wrapper-3">Upload</div>
              </div>
              <div className="frame-7">
                <div className="text-wrapper-3">Analyze</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
