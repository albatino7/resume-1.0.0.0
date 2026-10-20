import React, { useRef, useEffect } from 'react';
import {
  User,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Terminal,
  FileText,
  Gamepad2,
  Music,
  Phone,
  Power,
  ExternalLink,
  ChevronRight,
  Globe
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../../../shared/components/ui/SocialIcons';
import { playClick } from '../../../shared/utils/soundEffects';

export default function StartMenu({
  isOpen,
  onClose,
  onOpenWindow,
  onTriggerShutdown,
  onToggleViewMode
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        if (!e.target.closest('button')?.innerText?.includes('Start')) {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.addEventListener('pointerdown', handlePointerDown);
    }
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuItems = [
    { id: 'about', label: 'About Atul Demond', icon: User },
    { id: 'projects', label: 'Projects & Work', icon: FolderGit2 },
    { id: 'skills', label: 'Technical Skills.exe', icon: Cpu },
    { id: 'education', label: 'Education Records.doc', icon: GraduationCap },
    { id: 'contact', label: 'Contact & Hire Me.msg', icon: Mail },
    { id: 'terminal', label: 'MS-DOS Prompt', icon: Terminal },
    { id: 'resume', label: 'View Full Resume.pdf', icon: FileText },
    { id: 'minesweeper', label: 'Play Minesweeper', icon: Gamepad2 },
    { id: 'jukebox', label: '90s Retro Jukebox', icon: Music }
  ];

  return (
    <div
      ref={menuRef}
      className="fixed bottom-10 left-1 w-[calc(100vw-12px)] sm:w-72 max-w-xs bg-[#c0c0c0] win95-raised z-50 shadow-2xl flex select-none font-sys max-h-[calc(100dvh-50px)] overflow-y-auto"
    >
      {/* 90s Vertical Side Banner - One Solid Theme Color */}
      <div className="w-7 sm:w-8 bg-[var(--win-titlebar-bg,#000080)] text-white flex items-end justify-center pb-3 overflow-hidden flex-shrink-0">
        <span className="font-pixel text-[10px] sm:text-[11px] font-bold tracking-widest -rotate-90 origin-center whitespace-nowrap text-white drop-shadow-[1px_1px_1px_#000]">
          ATUL 98
        </span>
      </div>

      {/* Main Menu Items */}
      <div className="flex-1 py-1 flex flex-col justify-between min-w-0">
        <div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playClick();
                  onOpenWindow(item.id);
                  onClose();
                }}
                className="w-full text-left px-2.5 sm:px-3 py-1.5 flex items-center justify-between text-xs hover:bg-[#000080] hover:text-white group transition-none cursor-pointer active:bg-[#000080] active:text-white"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black group-hover:text-white group-active:text-white" />
                  </div>
                  <span className="font-semibold truncate">{item.label}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 flex-shrink-0" />
              </button>
            );
          })}

          <div className="my-1 border-t border-[#808080] border-b border-[#ffffff]"></div>

          {/* External links */}
          <div className="px-2.5 py-0.5 text-[10px] text-gray-600 font-bold uppercase tracking-wider">
            Fast Web Links
          </div>

          <a
            href="https://www.linkedin.com/in/atuldemond/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              playClick();
              onClose();
            }}
            className="w-full text-left px-2.5 sm:px-3 py-1.5 flex items-center justify-between text-xs hover:bg-[#000080] hover:text-white group cursor-pointer text-black"
          >
            <div className="flex items-center gap-2 truncate">
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5] group-hover:text-white flex-shrink-0" />
              <span className="truncate">LinkedIn Profile</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 flex-shrink-0" />
          </a>

          <a
            href="https://github.com/albatino7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              playClick();
              onClose();
            }}
            className="w-full text-left px-2.5 sm:px-3 py-1.5 flex items-center justify-between text-xs hover:bg-[#000080] hover:text-white group cursor-pointer text-black"
          >
            <div className="flex items-center gap-2 truncate">
              <GithubIcon className="w-3.5 h-3.5 text-black group-hover:text-white flex-shrink-0" />
              <span className="truncate">GitHub Profile</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 flex-shrink-0" />
          </a>

          <a
            href="mailto:atuldemond@gmail.com"
            onClick={() => {
              playClick();
              onClose();
            }}
            className="w-full text-left px-2.5 sm:px-3 py-1.5 flex items-center justify-between text-xs hover:bg-[#000080] hover:text-white group cursor-pointer text-black"
          >
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-3.5 h-3.5 text-red-700 group-hover:text-white flex-shrink-0" />
              <span className="truncate">Email Atul</span>
            </div>
          </a>

          <a
            href="tel:8651029001"
            onClick={() => {
              playClick();
              onClose();
            }}
            className="w-full text-left px-2.5 sm:px-3 py-1.5 flex items-center justify-between text-xs hover:bg-[#000080] hover:text-white group cursor-pointer text-black"
          >
            <div className="flex items-center gap-2 truncate">
              <Phone className="w-3.5 h-3.5 text-green-700 group-hover:text-white flex-shrink-0" />
              <span className="truncate">Call: 8651029001</span>
            </div>
          </a>

          {/* 1996 GeoCities Web Mode Switcher */}
          {onToggleViewMode && (
            <button
              onClick={() => {
                playClick();
                onToggleViewMode();
                onClose();
              }}
              className="w-full text-left px-2.5 sm:px-3 py-1.5 flex items-center justify-between text-xs hover:bg-[#000080] hover:text-white group cursor-pointer text-blue-900"
            >
              <div className="flex items-center gap-2 truncate">
                <Globe className="w-3.5 h-3.5 text-blue-600 group-hover:text-white flex-shrink-0" />
                <span className="truncate font-semibold">1996 GeoCities Web Mode</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 flex-shrink-0" />
            </button>
          )}
        </div>

        <div>
          <div className="my-1 border-t border-[#808080] border-b border-[#ffffff]"></div>

          {/* Shut Down Button */}
          <button
            onClick={() => {
              playClick();
              onTriggerShutdown();
              onClose();
            }}
            className="w-full text-left px-2.5 sm:px-3 py-1.5 flex items-center gap-2 text-xs hover:bg-[#000080] hover:text-white group transition-none cursor-pointer"
          >
            <Power className="w-3.5 h-3.5 text-red-600 group-hover:text-white" />
            <span className="font-bold">Shut Down AtulOS...</span>
          </button>
        </div>
      </div>
    </div>
  );
}
