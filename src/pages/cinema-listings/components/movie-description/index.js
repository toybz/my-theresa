import { useHistory } from "react-router-dom";
import StarIcon from "@assets/icons/StarIcon";
import Image from "@components/image";

export default function MovieDescription({
  movieId,
  genreId,
  title,
  imagePath,
  voteAverage,
}) {
  const history = useHistory();

  function onSelectMovie() {
    history.push(`/movie-details/${genreId}/${movieId}`);
  }

  return (
    <article
      onClick={onSelectMovie}
      className="movie-description"
      data-testid={`${genreId}-${movieId}`}
    >
      <div className="movie-description-container">
        <div className="title-container">
          <div />
          <div>{title}</div>
          <div>
            <StarIcon />
            <div>{voteAverage}</div>
          </div>
        </div>
      </div>
      <Image src={imagePath} alt={title} />
    </article>
  );
}
