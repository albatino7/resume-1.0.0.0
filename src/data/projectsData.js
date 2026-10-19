/**
 * Projects data repository
 * Realistic data based on MERN Stack developer specialization
 */
export const projectsData = [
  {
    id: 'mern-ecommerce-platform',
    title: 'PulseCart — Full-Stack E-Commerce Engine',
    shortDescription: 'Modern e-commerce platform built with React, Redux Toolkit, Node.js, Express, and MongoDB with secure JWT auth, cart persistence, and order management.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack MERN',
    featured: true,
    badge: 'Flagship MERN',
    year: '2024',
    githubUrl: 'https://github.com/albatino7',
    liveUrl: 'https://github.com/albatino7',
    coverImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'JWT'],
    overview: 'PulseCart is a complete end-to-end e-commerce application designed to handle high-concurrency catalog browsing, real-time cart state synchronization with Redux Toolkit, and secure backend checkout workflows.',
    problem: 'Standard storefronts often struggle with client-server state desynchronization when customers update cart quantities across tabs, leading to race conditions and inaccurate checkout totals.',
    solution: 'Engineered an optimistic Redux Toolkit state layer synchronized with MongoDB sessions, coupled with server-side inventory verification and JWT token refresh middleware in Express.',
    features: [
      'Comprehensive product catalog with multi-facet filtering (category, price, rating, stock status).',
      'Persistent shopping cart with local-storage fallback and server-side cart hydration.',
      'JWT-based authentication with role-based access control (Admin dashboard vs Customer portal).',
      'Order fulfillment pipeline tracking order status from pending to delivered.',
      'Simulated payment gateway processing with tokenized cards and webhook verification.',
      'Admin analytics panel for inventory updates, stock replenishment alerts, and sales summaries.'
    ],
    architecture: {
      client: 'React 18, Redux Toolkit for cart/auth slices, Tailwind CSS, Lucide Icons, Axios interceptors',
      server: 'Node.js runtime, Express.js REST router, JWT authentication middleware, Multer image pipeline',
      database: 'MongoDB Atlas with Mongoose ODM, optimized compound indexes for product search',
      security: 'Bcrypt password hashing, CORS whitelist, helmet security headers, rate limiting'
    },
    challenges: [
      'Managing stock concurrency during flash checkout without locking the entire products collection.',
      'Handling smooth cart badge animations and badge count persistence across page refreshes.'
    ],
    metrics: [
      { label: 'Catalog Performance', value: '<120ms API response' },
      { label: 'Cart Sync Latency', value: 'Instant Optimistic UI' },
      { label: 'Database Queries', value: 'Compound Indexed' }
    ]
  },
  {
    id: 'mern-url-shortener',
    title: 'LinkPulse — High-Performance URL Shortener & Analytics',
    shortDescription: 'Scalable link management system featuring nanoid short code generation, click telemetry, geographic device breakdown, and custom vanity aliases.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack MERN',
    featured: true,
    badge: 'Full-Stack Utility',
    year: '2024',
    githubUrl: 'https://github.com/albatino7',
    liveUrl: 'https://github.com/albatino7',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Tailwind CSS', 'REST API', 'Analytics'],
    overview: 'LinkPulse turns complex, unwieldy URLs into lightning-fast 6-character links while collecting non-invasive click metrics (timestamps, referrers, browser user-agents, and redirect latency).',
    problem: 'Marketers and developers need reliable link shortening without spam redirects, with real-time insight into which campaign links are driving conversions.',
    solution: 'Built a dual-layer architecture: a hyper-fast 301/302 Express redirect route that streams telemetry events asynchronously to MongoDB, paired with a React analytics dashboard.',
    features: [
      'Collision-resistant Base62 short-code generation with custom slug reservation.',
      'Instant redirection with sub-50ms target resolution.',
      'Interactive visual dashboard showing click distributions by day, browser, OS, and country.',
      'QR Code generation on-the-fly for offline marketing campaigns and social media sharing.',
      'Expiration dates and pass-code protected confidential link sharing.',
      'IP-based rate-limiting to prevent brute force scraping and DOS attempts.'
    ],
    architecture: {
      client: 'React SPA, Vite build, Tailwind CSS, dynamic SVG chart visualizers',
      server: 'Express.js microservice architecture, custom user-agent parsing middleware',
      database: 'MongoDB time-series collection for click logs and unique visitor aggregates',
      caching: 'In-memory hot-link LRU cache layer for instantaneous redirects'
    },
    challenges: [
      'Ensuring the redirect route execution time remains under 50ms while recording click audit records in parallel.',
      'Preventing database bloat from automated web crawlers and bot hits by implementing smart bot filtering.'
    ],
    metrics: [
      { label: 'Redirect Latency', value: '<45ms average' },
      { label: 'Code Collision Probability', value: '1 in 100 Billion' },
      { label: 'Telemetry Precision', value: 'Real-time aggregated' }
    ]
  },
  {
    id: 'realtime-chat-app',
    title: 'EchoSphere — Real-Time Collaborative Messaging',
    shortDescription: 'Modern team communication platform utilizing WebSockets and WebRTC for instant message broadcasting, live presence, and direct audio/video calling.',
    category: 'realtime',
    categoryLabel: 'Real-Time & WebSockets',
    featured: true,
    badge: 'Real-Time WebRTC',
    year: '2023',
    githubUrl: 'https://github.com/albatino7',
    liveUrl: 'https://github.com/albatino7',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    tags: ['React', 'Node.js', 'WebSockets', 'WebRTC', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS'],
    overview: 'EchoSphere combines real-time text synchronization with peer-to-peer WebRTC media streaming, enabling frictionless team collaboration without third-party proprietary chat SDKs.',
    problem: 'Traditional polling-based chat solutions cause high server overhead, laggy message feeds, and unpredictable connection dropouts on unstable networks.',
    solution: 'Designed an event-driven WebSocket communication gateway with automatic heartbeat reconnection, typing indicators, read receipts, and peer-to-peer WebRTC handshake signalling.',
    features: [
      'Dual WebSocket rooms for 1-on-1 direct conversations and topic-based channels.',
      'Live typing indicators, online/offline presence tracking, and read receipts.',
      'P2P WebRTC audio and video calling with STUN/TURN server signalling.',
      'End-to-end message delivery with offline message queuing and MongoDB history retrieval.',
      'Rich media attachments with client-side image compression before upload.'
    ],
    architecture: {
      client: 'React, Redux Toolkit for live chat state, WebRTC MediaStream API',
      server: 'Node.js HTTP + WebSocket server, custom signalling dispatcher',
      database: 'MongoDB for permanent message archives and user profiles'
    },
    challenges: [
      'Handling graceful reconnection and state synchronization when mobile users switch network interfaces.',
      'Establishing clean WebRTC peer connections through symmetric NAT firewalls.'
    ],
    metrics: [
      { label: 'Message Delivery', value: '<25ms roundtrip' },
      { label: 'Concurrent Connections', value: 'WebSocket scalable' },
      { label: 'Media Transport', value: 'P2P Direct WebRTC' }
    ]
  },
  {
    id: 'ai-semantic-search',
    title: 'NeuroQuery — AI Semantic Search & Document Explorer',
    shortDescription: 'Generative AI and RAG exploration tool indexing documentation and markdown repositories with embeddings and natural language Q&A.',
    category: 'ai',
    categoryLabel: 'Generative AI & RAG',
    featured: true,
    badge: 'GenAI & RAG',
    year: '2024',
    githubUrl: 'https://github.com/albatino7',
    liveUrl: 'https://github.com/albatino7',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
    tags: ['React', 'Node.js', 'Express', 'Generative AI', 'RAG', 'Vector Search', 'Tailwind CSS'],
    overview: 'NeuroQuery is an advanced semantic search interface exploring Retrieval-Augmented Generation (RAG). It enables users to ask complex questions over developer documentation and code snippets.',
    problem: 'Keyword search fails when users ask concept-level questions like "How do I secure JWT tokens in Express cookies?" without knowing exact document headings.',
    solution: 'Implemented vector chunking, semantic similarity lookup, and context-injected LLM prompt synthesis for accurate, hallucination-resistant answers with clickable source citations.',
    features: [
      'Document chunking pipeline splitting markdown and text into semantically coherent vectors.',
      'Cosine similarity lookup returning ranked excerpts with confidence scores.',
      'Streaming token response preview for immediate perceived responsiveness.',
      'Direct markdown rendering with syntax highlighting and code copying.',
      'Interactive prompt playground with configurable temperature and system context.'
    ],
    architecture: {
      client: 'React 18, GSAP animation reveals, custom markdown renderer',
      server: 'Node.js API pipeline, embedding generation adapter, rate-limited queue',
      vectorStore: 'In-memory & MongoDB vector search simulation with cosine ranking'
    },
    challenges: [
      'Balancing chunk size to maintain semantic coherence without overflowing context tokens.',
      'Ensuring prompt injection safeguards when evaluating user queries.'
    ],
    metrics: [
      { label: 'Search Latency', value: '<180ms embedding lookup' },
      { label: 'Relevance Precision', value: 'Semantic Cosine' },
      { label: 'Context Fidelity', value: 'Zero-hallucination citations' }
    ]
  },
  {
    id: 'freelance-client-domains',
    title: 'Client Web Platforms & Infrastructure Migrations',
    shortDescription: 'Multi-year production client engagements (2018–2023) delivering high-traffic WordPress websites, zero-downtime server migrations, and performance optimizations.',
    category: 'backend',
    categoryLabel: 'Web Infrastructure & CMS',
    featured: false,
    badge: 'Production Systems',
    year: '2018-2023',
    githubUrl: 'https://github.com/albatino7',
    liveUrl: 'https://www.gamingconsole.com',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    tags: ['WordPress', 'Linux', 'Server Migration', 'Apache/Nginx', 'SEO', 'Database Tuning'],
    overview: 'Direct client-facing consulting and engineering delivering high-availability web platforms, database optimization, DNS cutovers, and migration between hosting providers.',
    problem: 'Clients experienced slow page speeds, server outages during traffic spikes, and fragile migration workflows across disparate hosting providers.',
    solution: 'Executed zero-downtime server migrations, set up caching layers, streamlined PHP/MySQL database tables, and configured CDN routing for international readers.',
    features: [
      'Zero-downtime server migration between Linux VPS providers and shared hosts.',
      'Core Web Vitals optimization improving mobile score from 42 to 94+.',
      'Automated nightly database and media backup pipelines with remote redundancy.',
      'Security hardening against brute-force attacks, XML-RPC exploitation, and spam.',
      'Custom theme styling and responsive layout adaptations.'
    ],
    architecture: {
      client: 'Custom responsive layouts, CSS3 animations, accessibility compliance',
      server: 'Linux environments (Ubuntu/Debian), Nginx reverse proxy, PHP-FPM, MySQL',
      clientDomains: ['gamingconsole.com', 'allindiaexamresult.com', 'healthynord.com', 'jaideoclasses.in']
    },
    challenges: [
      'Managing live database transfers during peak publication hours without data inconsistency.',
      'Resolving SSL certificate and mixed content warnings across multi-domain setups.'
    ],
    metrics: [
      { label: 'Client Domains', value: '4+ Production Sites' },
      { label: 'Migration Downtime', value: '0 minutes recorded' },
      { label: 'Timeframe', value: '2018 – 2023' }
    ]
  },
  {
    id: 'jwt-auth-microservice',
    title: 'AuthGate — Enterprise JWT & OAuth2 Security Gateway',
    shortDescription: 'Robust authentication starter engine with Google OAuth2, dual JWT access/refresh token rotation, Passport.js, and Redis session blacklisting.',
    category: 'backend',
    categoryLabel: 'Backend & Security',
    featured: false,
    badge: 'Backend Security',
    year: '2023',
    githubUrl: 'https://github.com/albatino7',
    liveUrl: 'https://github.com/albatino7',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    tags: ['Node.js', 'Express.js', 'JWT', 'Google OAuth', 'Passport.js', 'MongoDB', 'Security'],
    overview: 'A reusable, battle-tested authentication and authorization boilerplate designed for MERN applications requiring military-grade token lifecycle management.',
    problem: 'Storing raw JWTs in localStorage exposes users to XSS token theft, while traditional server sessions struggle to scale horizontally across microservices.',
    solution: 'Engineered an httpOnly sameSite secure cookie architecture with short-lived access tokens, encrypted refresh tokens stored in MongoDB, and Google OAuth2 integration.',
    features: [
      'Dual-token rotation (15m access token in memory + 7d rotating refresh token in httpOnly cookie).',
      'Seamless Google OAuth2 social login via Passport.js strategy.',
      'Password reset workflow with cryptographically secure single-use time-limited tokens.',
      'Role-based access control (RBAC) middleware for fine-grained endpoint protection.',
      'Audit logging of suspicious login attempts and anomalous IP geolocation changes.'
    ],
    architecture: {
      server: 'Node.js, Express.js middleware chain, Passport.js authentication strategies',
      database: 'MongoDB with TTL index for automatic token expiration cleanup',
      crypto: 'Bcrypt with 12 salt rounds, SHA-256 token hashing'
    },
    challenges: [
      'Ensuring atomic refresh token rotation to prevent race conditions during rapid concurrent client queries.',
      'Cross-origin cookie handling across different frontend/backend development domains.'
    ],
    metrics: [
      { label: 'Token Expiry', value: '15 min rotation' },
      { label: 'OAuth Handshake', value: '<300ms roundtrip' },
      { label: 'Security Grade', value: 'A+ OWASP aligned' }
    ]
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack MERN' },
  { id: 'realtime', label: 'Real-Time & WebSockets' },
  { id: 'backend', label: 'Backend & Security' },
  { id: 'ai', label: 'GenAI & RAG' },
];
