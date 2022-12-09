import Skeleton from "@components/skeleton";
import CoverCarousel from "./cover-carousel";

export default function CoverCarouselSkeleton() {
  const moviesPosters = Array(5)
    .fill(null)
    .map((_v, k) => (
      <Skeleton className="skeleton" width="100%" height={280} />
    ));

  return <CoverCarousel moviesPosters={moviesPosters} />;
}
