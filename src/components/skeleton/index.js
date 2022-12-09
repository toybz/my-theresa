import LoadingSkeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Skeleton(props) {
  return (
    <SkeletonTheme color="#1f1f1f" highlightColor="#333">
      <LoadingSkeleton {...props} />
    </SkeletonTheme>
  );
}
