// api.js
import axios from 'axios';

const BASE_URL = 'https://localhost:3001';

const uploadImage = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/uploadimg`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; // You can return the response data if needed
  } catch (error) {
    throw error;
  }
};

export { uploadImage };
