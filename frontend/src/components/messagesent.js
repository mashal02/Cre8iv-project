import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(
        'https://localhost:3001/send-message',
        { message },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Update the received message in the state
      setReceivedMessage(response.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      c
      <div>
        <label>Enter Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={handleSendMessage}>Send Message</button>
      {receivedMessage && (
        <div>
          <p>Received Message from Server:</p>
          <p>{receivedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
