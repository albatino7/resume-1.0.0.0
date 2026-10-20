import React from 'react';

export default function SkeletonLoader({ lines = 4, className = "" }) {
  return (
    <div className={`p-3 space-y-2.5 win95-sunken bg-white ${className}`}>
      <div className="h-4 bg-gray-200 border border-gray-300 w-1/3 animate-pulse"></div>
      <div className="space-y-1.5 pt-1">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 bg-gray-100 border border-gray-200 animate-pulse"
            style={{ width: `${Math.max(45, 95 - i * 12)}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
