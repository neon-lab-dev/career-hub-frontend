// utils/updateUserDetails.js
import axios from 'axios';

const updateUserDetails = async (formData: any) => {
  try {
    const response = await axios.put('https://carrerhub-backend.vercel.app/api/v1/user/details', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user details:', error);
    throw error;
  }
};

export default updateUserDetails;
