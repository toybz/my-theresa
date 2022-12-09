import Container from "@components/container";
import { useFavoriteMoviesContext } from "@contexts/favorite-movies.context";
import FavoriteMovieCard from "./components/favorite-movie-card";

export default function FavoriteMovies() {
  const { favoriteMovies } = useFavoriteMoviesContext();

  return (
    <div className="favorite-movies">
      <Container>
        {favoriteMovies.length ? (
          <div className="favorite-movies-grid">
            {favoriteMovies.map((favoriteMovie, key) => (
              <FavoriteMovieCard key={key} movie={favoriteMovie} />
            ))}
          </div>
        ) : (
          <h1 className="no-movies-selected">
            There are no favorite movies selected
          </h1>
        )}
      </Container>
    </div>
  );
}
