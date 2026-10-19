import React from 'react';

export const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse bg-neutral-800/60 dark:bg-[#1a2118] rounded-lg ${className}`}
      {...props}
    />
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-neutral-800 dark:border-dark-border bg-neutral-900/40 dark:bg-dark-card p-6 flex flex-col gap-4">
      <Skeleton className="w-full h-48 rounded-xl" />
      <div className="flex gap-2">
        <Skeleton className="w-20 h-5 rounded-full" />
        <Skeleton className="w-16 h-5 rounded-full" />
      </div>
      <Skeleton className="w-3/4 h-7 rounded" />
      <Skeleton className="w-full h-14 rounded" />
      <div className="flex justify-between items-center pt-4 border-t border-neutral-800/60 dark:border-dark-border/60">
        <Skeleton className="w-24 h-5 rounded" />
        <Skeleton className="w-28 h-8 rounded-lg" />
      </div>
    </div>
  );
};
