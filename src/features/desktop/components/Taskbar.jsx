import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Monitor, Tv, Terminal, Sparkles } from 'lucide-react';
import { playClick } from '../../../shared/utils/soundEffects';

export default function Taskbar({
  windows,
  activeWindowId,
  onToggleWindow,
  isStartOpen,
  setIsStartOpen,
  soundOn,
  setSoundOn,
  crtOn,
  setCrtOn,
  theme,
  setTheme
}) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const themes = [
    { id: 'win95', label: 'Teal 95' },
    { id: 'vaporwave', label: 'Vaporwave' },
    { id: 'matrix', label: 'Matrix' },
    { id: 'hotdog', label: 'Hotdog' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] win95-raised border-b-0 border-l-0 border-r-0 z-50 flex items-center justify-between px-1 text-black font-sys select-none pb-[env(safe-area-inset-bottom,0px)]">
      {/* Left side: Start Button & Window Tabs */}
      <div className="flex items-center gap-1 h-full py-1 min-w-0">
        {/* Start Button */}
        <button
          onClick={() => {
            playClick();
            setIsStartOpen(!isStartOpen);
          }}
          className={`win95-btn h-full px-2 sm:px-3 font-bold flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm tracking-wide flex-shrink-0 active:scale-95 ${
            isStartOpen ? 'active border-t-[#404040] border-l-[#404040] border-b-[#fff] border-r-[#fff] bg-[#dcdcdc]' : ''
          }`}
        >
          {/* 90s Windows Logo */}
          <div className="flex flex-col gap-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 justify-center items-center flex-shrink-0">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 bg-[#ff3333]"></div>
              <div className="w-1.5 h-1.5 bg-[#33cc33]"></div>
            </div>
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 bg-[#0066ff]"></div>
              <div className="w-1.5 h-1.5 bg-[#ffcc00]"></div>
            </div>
          </div>
          <span className="text-xs sm:text-sm">Start</span>
        </button>

        {/* Vertical divider */}
        <div className="w-[2px] h-6 bg-[#808080] border-r border-[#ffffff] flex-shrink-0"></div>

        {/* Quick Launch Icons */}
        <div className="hidden sm:flex items-center gap-1 px-0.5 flex-shrink-0">
          <button
            title="Open MS-DOS Terminal"
            onClick={() => onToggleWindow('terminal')}
            className="p-1 hover:bg-[#dfdfdf] active:bg-[#a0a0a0] rounded-none border border-transparent hover:border-[#808080]"
          >
            <Terminal className="w-3.5 h-3.5 text-black" />
          </button>
        </div>

        {/* Open Windows List in Taskbar */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-[38vw] sm:max-w-[46vw] md:max-w-[50vw] no-scrollbar">
          {windows.map((win) => {
            if (!win.isOpen) return null;
            const isActive = activeWindowId === win.id && !win.isMinimized;
            const WinIcon = win.icon;

            return (
              <button
                key={win.id}
                onClick={() => {
                  playClick();
                  onToggleWindow(win.id);
                }}
                className={`win95-btn h-7 px-1.5 sm:px-2 text-[11px] sm:text-xs flex items-center gap-1 max-w-[70px] sm:max-w-[110px] md:max-w-[140px] truncate flex-shrink-0 ${
                  isActive
                    ? 'font-bold bg-[#e0e0e0] border-t-[#404040] border-l-[#404040] border-b-[#fff] border-r-[#fff]'
                    : ''
                }`}
                title={win.title}
              >
                {WinIcon && <WinIcon className="w-3 h-3 flex-shrink-0" />}
                <span className="truncate">{win.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right side: System Tray */}
      <div className="flex items-center gap-1 sm:gap-1.5 h-7 px-1.5 win95-sunken bg-[#c0c0c0] text-xs flex-shrink-0">
        {/* Theme Dropdown */}
        <div className="hidden md:flex items-center gap-1 pr-1 border-r border-gray-400">
          <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
          <select
            value={theme}
            onChange={(e) => {
              playClick();
              setTheme(e.target.value);
            }}
            className="text-[11px] bg-[#dfdfdf] border border-gray-600 cursor-pointer focus:outline-none"
            title="Change Retro Theme"
          >
            {themes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* CRT Scanline Toggle */}
        <button
          onClick={() => {
            playClick();
            setCrtOn(!crtOn);
          }}
          className={`p-0.5 sm:p-1 hover:bg-[#dfdfdf] active:scale-95 ${crtOn ? 'text-green-700' : 'text-gray-500'}`}
          title={crtOn ? "CRT Scanlines: ON" : "CRT Scanlines: OFF"}
        >
          {crtOn ? <Tv className="w-3.5 h-3.5" /> : <Monitor className="w-3.5 h-3.5" />}
        </button>

        {/* Sound Toggle */}
        <button
          onClick={() => {
            setSoundOn(!soundOn);
            if (!soundOn) playClick();
          }}
          className="p-0.5 sm:p-1 hover:bg-[#dfdfdf] active:scale-95"
          title={soundOn ? "Mute Retro Sounds" : "Unmute Retro Sounds"}
        >
          {soundOn ? (
            <Volume2 className="w-3.5 h-3.5 text-blue-700" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-red-600" />
          )}
        </button>

        {/* Digital Clock */}
        <div className="font-mono-90s font-semibold text-[10px] sm:text-[11px] text-black tracking-tighter sm:tracking-wider pl-0.5 sm:pl-1">
          {time || '12:00'}
        </div>
      </div>
    </div>
  );
}
