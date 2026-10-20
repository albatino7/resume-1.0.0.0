import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import {
  User,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Terminal,
  FileText,
  Gamepad2,
  Music
} from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Shared UI & Loaders
import Window from '../shared/components/ui/Window';
import { PageLoader, RouteLoader, AppLoader } from '../shared/components/loaders';

// Desktop Shell Feature
import {
  DesktopIcons,
  RetroBanner,
  Taskbar,
  StartMenu,
  ShutdownModal
} from '../features/desktop';

import {
  playOpen,
  playStartup,
  setSoundEnabled
} from '../shared/utils/soundEffects';

// Route & Feature-Level Lazy Loading
const AboutWindow = lazy(() => import('../features/bio/components/AboutWindow'));
const ProjectsWindow = lazy(() => import('../features/projects/components/ProjectsWindow'));
const SkillsWindow = lazy(() => import('../features/skills/components/SkillsWindow'));
const EducationWindow = lazy(() => import('../features/education/components/EducationWindow'));
const ContactWindow = lazy(() => import('../features/contact/components/ContactWindow'));
const TerminalWindow = lazy(() => import('../features/terminal/components/TerminalWindow'));
const ResumeWindow = lazy(() => import('../features/resume/components/ResumeWindow'));
const MinesweeperWindow = lazy(() => import('../features/games/minesweeper/components/MinesweeperWindow'));
const RetroJukeboxWindow = lazy(() => import('../features/media/jukebox/components/RetroJukeboxWindow'));
const GeocitiesMode = lazy(() => import('../features/geocities/components/GeocitiesMode'));

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'geocities'
  const [theme, setTheme] = useState('vaporwave'); // 'win95', 'vaporwave', 'matrix', 'hotdog'
  const [crtOn, setCrtOn] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isShutdownOpen, setIsShutdownOpen] = useState(false);
  const [highestZ, setHighestZ] = useState(10);
  const [activeWindowId, setActiveWindowId] = useState('about');

  // Sync sound setting
  useEffect(() => {
    setSoundEnabled(soundOn);
  }, [soundOn]);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Play startup sound on first interaction
  useEffect(() => {
    const handleFirstClick = () => {
      playStartup();
      window.removeEventListener('click', handleFirstClick);
    };
    window.addEventListener('click', handleFirstClick);
    return () => window.removeEventListener('click', handleFirstClick);
  }, []);

  const [windows, setWindows] = useState([
    {
      id: 'about',
      title: 'About Atul Demond - MERN Developer',
      icon: User,
      isOpen: true,
      isMinimized: false,
      zIndex: 10,
      width: 'max-w-3xl',
      statusText: '1 object(s) selected | Size: 2+ Years Exp'
    },
    {
      id: 'projects',
      title: 'Projects Explorer - C:\\Projects\\',
      icon: FolderGit2,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      width: 'max-w-4xl',
      statusText: '4 Project(s) in catalog | Fullstack MERN Ready'
    },
    {
      id: 'skills',
      title: 'Skills & Capabilities - Skills.exe',
      icon: Cpu,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      width: 'max-w-2xl',
      statusText: 'All systems operational | 100% MERN Coverage'
    },
    {
      id: 'education',
      title: 'Academic Transcripts - Education.doc',
      icon: GraduationCap,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      width: 'max-w-2xl',
      statusText: 'Verified Records: MCA, BCA, Intermediate, 10th'
    },
    {
      id: 'contact',
      title: 'Electronic Dispatcher - Contact.msg',
      icon: Mail,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      width: 'max-w-2xl',
      statusText: 'Modem COM1: 56.6k Ready | atuldemond@gmail.com'
    },
    {
      id: 'terminal',
      title: 'MS-DOS Prompt [C:\\ATUL>]',
      icon: Terminal,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      width: 'max-w-2xl',
      statusText: 'MS-DOS 6.22 Emulation | Type help'
    },
    {
      id: 'resume',
      title: 'Curriculum Vitae - Atul_Demond_Resume.pdf',
      icon: FileText,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      width: 'max-w-3xl',
      statusText: 'Page 1 of 1 | Ready to Print'
    },
    {
      id: 'minesweeper',
      title: 'Minesweeper 98',
      icon: Gamepad2,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      width: 'max-w-md',
      statusText: '10 Mines hidden in sector | Good luck'
    },
    {
      id: 'jukebox',
      title: 'Win-Amp 1998 Audio Player',
      icon: Music,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      width: 'max-w-md',
      statusText: 'Web Audio Synthesizer | Chiptunes Active'
    }
  ]);

  const bringToFront = useCallback((id) => {
    setHighestZ((prevZ) => {
      const nextZ = prevZ + 1;
      setWindows((prev) =>
        prev.map((win) => (win.id === id ? { ...win, zIndex: nextZ, isMinimized: false } : win))
      );
      return nextZ;
    });
    setActiveWindowId(id);
  }, []);

  const openWindow = useCallback((id) => {
    playOpen();
    setHighestZ((prevZ) => {
      const nextZ = prevZ + 1;
      setWindows((prev) =>
        prev.map((win) =>
          win.id === id
            ? { ...win, isOpen: true, isMinimized: false, zIndex: nextZ }
            : win
        )
      );
      return nextZ;
    });
    setActiveWindowId(id);
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isOpen: false } : win))
    );
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win))
    );
  }, []);

  const toggleWindow = useCallback((id) => {
    setWindows((prev) => {
      const target = prev.find((w) => w.id === id);
      if (!target) return prev;

      if (!target.isOpen) {
        playOpen();
        setHighestZ((prevZ) => {
          const nextZ = prevZ + 1;
          setActiveWindowId(id);
          return nextZ;
        });
        return prev.map((win) =>
          win.id === id ? { ...win, isOpen: true, isMinimized: false, zIndex: highestZ + 1 } : win
        );
      } else if (target.isMinimized) {
        setHighestZ((prevZ) => prevZ + 1);
        setActiveWindowId(id);
        return prev.map((win) =>
          win.id === id ? { ...win, isMinimized: false, zIndex: highestZ + 1 } : win
        );
      } else if (activeWindowId === id) {
        return prev.map((win) =>
          win.id === id ? { ...win, isMinimized: true } : win
        );
      } else {
        setHighestZ((prevZ) => prevZ + 1);
        setActiveWindowId(id);
        return prev.map((win) =>
          win.id === id ? { ...win, zIndex: highestZ + 1 } : win
        );
      }
    });
  }, [activeWindowId, highestZ]);

  return (
    <div className={`relative min-h-[100dvh] w-full overflow-hidden ${crtOn ? 'crt-effect' : ''}`}>
      {/* 90s Authentic Website Boot Loader */}
      {isBooting && <AppLoader onLoaded={() => setIsBooting(false)} />}

      {/* 90s Single Page View vs Desktop OS Mode */}
      {viewMode === 'geocities' ? (
        <Suspense fallback={<RouteLoader message="Loading 1996 GeoCities Cyber Webpage..." />}>
          <GeocitiesMode onSwitchToDesktop={() => setViewMode('desktop')} />
        </Suspense>
      ) : (
        <div className="relative min-h-[100dvh] w-full flex flex-col justify-between pb-10 select-none">
          {/* Top 90s Web Banner & Ticker */}
          <RetroBanner onOpenWindow={openWindow} />

          {/* Desktop Space with Icons & Movable Windows */}
          <main className="flex-1 relative overflow-hidden">
            {/* Desktop Icons Grid */}
            <DesktopIcons
              onOpenWindow={openWindow}
              activeWindowId={activeWindowId}
            />

            {/* Desktop Watermark in bottom right */}
            <div className="absolute bottom-6 right-6 pointer-events-none opacity-20 hidden md:block text-right">
              <div className="font-pixel text-4xl text-white">ATUL 98</div>
              <div className="font-mono-90s text-sm text-white">MERN Architecture Edition</div>
            </div>

            {/* Windows System with Lazy Loaded Features */}
            {windows.map((win) => (
              <Window
                key={win.id}
                id={win.id}
                title={win.title}
                icon={win.icon}
                isOpen={win.isOpen}
                isMinimized={win.isMinimized}
                zIndex={win.zIndex}
                onClose={() => closeWindow(win.id)}
                onMinimize={() => minimizeWindow(win.id)}
                onFocus={() => bringToFront(win.id)}
                defaultWidth={win.width}
                statusText={win.statusText}
              >
                <Suspense fallback={<PageLoader title={`Loading ${win.title.split('-')[0]}...`} />}>
                  {win.id === 'about' && <AboutWindow onOpenWindow={openWindow} />}
                  {win.id === 'projects' && <ProjectsWindow onOpenWindow={openWindow} />}
                  {win.id === 'skills' && <SkillsWindow />}
                  {win.id === 'education' && <EducationWindow />}
                  {win.id === 'contact' && <ContactWindow />}
                  {win.id === 'terminal' && <TerminalWindow onOpenWindow={openWindow} />}
                  {win.id === 'resume' && <ResumeWindow />}
                  {win.id === 'minesweeper' && <MinesweeperWindow />}
                  {win.id === 'jukebox' && <RetroJukeboxWindow />}
                </Suspense>
              </Window>
            ))}
          </main>

          {/* Start Menu Dropup */}
          <StartMenu
            isOpen={isStartOpen}
            onClose={() => setIsStartOpen(false)}
            onOpenWindow={openWindow}
            onTriggerShutdown={() => setIsShutdownOpen(true)}
            onToggleViewMode={() => setViewMode(viewMode === 'desktop' ? 'geocities' : 'desktop')}
          />

          {/* Bottom Taskbar */}
          <Taskbar
            windows={windows}
            activeWindowId={activeWindowId}
            onToggleWindow={toggleWindow}
            isStartOpen={isStartOpen}
            setIsStartOpen={setIsStartOpen}
            soundOn={soundOn}
            setSoundOn={setSoundOn}
            crtOn={crtOn}
            setCrtOn={setCrtOn}
            theme={theme}
            setTheme={setTheme}
          />

          {/* Shut Down Modal */}
          <ShutdownModal
            isOpen={isShutdownOpen}
            onClose={() => setIsShutdownOpen(false)}
          />
        </div>
      )}

      {/* Toast Notifications Container */}
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}
