import React from 'react';
import { Globe } from 'lucide-react';

export default function RouteLoader({ message = "Connecting to Cyber Host 1998..." }) {
  return (
    <div className="fixed inset-0 bg-[var(--desktop-bg,#008080)]/90 z-[9999] flex items-center justify-center p-4 font-sys select-none">
      <div className="win95-raised p-4 bg-[#c0c0c0] w-80 shadow-2xl text-center space-y-3">
        <div className="win95-titlebar px-2 py-1 text-xs font-bold text-white flex items-center gap-1.5 -mx-2 -mt-2 mb-2">
          <Globe className="w-3.5 h-3.5 text-yellow-300" />
          <span>Netscape Cyber Gateway</span>
        </div>

        <div className="w-12 h-12 win95-sunken bg-black mx-auto flex items-center justify-center p-1">
          <Globe className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <div className="font-bold text-xs text-blue-900">
          {message}
        </div>

        <div className="win95-sunken p-1 bg-white">
          <div className="h-3 bg-[var(--win-titlebar-bg,#000080)] animate-pulse"></div>
        </div>

        <div className="text-[10px] text-gray-600 font-mono-90s">
          Transferring 56,600 baud packets...
        </div>
      </div>
    </div>
  );
}
