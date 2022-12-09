import { lazy, Suspense } from "react";
import CoverCarouselSkeleton from "@components/carousel/cover-carousel-skeleton";
import Container from "@components/container";
import useTmdbMovieListApi from "@hooks/use-tmdb-movie-list-api";
import MovieDescription from "../movie-description";

const CoverCarousel = lazy(() => import("@components/carousel/cover-carousel"));

export default function GenreSection({ children, genreId }) {
  const [movies] = useTmdbMovieListApi(genreId);

  const moviesPosters = movies.map(
    ({ id, original_title, poster_path, vote_average }) => (
      <MovieDescription
        key={id}
        genreId={genreId}
        movieId={id}
        title={original_title}
        imagePath={poster_path}
        voteAverage={vote_average}
      />
    )
  );

  return (
    <section className="movies-carousel-section">
      <Container>{children}</Container>
      <Suspense fallback={<CoverCarouselSkeleton />}>
        <CoverCarousel moviesPosters={moviesPosters} />
      </Suspense>
    </section>
  );
}
