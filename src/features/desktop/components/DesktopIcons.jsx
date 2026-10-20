import React from 'react';
import {
  Monitor,
  FolderGit2,
  Cpu,
  GraduationCap,
  FileText
} from 'lucide-react';
import { playClick } from '../../../shared/utils/soundEffects';

export default function DesktopIcons({ onOpenWindow, activeWindowId }) {
  const icons = [
    {
      id: 'about',
      label: 'My Bio & Summary',
      sublabel: 'Atul Demond',
      icon: Monitor
    },
    {
      id: 'projects',
      label: 'Projects Explorer',
      sublabel: 'Fullstack Apps',
      icon: FolderGit2
    },
    {
      id: 'skills',
      label: 'Skills.exe',
      sublabel: 'MERN & Tools',
      icon: Cpu
    },
    {
      id: 'education',
      label: 'Education.doc',
      sublabel: 'Degrees & Marks',
      icon: GraduationCap
    },
    {
      id: 'resume',
      label: 'Resume.pdf',
      sublabel: 'Print & Download',
      icon: FileText
    }
  ];

  return (
    <div className="p-2 sm:p-4 md:p-6 grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-col md:flex-wrap md:max-h-[calc(100vh-120px)] gap-2 sm:gap-3 md:gap-5 w-full md:w-fit overflow-y-auto max-h-[calc(100dvh-95px)] select-none">
      {icons.map((item) => {
        const Icon = item.icon;
        const isActive = activeWindowId === item.id;

        return (
          <button
            key={item.id}
            onDoubleClick={() => {
              playClick();
              onOpenWindow(item.id);
            }}
            onClick={() => {
              playClick();
              onOpenWindow(item.id);
            }}
            className={`group flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-none w-full sm:w-26 text-center cursor-pointer transition-none border active:scale-95 ${
              isActive
                ? 'border-dotted border-white/80 bg-blue-900/30'
                : 'border-transparent hover:border-dotted hover:border-white/60 hover:bg-black/10'
            }`}
          >
            {/* Retro Icon Container */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 win95-raised flex items-center justify-center bg-[#c0c0c0] group-hover:scale-105 transition-transform">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
            </div>

            {/* Label */}
            <span className="text-[10px] sm:text-[11px] font-sys font-semibold text-white drop-shadow-[1px_1px_1px_#000] px-0.5 line-clamp-2 leading-tight">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
