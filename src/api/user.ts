import axios from 'axios';
import { BASE_URL } from 'src/api';

export const getSingleUserByUsername = async (username: string) => {
  const res = await axios.get(`${BASE_URL}/users/username/${username}`);
  return res.data;
};
