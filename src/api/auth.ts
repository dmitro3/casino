import axios from 'axios';
import { BASE_URL } from '.';

export const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const signUp = async (
  email: string,
  password: string,
  username: string,
) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, {
    email,
    password,
    username,
  });
  return response.data;
};
