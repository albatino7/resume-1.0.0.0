import React from 'react';
import { Terminal, Flame } from 'lucide-react';
import { portfolioData } from '../../../shared/constants/portfolioData';
import { playClick } from '../../../shared/utils/soundEffects';

export default function RetroBanner({ onOpenWindow }) {
  const handleNav = (id) => {
    playClick();
    onOpenWindow(id);
  };

  return (
    <header className="w-full bg-[#c0c0c0] win95-raised border-t-0 border-l-0 border-r-0 text-black font-sys select-none z-30 shadow-md">
      {/* 90s Top Ticker Bar - One Solid Color Theme */}
      <div className="bg-[var(--win-titlebar-bg,#000080)] text-yellow-300 py-0.5 sm:py-1 px-1.5 sm:px-2 text-xs overflow-hidden flex items-center border-b border-[#404040]">
        <div className="flex items-center gap-1 font-bold whitespace-nowrap bg-red-600 text-white px-1 sm:px-1.5 py-0.2 sm:py-0.5 text-[9px] sm:text-[10px] mr-1.5 sm:mr-2 blink flex-shrink-0">
          <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
          <span>CYBER 1998</span>
        </div>

        <div className="flex-1 overflow-hidden relative h-4 sm:h-5">
          <div className="animate-retro-marquee font-mono-90s text-[11px] sm:text-xs tracking-wider">
            ⚡ ATUL DEMOND ⚡ MERN STACK DEVELOPER (2+ YRS) ⚡ REACT • NODE.JS • EXPRESS • MONGODB • GSAP • WEBRTC ⚡ CALL: 8651029001 ⚡ DELHI DABRI MOR ⚡ ATULDEMOND@GMAIL.COM ⚡
          </div>
        </div>

        {/* Counter Widget */}
        <div className="hidden md:flex items-center gap-1.5 ml-2 bg-black px-1.5 py-0.5 border border-gray-500 text-[10px] sm:text-[11px] font-mono-90s text-green-400 flex-shrink-0">
          <span className="text-gray-400 text-[9px]">HITS:</span>
          <span className="font-bold tracking-widest text-[#00ff66]">
            {portfolioData.retroStats.hits}
          </span>
        </div>
      </div>

      {/* Navigation Quick Bar - Smooth horizontal scroll on mobile */}
      <div className="px-1.5 sm:px-2 py-1 flex items-center justify-between gap-1.5 text-xs bg-[#d4d0c8]">
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="font-bold font-pixel text-[9px] sm:text-[10px] text-blue-900 tracking-tighter">
            ATUL DEMOND //
          </span>
          <span className="text-gray-700 hidden lg:inline text-xs">
            MERN Stack Developer
          </span>
        </div>

        {/* Quick window launcher pills - Touch scrollable */}
        <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap no-scrollbar py-0.5 pl-1 flex-1 justify-end">
          <button
            onClick={() => handleNav('about')}
            className="win95-btn px-1.5 sm:px-2 py-0.5 text-[11px] hover:bg-[#e6e6e6] active:scale-95 flex-shrink-0"
          >
            👤 Bio
          </button>
          <button
            onClick={() => handleNav('projects')}
            className="win95-btn px-1.5 sm:px-2 py-0.5 text-[11px] font-bold text-blue-900 hover:bg-[#e6e6e6] active:scale-95 flex-shrink-0"
          >
            📂 Projects
          </button>
          <button
            onClick={() => handleNav('skills')}
            className="win95-btn px-1.5 sm:px-2 py-0.5 text-[11px] hover:bg-[#e6e6e6] active:scale-95 flex-shrink-0"
          >
            ⚡ Skills
          </button>
          <button
            onClick={() => handleNav('education')}
            className="win95-btn px-1.5 sm:px-2 py-0.5 text-[11px] hover:bg-[#e6e6e6] active:scale-95 flex-shrink-0"
          >
            🎓 Education
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="win95-btn px-1.5 sm:px-2 py-0.5 text-[11px] font-bold text-red-800 hover:bg-[#e6e6e6] active:scale-95 flex-shrink-0"
          >
            ✉️ Contact
          </button>
          <button
            onClick={() => handleNav('terminal')}
            className="win95-btn px-1.5 sm:px-2 py-0.5 text-[11px] flex items-center gap-0.5 hover:bg-[#e6e6e6] active:scale-95 flex-shrink-0"
          >
            <Terminal className="w-2.5 h-2.5" />
            <span>CLI</span>
          </button>
        </div>
      </div>
    </header>
  );
}
