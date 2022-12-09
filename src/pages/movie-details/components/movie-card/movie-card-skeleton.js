import Card from "@components/card";
import Skeleton from "@components/skeleton";

export default function MovieCardSkeleton() {
  return (
    <Card className="movie-card">
      <Skeleton width={185} height={280} />
      <div className="description">
        <Skeleton className="skeleton" width={150} height={20} />
        <Skeleton className="skeleton" width={170} height={50} />
        <Skeleton className="skeleton" width="50%" height={60} />
        <Skeleton className="skeleton" width={200} height={30} />
      </div>
    </Card>
  );
}
