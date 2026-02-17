import axios from "axios";

const API_KEY = "8d5d5946";

export const searchMovies = async (query) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
  );

  return res.data.Search || [];
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );

  return res.data;
};
