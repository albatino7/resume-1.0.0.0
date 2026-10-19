# Atul Demond — Premium Animated MERN Stack Developer Portfolio

A production-quality personal portfolio and resume platform engineered for **Atul Demond**, Senior MERN Stack Developer & UI Engineer.

Built with **React 19**, **Vite**, **Tailwind CSS**, **Redux Toolkit**, **TanStack Query**, **GSAP & ScrollTrigger**, **Motion for React (Framer Motion)**, **Lenis**, and **Sonner**.

---

## ⚡ Tech Stack & Architecture

| Layer | Technology | Responsibility |
|---|---|---|
| **Framework & Build** | React 19 + Vite | Fast HMR, optimized tree-shaking, ES modules |
| **Routing** | React Router (Declarative `createBrowserRouter`) | Dynamic project case studies (`/projects/:projectId`), resume page (`/resume`), catalog (`/projects`) |
| **Styling & Tokens** | Tailwind CSS + Custom CSS Variables | Editorial dark-first identity with `#c9f250` neon lime brand accent |
| **Client State** | Redux Toolkit | Theme mode, mobile drawer state, active scroll spy, contact async thunk |
| **Async Thunk** | `createAsyncThunk` | Contact form submission workflow with client validation & pending/fulfilled/rejected lifecycles |
| **Server State & Cache** | TanStack Query (`@tanstack/react-query`) | Service layer caching, `useInfiniteQuery` pagination with intersection observer |
| **Motion & Scroll** | GSAP 3 + ScrollTrigger + Lenis | Staggered entrance sequences, physics-based smooth scrolling, responsive ticker sync |
| **Micro-Interactions** | Motion for React (Framer Motion) | Sun/Moon theme toggle morphing, spring mobile navigation drawer, interactive button states |
| **Feedback** | Sonner | Themed toast notifications for copy actions, form status, and PDF downloads |
| **PDF Engine** | `pdf-lib` | Script to generate real downloadable ATS-friendly PDF resume asset |

---

## 🚀 Key Features

1. **Editorial Hero Section**:
   - High-impact typography with neon lime highlights.
   - Interactive terminal window showcasing Node.js Express server initialization, Redux cart slice, and bash runtime status.
   - Verified credentials, live social links, and real availability badge.

2. **Verified Background & Timeline**:
   - Education: MCA (AISECT University Jharkhand), BCA (VKSU 1st Div), Intermediate (BSEB 1st Div PCM), 10th (CBSE 1st Div).
   - Commercial Platforms: Multi-year domain infrastructure work (2018–2023) across `gamingconsole.com`, `allindiaexamresult.com`, `healthynord.com`, and `jaideoclasses.in`.
   - Core philosophy: State integrity, fluid animations, secure APIs, and Generative AI exploration.

3. **Curated Project Showcase**:
   - **PulseCart**: Full-Stack MERN E-Commerce platform with Redux Toolkit cart sync and JWT authentication.
   - **LinkPulse**: High-performance URL shortener & click analytics with telemetry heatmaps.
   - **EchoSphere**: Real-time collaborative workspace utilizing WebSockets and WebRTC P2P media.
   - **NeuroQuery**: AI Semantic Search exploring RAG and vector embeddings.
   - Dynamic Case Studies (`/projects/:projectId`) with problem/solution, architecture blueprints, metrics, and source links.

4. **Infinite Scroll Project Catalog**:
   - Powered by TanStack Query `useInfiniteQuery`.
   - IntersectionObserver triggers auto-fetch of next pages.
   - Filter by category and instant keyword search.
   - Skeleton loading cards and clean end-of-catalog status.

5. **Redux-Managed Contact Workflow**:
   - Handled via `createAsyncThunk` (`submitContactForm`).
   - Strict client-side validation and simulated network latency with zero false delivery claims.
   - One-click copy email (`atuldemond@gmail.com`) and phone (`8651029001`) with toast confirmations.

6. **Dedicated Resume & Real PDF Asset**:
   - Dedicated interactive route (`/resume`) with ATS-ready print layout (`window.print()`).
   - Download button linked to real generated PDF asset: `/resume-atul-demond.pdf`.

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Oxlint linter
npm run lint

# Compile production build
npm run build

# Preview production build locally
npm run preview

# Re-generate PDF resume asset
node scripts/generate-pdf.js
```

---

## 👤 Developer Contact

- **Name**: Atul Demond
- **Email**: [atuldemond@gmail.com](mailto:atuldemond@gmail.com)
- **Phone**: [+91 8651029001](tel:8651029001)
- **LinkedIn**: [linkedin.com/in/atuldemond](https://www.linkedin.com/in/atuldemond/)
- **GitHub**: [github.com/albatino7](https://github.com/albatino7)
- **Location**: Delhi, India
