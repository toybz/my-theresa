import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@assets/icons/StarIcon";
import HalfStarIcon from "@assets/icons/HalfStarIcon";
import HeartIcon from "@assets/icons/HeartIcon";
import FullHeartIcon from "@assets/icons/FullHeartIcon";
import Card from "@components/card";
import Image from "@components/image";
import { useFavoriteMoviesContext } from "@contexts/favorite-movies.context";
import useTmdbMovieDetailsApi from "@hooks/use-tmdb-movie-details-api";

export default function MovieCard() {
  const {
    favoriteMovies,
    addToFavorites,
    removeFromFavorites,
    isMovieInTheList,
  } = useFavoriteMoviesContext();
  const { movieId } = useParams();
  const [movie] = useTmdbMovieDetailsApi(movieId);
  const [isMovieStarred, setIsMovieStarred] = useState(
    isMovieInTheList(movieId)
  );

  useEffect(() => {
    setIsMovieStarred(isMovieInTheList(movieId));
  }, [favoriteMovies]);

  return (
    <Card className="movie-card">
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
        <div className="overview">“ {movie.overview} ”</div>
        <button
          className={`button-add-to-favorites ${
            isMovieStarred ? "clicked" : ""
          }`}
          onClick={() =>
            isMovieStarred
              ? removeFromFavorites(movieId)
              : addToFavorites(movie)
          }
        >
          {isMovieStarred ? <FullHeartIcon /> : <HeartIcon color="red" />}
          <span>
            {isMovieStarred ? "Remove from favorites" : "Add to favorites"}
          </span>
        </button>
      </div>
    </Card>
  );
}
