import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [secondMessage, setSecondMessage] = useState('');
  const [receivedSecondMessage, setReceivedSecondMessage] = useState('');

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

  const handleSendSecondMessage = async () => {
    try {
      const response = await axios.post(
        'https://localhost:3001/send-category',
        { message: secondMessage },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Update the received second message in the state
      setReceivedSecondMessage(response.data.message);
    } catch (error) {
      console.error('Error sending second message:', error);
    }
  };

  return (
    <div>
      <div>
        <label>Enter First Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={handleSendMessage}>Send First Message</button>
      {receivedMessage && (
        <div>
          <p>Received Message from Server:</p>
          <p>{receivedMessage}</p>
        </div>
      )}

      {/* Add input and button for the second message */}
      <div>
        <label>Enter Second Message:</label>
        <input
          type="text"
          value={secondMessage}
          onChange={(e) => setSecondMessage(e.target.value)}
        />
      </div>
      <button onClick={handleSendSecondMessage}>Send Second Message</button>
      {receivedSecondMessage && (
        <div>
          <p>Received Second Message from Server:</p>
          <p>{receivedSecondMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
