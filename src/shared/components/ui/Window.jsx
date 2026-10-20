import React, { useState } from 'react';
import { Minus, Square, X } from 'lucide-react';
import { playClick } from '../../utils/soundEffects';

export default function Window({
  title,
  icon: Icon,
  isOpen,
  isMinimized,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  children,
  defaultWidth = 'max-w-3xl',
  statusText = 'Ready'
}) {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      onClick={onFocus}
      style={{
        zIndex,
        display: isMinimized ? 'none' : 'flex'
      }}
      className={`fixed animate-window-open ${
        isMaximized
          ? 'top-[50px] sm:top-[58px] left-0 right-0 bottom-10 w-full h-[calc(100dvh-90px)] sm:h-[calc(100dvh-98px)] m-0'
          : `top-[54px] sm:top-[64px] left-1 sm:left-1/2 sm:-translate-x-1/2 w-[calc(100%-8px)] sm:w-[94%] md:w-full ${defaultWidth} bottom-11 sm:bottom-auto h-[calc(100dvh-100px)] sm:h-auto sm:max-h-[calc(100dvh-120px)]`
      } flex flex-col win95-raised shadow-2xl overflow-hidden`}
    >
      {/* Title Bar */}
      <div
        className="win95-titlebar px-2 py-1 flex items-center justify-between cursor-move select-none flex-shrink-0"
        onDoubleClick={() => {
          playClick();
          setIsMaximized(!isMaximized);
        }}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm tracking-wide truncate pr-2">
          {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />}
          <span className="truncate">{title}</span>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Minimize button */}
          <button
            title="Minimize"
            aria-label="Minimize"
            onClick={(e) => {
              e.stopPropagation();
              playClick();
              onMinimize();
            }}
            className="win95-btn w-6 h-5 sm:w-5 sm:h-5 text-xs font-bold leading-none flex items-center justify-center p-0 active:scale-95"
          >
            <Minus className="w-3 h-3 text-black stroke-[3]" />
          </button>

          {/* Maximize / Restore button */}
          <button
            title={isMaximized ? "Restore" : "Maximize"}
            aria-label={isMaximized ? "Restore" : "Maximize"}
            onClick={(e) => {
              e.stopPropagation();
              playClick();
              setIsMaximized(!isMaximized);
            }}
            className="win95-btn w-6 h-5 sm:w-5 sm:h-5 text-xs font-bold leading-none flex items-center justify-center p-0 active:scale-95"
          >
            <Square className="w-2.5 h-2.5 text-black stroke-[2.5]" />
          </button>

          {/* Close button */}
          <button
            title="Close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              playClick();
              onClose();
            }}
            className="win95-btn w-6 h-5 sm:w-5 sm:h-5 text-xs font-bold leading-none flex items-center justify-center p-0 bg-[#c0c0c0] hover:bg-[#e0e0e0] active:scale-95"
          >
            <X className="w-3 h-3 text-black stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Menu Bar (File, Edit, View, Help) - 90s classic chrome */}
      <div className="bg-[#c0c0c0] border-b border-[#808080] px-2 py-0.5 text-xs flex gap-3 text-black font-sys overflow-x-auto whitespace-nowrap scrollbar-none flex-shrink-0">
        <span className="hover:underline cursor-pointer"><u className="underline">F</u>ile</span>
        <span className="hover:underline cursor-pointer"><u className="underline">E</u>dit</span>
        <span className="hover:underline cursor-pointer"><u className="underline">V</u>iew</span>
        <span className="hover:underline cursor-pointer"><u className="underline">H</u>elp</span>
      </div>

      {/* Window Body */}
      <div className="flex-1 bg-[#c0c0c0] p-2 sm:p-3 overflow-y-auto overscroll-contain win95-sunken m-1 text-black font-sys">
        {children}
      </div>

      {/* 90s Status Bar */}
      <div className="bg-[#c0c0c0] border-t border-[#808080] px-2 py-0.5 text-[11px] text-gray-700 flex justify-between items-center font-sys flex-shrink-0">
        <div className="truncate pr-1 text-[10px] sm:text-[11px]">{statusText}</div>
        <div className="hidden sm:flex gap-2 divide-x divide-gray-400 pl-2 text-[10px]">
          <span className="pl-2">AtulOS 98</span>
          <span className="pl-2">MERN v2.0</span>
        </div>
      </div>
    </div>
  );
}
