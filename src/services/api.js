import axios from "axios";

const API_KEY = "abcd1234"; 

export const getMovieDetails = async (id) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  return res.data;
};
