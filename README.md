# Atul Demond - 90s Cyber Portfolio SPA 🕹️💾

A feature-rich, high-performance **React Single Page Application (SPA)** developer portfolio crafted with an authentic **1990s Windows 95 / Web 1.0 aesthetic**, showcasing the expertise, projects, and credentials of **Atul Demond (MERN Stack Developer)**.

---

## 🏛️ Feature-Based Architecture

```text
src/
├── app/
│   └── App.jsx               # Application root, window state orchestrator & lazy loading
│
├── features/
│   ├── bio/                  # Professional summary, contact coordinates, hobbies
│   │   ├── components/AboutWindow.jsx
│   │   └── index.js
│   ├── projects/             # Fullstack projects (Ecommerce, URL Shortener, Video Chat, Domains)
│   │   ├── components/ProjectsWindow.jsx
│   │   └── index.js
│   ├── skills/               # Technical skills with 90s block gauges
│   │   ├── components/SkillsWindow.jsx
│   │   └── index.js
│   ├── education/            # Academic transcripts & degrees (MCA, BCA, Intermediate, 10th)
│   │   ├── components/EducationWindow.jsx
│   │   └── index.js
│   ├── contact/              # 56k dial-up message gateway & direct contact cards
│   │   ├── components/ContactWindow.jsx
│   │   └── index.js
│   ├── terminal/             # Interactive MS-DOS 6.22 command prompt with CLI commands
│   │   ├── components/TerminalWindow.jsx
│   │   └── index.js
│   ├── resume/               # Formatted printable CV sheet & text exporter
│   │   ├── components/ResumeWindow.jsx
│   │   └── index.js
│   ├── games/                # Playable retro 90s Windows Minesweeper mini-game
│   │   └── minesweeper/
│   │       ├── components/MinesweeperWindow.jsx
│   │       └── index.js
│   ├── media/                # 90s Win-Amp audio player with spectrum visualizer & synth
│   │   └── jukebox/
│   │       ├── components/RetroJukeboxWindow.jsx
│   │       └── index.js
│   ├── geocities/            # 1996 GeoCities continuous scroll Web 1.0 mode
│   │   ├── components/GeocitiesMode.jsx
│   │   └── index.js
│   └── desktop/              # Shell chrome: DesktopIcons, RetroBanner, Taskbar, StartMenu
│       ├── components/DesktopIcons.jsx
│       ├── components/RetroBanner.jsx
│       ├── components/Taskbar.jsx
│       ├── components/StartMenu.jsx
│       ├── components/ShutdownModal.jsx
│       └── index.js
│
├── shared/
│   ├── components/
│   │   ├── ui/               # Reusable Window frame & SocialIcons
│   │   │   ├── Window.jsx
│   │   │   └── SocialIcons.jsx
│   │   └── loaders/          # 90s Reusable Loaders (PageLoader, RouteLoader, AppLoader, etc.)
│   │       ├── AppLoader.jsx
│   │       ├── RouteLoader.jsx
│   │       ├── PageLoader.jsx
│   │       ├── SkeletonLoader.jsx
│   │       ├── ButtonLoader.jsx
│   │       └── index.js
│   ├── constants/            # Portfolio dataset & records
│   │   └── portfolioData.js
│   └── utils/
│       ├── confetti.js       # Dynamic on-demand import of celebration confetti
│       └── soundEffects.js   # Web Audio API retro sound synthesis
│
├── styles/
│   └── index.css             # Tailwind v4, 90s bevels, custom scanlines & animations
└── main.jsx                  # Application entry point
```

---

## ⚡ Performance & Optimization Highlights

1. **Route & Feature-Level Lazy Loading (`React.lazy` + `Suspense`)**:
   - Initial entry chunk reduced from **386 kB** to **45 kB**!
   - Every window (Bio, Projects, Skills, Education, Contact, Terminal, Resume, Minesweeper, Jukebox, GeoCities) is loaded strictly on-demand as a separate bundle.
   - `canvas-confetti` is dynamically imported only when celebrations are triggered.
2. **Window Sizing & Heading Menu Fix**:
   - Windows (whether in normal or maximized full-screen mode) stay neatly positioned directly below the top heading menu (`top-[54px] sm:top-[64px]`) down to the taskbar (`bottom-10`), ensuring the top header/ticker is never blocked or obscured.
   - Added smooth bottom-to-up entrance slide animation (`animate-window-open`).
3. **Reusable 90s Loading System**:
   - `PageLoader`: Windows 95 file dialog with animated progress gauge blocks.
   - `RouteLoader`: 90s Netscape globe loading screen.
   - `SkeletonLoader`: Sunken gray placeholders.
   - `ButtonLoader`: Non-blocking button progress indicator.
4. **Code Quality**:
   - 0 linter errors or warnings on `oxlint`.
   - Production bundle compiles in < 700ms.
