import { Children } from "react";

const SkeletonCard = () => (
  <div className="w-[22.375rem] h-[5.75rem] bg-[#2b2b2b] rounded-md animate-pulse" />
);

function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      {Children.toArray(
        Array(4)
          .fill(0)
          .map((_) => <SkeletonCard />)
      )}
    </div>
  );
}

export default LoadingSkeleton;
