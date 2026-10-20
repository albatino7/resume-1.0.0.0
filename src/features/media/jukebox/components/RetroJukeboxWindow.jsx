import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, SkipForward, Music, Disc } from 'lucide-react';
import { playClick } from '../../../../shared/utils/soundEffects';

const TRACKS = [
  {
    title: 'CyberDial 1998 (Synth Wave)',
    artist: 'Atul Demond',
    duration: '0:45',
    bpm: 120,
    notes: [
      { f: 261.63, d: 0.2 }, { f: 329.63, d: 0.2 }, { f: 392.00, d: 0.2 }, { f: 523.25, d: 0.4 },
      { f: 440.00, d: 0.2 }, { f: 349.23, d: 0.2 }, { f: 392.00, d: 0.4 },
      { f: 329.63, d: 0.2 }, { f: 261.63, d: 0.2 }, { f: 293.66, d: 0.4 }, { f: 261.63, d: 0.6 }
    ]
  },
  {
    title: 'MERN Stack 8-Bit Chime',
    artist: 'Atul Demond',
    duration: '0:38',
    bpm: 135,
    notes: [
      { f: 523.25, d: 0.15 }, { f: 659.25, d: 0.15 }, { f: 783.99, d: 0.15 }, { f: 1046.50, d: 0.3 },
      { f: 880.00, d: 0.15 }, { f: 783.99, d: 0.15 }, { f: 659.25, d: 0.3 },
      { f: 587.33, d: 0.2 }, { f: 523.25, d: 0.4 }
    ]
  },
  {
    title: 'Netscape Gold Theme',
    artist: 'Cyber 90s',
    duration: '0:50',
    bpm: 110,
    notes: [
      { f: 329.63, d: 0.25 }, { f: 392.00, d: 0.25 }, { f: 493.88, d: 0.25 }, { f: 587.33, d: 0.5 },
      { f: 493.88, d: 0.25 }, { f: 392.00, d: 0.25 }, { f: 329.63, d: 0.6 }
    ]
  }
];

export default function RetroJukeboxWindow() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bars, setBars] = useState([40, 65, 80, 50, 90, 70, 30, 85, 60, 45]);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  const currentTrack = TRACKS[currentTrackIndex];

  // Visualizer loop
  useEffect(() => {
    if (!isPlaying) return;
    const anim = setInterval(() => {
      setBars(
        Array.from({ length: 12 }, () => Math.floor(Math.random() * 85) + 15)
      );
    }, 120);
    return () => clearInterval(anim);
  }, [isPlaying]);

  const stopMusic = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setBars([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
  };

  const playSequence = (notes, index = 0) => {
    if (index >= notes.length) {
      timerRef.current = setTimeout(() => playSequence(notes, 0), 600);
      return;
    }

    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const note = notes[index];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = index % 2 === 0 ? 'square' : 'triangle';
      osc.frequency.setValueAtTime(note.f, ctx.currentTime);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + note.d * 0.95);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + note.d);

      timerRef.current = setTimeout(() => {
        playSequence(notes, index + 1);
      }, note.d * 1000);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleTogglePlay = () => {
    playClick();
    if (isPlaying) {
      stopMusic();
    } else {
      setIsPlaying(true);
      playSequence(currentTrack.notes);
    }
  };

  const handleNext = () => {
    playClick();
    stopMusic();
    const nextIdx = (currentTrackIndex + 1) % TRACKS.length;
    setCurrentTrackIndex(nextIdx);
    setIsPlaying(true);
    setTimeout(() => {
      playSequence(TRACKS[nextIdx].notes);
    }, 200);
  };

  return (
    <div className="p-2 space-y-2 text-xs select-none">
      {/* 90s Winamp-style chassis */}
      <div className="win95-raised p-2.5 bg-[#202020] text-[#00ff66] font-mono-90s border-2 border-gray-400">
        {/* Winamp Top Banner */}
        <div className="flex items-center justify-between pb-1 mb-2 border-b border-gray-700 text-[10px] text-gray-400">
          <span className="flex items-center gap-1 font-bold text-yellow-400">
            <Disc className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
            <span>WIN-AMP 1998 AUDIO PLAYER</span>
          </span>
          <span className="text-[#00ff66]">128 kbps</span>
        </div>

        {/* LED Track Title & Time Display */}
        <div className="win95-sunken bg-black p-2 mb-2 flex items-center justify-between">
          <div className="truncate">
            <div className="text-yellow-300 font-bold truncate text-xs">
              {currentTrack.title}
            </div>
            <div className="text-gray-400 text-[10px]">
              {currentTrack.artist} • {currentTrack.duration}
            </div>
          </div>
          <div className="text-red-500 font-bold text-sm tracking-widest pl-2">
            {isPlaying ? 'PLAY' : 'PAUSE'}
          </div>
        </div>

        {/* Real-time Spectrum Visualizer */}
        <div className="win95-sunken bg-black p-2 h-14 flex items-end justify-between gap-1 mb-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-[#00ff66] transition-all duration-100"
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>

        {/* Player Buttons */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-1">
          <button
            onClick={handleTogglePlay}
            className="win95-btn px-2.5 sm:px-3 py-1.5 sm:py-1 font-bold text-black flex items-center gap-1 text-xs active:scale-95"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            onClick={stopMusic}
            className="win95-btn px-2.5 sm:px-3 py-1.5 sm:py-1 font-bold text-black flex items-center gap-1 text-xs active:scale-95"
          >
            <Square className="w-3.5 h-3.5 fill-black" />
            <span>Stop</span>
          </button>

          <button
            onClick={handleNext}
            className="win95-btn px-2.5 sm:px-3 py-1.5 sm:py-1 font-bold text-black flex items-center gap-1 text-xs active:scale-95"
            title="Next Track"
          >
            <SkipForward className="w-3.5 h-3.5" />
            <span>Next</span>
          </button>
        </div>
      </div>

      {/* Playlist Selector */}
      <div className="win95-raised p-2 bg-[#c0c0c0] font-sys">
        <div className="text-[11px] font-bold text-gray-800 mb-1 flex items-center gap-1">
          <Music className="w-3.5 h-3.5 text-blue-900" />
          <span>Playlist (Track 1 of {TRACKS.length})</span>
        </div>
        <div className="win95-sunken p-1 bg-white space-y-0.5">
          {TRACKS.map((t, idx) => (
            <div
              key={idx}
              onClick={() => {
                playClick();
                stopMusic();
                setCurrentTrackIndex(idx);
              }}
              className={`p-1 flex items-center justify-between text-xs cursor-pointer ${
                currentTrackIndex === idx
                  ? 'bg-[#000080] text-white font-bold'
                  : 'hover:bg-gray-100 text-black'
              }`}
            >
              <span>{idx + 1}. {t.title}</span>
              <span className="text-[10px] font-mono-90s">{t.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
