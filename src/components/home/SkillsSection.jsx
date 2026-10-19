import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  Code2,
  Database,
  Server,
  Wrench,
  Sparkles,
  Cpu,
} from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: Code2,
    accent: 'lime',
    description: 'Declarative component architecture, fluid micro-interactions, responsive design.',
    skills: [
      { name: 'React 18 / 19', note: 'Hooks, Suspense, Concurrent rendering' },
      { name: 'JavaScript (ES6+)', note: 'Async/Await, Closures, DOM manipulation' },
      { name: 'GSAP & ScrollTrigger', note: 'Timeline sequencing, pin & scrub animations' },
      { name: 'Tailwind CSS', note: 'Custom design tokens, responsive breakpoints' },
      { name: 'React Router', note: 'Declarative routing, nested outlets, loaders' },
      { name: 'HTML5 & Modern CSS', note: 'Semantic markup, CSS Grid, Flexbox' },
      { name: 'Lenis Smooth Scroll', note: 'Physics-based inertia scroll integration' },
      { name: 'Bootstrap', note: 'Rapid UI grids, utilities' },
    ],
  },
  {
    id: 'state-data',
    title: 'State & Data Management',
    icon: Cpu,
    accent: 'cyan',
    description: 'Single-source-of-truth state workflows and server-state caching.',
    skills: [
      { name: 'Redux Toolkit (RTK)', note: 'createSlice, immer immutability, selectors' },
      { name: 'createAsyncThunk', note: 'Pending/fulfilled/rejected lifecycle management' },
      { name: 'TanStack Query', note: 'useInfiniteQuery, cache invalidation, optimistic updates' },
      { name: 'Axios Interceptors', note: 'Auth token injection, global error boundaries' },
      { name: 'Context API', note: 'Lightweight client UI and theme state' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    accent: 'emerald',
    description: 'High-throughput Node.js microservices, authentication gateways, and WebSockets.',
    skills: [
      { name: 'Node.js', note: 'Event loop mastery, file streams, async pipelines' },
      { name: 'Express.js', note: 'RESTful routing, error middleware, cors, helmet' },
      { name: 'RESTful API Design', note: 'Resource modeling, status codes, query pagination' },
      { name: 'WebSockets & WebRTC', note: 'Bi-directional messaging, P2P media streaming' },
      { name: 'JWT & Refresh Tokens', note: 'httpOnly cookie rotation, signature verification' },
      { name: 'Google OAuth & Passport.js', note: 'Federated social identity strategies' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Storage',
    icon: Database,
    accent: 'amber',
    description: 'Document databases, schema validation, and optimized query execution.',
    skills: [
      { name: 'MongoDB', note: 'Replica sets, aggregation pipelines, transactions' },
      { name: 'Mongoose ODM', note: 'Schema hooks, validation, virtual populate' },
      { name: 'Compound Indexing', note: 'Query latency optimization, text search indexes' },
      { name: 'Time-Series Collections', note: 'Telemetry logging & click event storage' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: Wrench,
    accent: 'purple',
    description: 'Version control, build tools, API verification, and server administration.',
    skills: [
      { name: 'Git & GitHub', note: 'Branching strategies, PR reviews, merge workflows' },
      { name: 'Postman', note: 'API contract testing, environment variables' },
      { name: 'Jest', note: 'Unit & integration testing, mocking modules' },
      { name: 'Vite & npm', note: 'Fast HMR bundling, tree-shaking optimization' },
      { name: 'Linux / Windows OS', note: 'Bash scripting, systemd, SSH server administration' },
      { name: 'VS Code & CLI', note: 'Debugger configuration, linting, extensions' },
    ],
  },
  {
    id: 'emerging',
    title: 'Generative AI & Next-Gen',
    icon: Sparkles,
    accent: 'rose',
    description: 'Active learning and hands-on experimentation with modern AI stacks.',
    skills: [
      { name: 'Generative AI & LLMs', note: 'Prompt engineering, structured JSON outputs' },
      { name: 'RAG Architectures', note: 'Chunking strategies, context window grounding' },
      { name: 'Vector Search Concepts', note: 'Cosine similarity, semantic query matching' },
      { name: 'AI Autonomous Agents', note: 'Tool-calling pipelines, memory abstractions' },
    ],
  },
];

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 25,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const displayedCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-28 border-t border-neutral-800/60 dark:border-dark-border/60 bg-grid-pattern relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-lime-accent"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
                02 // Technical Capabilities
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-100 tracking-tight">
              Curated full-stack toolbox.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Every tool in my stack has been tested through real-world deployment challenges,
              from high-concurrency Node.js endpoints to fluid 60fps frontend animations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                activeCategory === 'all'
                  ? 'bg-lime-accent text-black font-semibold border-lime-accent'
                  : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              All Stacks
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                  activeCategory === c.id
                    ? 'bg-lime-accent text-black font-semibold border-lime-accent'
                    : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {c.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="skill-card p-6 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border hover:border-lime-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lime-glow/20"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-neutral-800/80 group-hover:bg-lime-accent/15 group-hover:text-lime-400 text-neutral-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-neutral-100">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 py-3 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills List */}
                  <div className="space-y-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800/60 hover:border-neutral-700 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-neutral-200 font-mono">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent/70" />
                        </div>
                        <span className="text-[11px] text-neutral-400 block mt-0.5">
                          {skill.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
