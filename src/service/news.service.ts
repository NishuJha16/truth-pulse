import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getAllNews = (type: string) => {
  const response = axios.get(
    `https://gnews.io/api/v4/search?q=${type}&apikey=${API_KEY}`
  );
  return response;
};

export const getTopHeadlines = () => {
  const response = axios.get(
    `https://gnews.io/api/v4/top-headlines?category=general&country=in&apikey=${API_KEY}`
  );
  return response;
};
