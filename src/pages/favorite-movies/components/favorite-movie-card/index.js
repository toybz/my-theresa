import StarIcon from "@assets/icons/StarIcon";
import HalfStarIcon from "@assets/icons/HalfStarIcon";
import Card from "@components/card";
import Image from "@components/image";
import { useFavoriteMoviesContext } from "@contexts/favorite-movies.context";

export default function FavoriteMovieCard({ movie }) {
  const { removeFromFavorites } = useFavoriteMoviesContext();

  return (
    <Card className="favorite-movie-card">
      <Image src={movie.poster_path} />
      <div className="description">
        <div className="stars">
          {Array(parseInt(movie.vote_average ?? 0))
            .fill(null)
            .map((_v, k) => (
              <StarIcon key={k} />
            ))}
          {movie.vote_average % 2 !== 0 && <HalfStarIcon />}
          <sup>({movie.vote_average})</sup>
        </div>
        <div className="title">{movie.title}</div>
        <button
          className="button-remove-from-favorites"
          onClick={() => removeFromFavorites(movie.id)}
        >
          <span>Remove movie</span>
        </button>
      </div>
    </Card>
  );
}
