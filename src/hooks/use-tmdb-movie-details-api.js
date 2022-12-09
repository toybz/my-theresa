import { useLayoutEffect, useState } from "react";
import TMDBApiConnector from "@config/tmdb-api-connector.config";

export default function useTmdbMovieDetailsApi(movieId) {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    (async () => {
      try {
        const { data } = await TMDBApiConnector.get(`/movie/${movieId}`);

        setMovie(data);
      } catch (e) {
        setError(
          "There was an error when trying to get the movie description 😔 We are working to fix it! Please, try again in a few minutes."
        );
      }
    })();
  }, [movieId]);

  return [movie, error];
}
