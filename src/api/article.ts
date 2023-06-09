import axios from 'axios';
import { BASE_URL } from '.';

export const getArticles = async (
  cursor: number,
  take: number,
  category?: string,
) => {
  const res = await axios.post(`${BASE_URL}/article`, {
    cursor,
    take,
    category,
  });

  return res.data;
};

export const getArticlesCount = async () => {
  const res = await axios.get(`${BASE_URL}/article/count`);
  return res;
};

export const getSingleArticle = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/article/${id}`);
  return res.data;
};
