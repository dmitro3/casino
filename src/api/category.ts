import axios from 'axios';
import { BASE_URL } from '.';

export const getCategory = async () => {
  const res = await axios.get(`${BASE_URL}/category`);

  return res.data;
};
