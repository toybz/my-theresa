import { createContext, useContext, useState } from "react";
import useLocalStorage from "@hooks/use-local-storage";

const FavoriteMoviesContext = createContext({
  favoriteMovies: [],
  addToFavorites: () => {},
  isMovieInTheList: () => {},
  removeFromFavorites: () => {},
});

const { Provider } = FavoriteMoviesContext;

export const FavoriteMoviesProvider = ({ children }) => {
  const [items, setItems] = useLocalStorage("favorite-movies", []);
  const [favoriteMovies, setFavoriteMovies] = useState(items);

  const isMovieInTheList = (movieId) =>
    favoriteMovies.some(
      (favoriteMovie) => favoriteMovie.id === parseInt(movieId)
    );

  const addToFavorites = (movie) => {
    if (isMovieInTheList(movie.id)) return;

    const movies = [...favoriteMovies, movie];
    setFavoriteMovies(movies);
    setItems(movies);
  };

  const removeFromFavorites = (movieId) => {
    const movies = favoriteMovies.filter(
      (favoriteMovie) => favoriteMovie.id !== parseInt(movieId)
    );

    setFavoriteMovies(movies);
    setItems(movies);
  };

  return (
    <Provider
      value={{
        favoriteMovies,
        addToFavorites,
        isMovieInTheList,
        removeFromFavorites,
      }}
    >
      {children}
    </Provider>
  );
};

export const useFavoriteMoviesContext = () => {
  const context = useContext(FavoriteMoviesContext);

  if (!context) {
    throw new Error(
      "useFavoriteMoviesContext must be used within a FavoriteMoviesProvider"
    );
  }

  return context;
};
