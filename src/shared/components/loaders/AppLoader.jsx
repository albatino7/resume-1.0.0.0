import React, { useState, useEffect } from 'react';
import { playClick, playStartup } from '../../utils/soundEffects';

export default function AppLoader({ onLoaded }) {
  const [phase, setPhase] = useState('bios'); // 'bios' | 'splash'
  const [biosLines, setBiosLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading SYSTEM.INI...');

  // Phase 1: BIOS Memory Test & Detection (quick 900ms sequence)
  useEffect(() => {
    const biosLog = [
      'Award Modular BIOS v4.51PG, An Energy Star Ally',
      'Copyright (C) 1984-1998, Award Software, Inc.',
      'CPU: Pentium II Processor 450MHz',
      'Memory Test: 65536K OK',
      'Award Plug and Play BIOS Extension v1.0A',
      'Detecting Primary Master ... MERN_STACK_SSD 2.0GB',
      'Detecting Secondary Master ... WEBRTC_STREAMING_DEVICE',
      'Loading AtulOS 98 Boot Manager...'
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < biosLog.length) {
        setBiosLines((prev) => [...prev, biosLog[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setPhase('splash');
        }, 200);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  // Phase 2: Windows 95/98 Splash Screen Progress
  useEffect(() => {
    if (phase !== 'splash') return;

    const statuses = [
      'Loading SYSTEM.INI and USER.DAT...',
      'Mounting virtual drive C:\\ATUL\\PROJECTS...',
      'Initializing TCP/IP 56k Dial-up Gateway...',
      'Binding React 19 & Tailwind Engine...',
      'Starting Atul Demond 98 Desktop GUI...'
    ];

    let currentStatusIdx = 0;
    const statusInterval = setInterval(() => {
      currentStatusIdx = (currentStatusIdx + 1) % statuses.length;
      setStatusText(statuses[currentStatusIdx]);
    }, 320);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(statusInterval);
          setTimeout(() => {
            playStartup();
            onLoaded();
          }, 350);
          return 100;
        }
        return prev + 5;
      });
    }, 70);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, [phase, onLoaded]);

  const handleSkip = () => {
    playClick();
    playStartup();
    onLoaded();
  };

  // Phase 1: Authentic 90s BIOS Screen
  if (phase === 'bios') {
    return (
      <div
        onClick={handleSkip}
        className="fixed inset-0 bg-black text-[#00ff66] font-mono-90s p-4 sm:p-8 z-[99999] flex flex-col justify-between select-none cursor-pointer overflow-hidden"
      >
        <div className="space-y-1 text-xs sm:text-sm">
          {/* Energy Star logo in top right */}
          <div className="flex justify-between items-start mb-4">
            <div className="text-yellow-400 font-bold">
              ENERGY STAR ALLIED SYSTEM • BIOS POST
            </div>
            <div className="border border-white px-2 py-0.5 text-white text-[10px] hidden sm:block">
              EPA POLLUTION PREVENTER
            </div>
          </div>

          {biosLines.map((line, idx) => (
            <div key={idx} className="leading-relaxed">
              {line}
            </div>
          ))}
          <div className="text-white animate-pulse">_</div>
        </div>

        <div className="flex items-center justify-between text-gray-500 text-[11px] pt-4 border-t border-gray-800">
          <span>Press DEL to enter SETUP • Atul Demond OS</span>
          <span className="text-yellow-400 hover:underline">
            [ Tap anywhere to fast-boot ⏩ ]
          </span>
        </div>
      </div>
    );
  }

  // Phase 2: Windows 95/98 Cloud Splash Boot Screen
  const totalBlocks = 16;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 bg-[var(--desktop-bg,#120422)] z-[99999] flex flex-col items-center justify-center p-4 font-sys select-none cursor-pointer animate-fadeIn"
    >
      <div className="win95-raised p-5 sm:p-7 bg-[#c0c0c0] max-w-md w-full shadow-2xl space-y-4 border-4 border-double border-white text-center">
        {/* Title bar */}
        <div className="win95-titlebar px-2 py-1 flex items-center justify-between text-xs font-bold text-white -mx-3 -mt-3 mb-3">
          <span>Starting AtulOS 98</span>
          <span className="text-[10px] font-mono-90s bg-blue-900 px-1">v4.10.1998</span>
        </div>

        {/* Windows 95/98 4-Color Logo */}
        <div className="flex flex-col items-center gap-2 py-2">
          <div className="flex flex-col gap-1 w-14 h-14 justify-center items-center win95-sunken p-1.5 bg-white shadow-inner">
            <div className="flex gap-1">
              <div className="w-5 h-5 bg-[#ff3333] shadow-xs"></div>
              <div className="w-5 h-5 bg-[#33cc33] shadow-xs"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-5 h-5 bg-[#0066ff] shadow-xs"></div>
              <div className="w-5 h-5 bg-[#ffcc00] shadow-xs"></div>
            </div>
          </div>

          <div>
            <h1 className="font-pixel text-base sm:text-lg font-bold text-blue-900 tracking-wider">
              ATUL DEMOND 98
            </h1>
            <p className="text-xs font-mono-90s text-gray-700 font-semibold mt-0.5">
              MERN Stack Architecture Edition
            </p>
          </div>
        </div>

        {/* Progress status & block gauge */}
        <div className="space-y-1.5 text-left">
          <div className="flex justify-between items-center text-[11px] font-sys text-gray-800">
            <span className="truncate pr-2 font-semibold">{statusText}</span>
            <span className="font-mono-90s font-bold text-blue-900">{progress}%</span>
          </div>

          {/* 90s Block Progress Bar */}
          <div className="win95-sunken p-1 bg-white">
            <div className="flex gap-0.5 bg-black p-0.5 win95-sunken h-5 items-center">
              {Array.from({ length: filledBlocks }).map((_, i) => (
                <div
                  key={`filled-${i}`}
                  className="flex-1 h-full bg-[#000080] border border-blue-400"
                ></div>
              ))}
              {Array.from({ length: totalBlocks - filledBlocks }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="flex-1 h-full bg-gray-950 border border-gray-900"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Skip Hint */}
        <div className="pt-2 flex items-center justify-between text-[11px] border-t border-gray-400 text-gray-600">
          <span>Microsoft Windows 98 compatible</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="win95-btn px-2.5 py-0.5 text-[10px] font-bold text-blue-900 active:scale-95"
          >
            Fast Boot ⏩
          </button>
        </div>
      </div>
    </div>
  );
}
