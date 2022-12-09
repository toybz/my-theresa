import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@components/card";
import Container from "@components/container";
import { getGenreName } from "@config/tmdb-api-connector.config";
import MovieCardSkeleton from "./components/movie-card/movie-card-skeleton";

const MovieCard = lazy(() => import("./components/movie-card"));

export default function MovieDetails() {
  const { genreId } = useParams();
  const genreName = getGenreName(genreId);

  return (
    <div className={`movie-details ${genreName}`}>
      <Container>
        <Card className={`banner ${genreName}`}>
          {genreName?.replace(/-/g, " ")}
        </Card>
        <Link to="/" className="button-go-back">
          Go back
        </Link>
        <Suspense fallback={<MovieCardSkeleton />}>
          <MovieCard />
        </Suspense>
      </Container>
    </div>
  );
}
