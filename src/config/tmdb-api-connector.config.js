import axios from "axios";
import GENRES from "@constants/genres.constant";

export const getGenreName = (genreId) =>
  Object.entries(GENRES)
    .find(([, id]) => id === parseInt(genreId))[0]
    ?.toLowerCase()
    ?.replace(/_/g, "-");

export default axios.create({
  baseURL: process.env.TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
  params: {
    api_key: process.env.TMDB_API_TOKEN,
    language: "en-US",
  },
});
