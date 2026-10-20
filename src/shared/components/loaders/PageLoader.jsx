import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function PageLoader({ title = "Loading Feature...", description = "Reading sectors from floppy drive A:..." }) {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 30 : prev + 15));
    }, 180);
    return () => clearInterval(timer);
  }, []);

  const totalBlocks = 12;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[220px] select-none font-sys text-center">
      <div className="win95-raised p-4 bg-[#c0c0c0] w-full max-w-sm space-y-3">
        {/* Header */}
        <div className="flex items-center gap-2 text-blue-900 font-bold text-xs sm:text-sm">
          <Loader2 className="w-4 h-4 animate-spin text-blue-800" />
          <span>{title}</span>
        </div>

        <p className="text-gray-700 text-xs text-left">
          {description}
        </p>

        {/* 90s Progress Bar Gauge */}
        <div className="win95-sunken p-1 bg-white flex items-center gap-1">
          <div className="flex-1 flex gap-0.5 bg-black p-0.5 win95-sunken">
            {Array.from({ length: filledBlocks }).map((_, i) => (
              <div key={`fill-${i}`} className="flex-1 h-3.5 bg-blue-600 border border-blue-400"></div>
            ))}
            {Array.from({ length: emptyBlocks }).map((_, i) => (
              <div key={`empty-${i}`} className="flex-1 h-3.5 bg-gray-900 border border-gray-800"></div>
            ))}
          </div>
          <span className="font-mono-90s text-xs font-bold w-10 text-right text-black">
            {progress}%
          </span>
        </div>

        <div className="text-[10px] text-gray-500 font-mono-90s text-right">
          ATUL-DOS MEM: 640K OK
        </div>
      </div>
    </div>
  );
}
