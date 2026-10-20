import React, { useState } from 'react';
import { Power, RotateCcw, Monitor } from 'lucide-react';
import { playClick, playStartup } from '../../../shared/utils/soundEffects';

export default function ShutdownModal({ isOpen, onClose }) {
  const [option, setOption] = useState('shutdown');
  const [isShutDown, setIsShutDown] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    playClick();
    if (option === 'restart') {
      onClose();
      playStartup();
    } else {
      setIsShutDown(true);
    }
  };

  if (isShutDown) {
    return (
      <div className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center text-center p-4 font-mono-90s select-none">
        <div className="text-amber-500 text-xl sm:text-3xl font-bold tracking-widest mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]">
          It is now safe to turn off your computer.
        </div>
        <p className="text-gray-400 text-xs sm:text-sm mb-6 max-w-md">
          Thank you for visiting Atul Demond&apos;s 90s cyber portfolio!
        </p>
        <button
          onClick={() => {
            setIsShutDown(false);
            onClose();
            playStartup();
          }}
          className="win95-btn px-4 py-2 font-bold text-black flex items-center gap-2 text-sm bg-[#c0c0c0] active:scale-95"
        >
          <RotateCcw className="w-4 h-4 text-blue-900" />
          <span>Restart AtulOS 98</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center p-4 select-none">
      <div className="win95-raised w-80 bg-[#c0c0c0] font-sys shadow-2xl">
        {/* Title bar */}
        <div className="win95-titlebar px-2 py-1 flex items-center justify-between text-xs font-bold text-white">
          <div className="flex items-center gap-1.5">
            <Power className="w-3.5 h-3.5" />
            <span>Shut Down Windows</span>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="win95-btn w-4 h-4 text-[10px] font-bold p-0 flex items-center justify-center active:scale-95"
          >
            ✕
          </button>
        </div>

        {/* Dialog body */}
        <div className="p-3 text-xs text-black space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 win95-raised flex items-center justify-center bg-[#d4d0c8] flex-shrink-0">
              <Monitor className="w-5 h-5 text-blue-900" />
            </div>
            <div>
              <p className="font-bold">What do you want the computer to do?</p>
              <div className="mt-2 space-y-1.5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shutdown-option"
                    value="shutdown"
                    checked={option === 'shutdown'}
                    onChange={() => setOption('shutdown')}
                  />
                  <span>Shut down the portfolio</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shutdown-option"
                    value="restart"
                    checked={option === 'restart'}
                    onChange={() => setOption('restart')}
                  />
                  <span>Restart system session</span>
                </label>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-2 pt-2 border-t border-gray-400">
            <button
              onClick={handleConfirm}
              className="win95-btn px-4 py-1 text-xs font-bold active:scale-95"
            >
              OK
            </button>
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="win95-btn px-4 py-1 text-xs active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
