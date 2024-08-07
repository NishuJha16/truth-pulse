import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getAllNews = (type: string) => {
  const response = axios.get(
    `https://newsapi.org/v2/everything?q=${type}&from=2024-07-07&to=2024-08-06&sortBy=popularity&apiKey=${API_KEY}`
  );
  return response;
};

export const getTopHeadlines = () => {
  const response = axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
  );
  return response;
};
