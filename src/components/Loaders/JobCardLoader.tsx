import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const JobCardLoader = () => {
    return (
           <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div className="bg-gray-600">
      <Skeleton width={80} height={80} count={3} />
    </div>
  </SkeletonTheme>
    );
};

export default JobCardLoader;