/**
 * Detailed Resume & Background Data for Atul Demond
 * Derived accurately from verified CV and prompt inputs.
 */
export const resumeData = {
  personal: {
    name: 'Atul Demond',
    role: 'Senior MERN Stack Developer & UI Engineer',
    headline: 'Full-Stack MERN Engineer specializing in performant React architectures, Node.js REST APIs, and GSAP micro-interactions.',
    email: 'atuldemond@gmail.com',
    phone: '+91 8651029001',
    phoneDisplay: '8651029001',
    address: 'Delhi Dabri Mor, Street No. 6, Delhi, India',
    github: 'https://github.com/albatino7',
    linkedin: 'https://www.linkedin.com/in/atuldemond/',
    livePortfolio: 'https://github.com/albatino7',
    availability: 'Open to full-time & high-impact contract roles',
    pdfDownloadUrl: '/resume-atul-demond.pdf',
    summary: 'MERN Stack Developer with over 2 years of hands-on experience designing, developing, and implementing web applications using modern technologies. Proficient in frontend engineering with HTML5, CSS3, JavaScript (ES6+), React, Redux Toolkit, and GSAP animation sequences. Experienced in backend development with Node.js and Express.js, and adept in database management with MongoDB. Strong expertise in client state management, REST APIs, and authentication mechanisms including Google OAuth and JWT. Committed to continuous learning in Generative AI and building high-performance digital products.'
  },

  skills: {
    frontend: [
      { name: 'React 18/19', level: 'Expert', icon: 'Code' },
      { name: 'JavaScript (ES6+)', level: 'Expert', icon: 'FileCode' },
      { name: 'Redux Toolkit & Thunk', level: 'Expert', icon: 'Cpu' },
      { name: 'GSAP & ScrollTrigger', level: 'Advanced', icon: 'Sparkles' },
      { name: 'Tailwind CSS', level: 'Expert', icon: 'Palette' },
      { name: 'HTML5 & CSS3', level: 'Expert', icon: 'Layout' },
      { name: 'Locomotive Scroll / Lenis', level: 'Advanced', icon: 'Move' },
      { name: 'Bootstrap', level: 'Proficient', icon: 'Layers' },
    ],
    backend: [
      { name: 'Node.js', level: 'Advanced', icon: 'Server' },
      { name: 'Express.js', level: 'Advanced', icon: 'Terminal' },
      { name: 'RESTful APIs', level: 'Expert', icon: 'Network' },
      { name: 'WebSockets & WebRTC', level: 'Proficient', icon: 'Radio' },
      { name: 'Google OAuth & JWT', level: 'Advanced', icon: 'ShieldCheck' },
      { name: 'Passport.js', level: 'Proficient', icon: 'Lock' },
    ],
    database: [
      { name: 'MongoDB', level: 'Advanced', icon: 'Database' },
      { name: 'Mongoose ODM', level: 'Advanced', icon: 'Layers' },
      { name: 'Database Indexing', level: 'Proficient', icon: 'Search' },
    ],
    tools: [
      { name: 'Git & GitHub', level: 'Advanced', icon: 'GitBranch' },
      { name: 'Postman (API Testing)', level: 'Advanced', icon: 'Send' },
      { name: 'Jest (Unit/Integration)', level: 'Proficient', icon: 'CheckCircle' },
      { name: 'Vite & Webpack', level: 'Advanced', icon: 'Zap' },
      { name: 'VS Code & CLI', level: 'Expert', icon: 'Monitor' },
      { name: 'Linux / Windows OS', level: 'Proficient', icon: 'TerminalSquare' },
    ],
    nextGen: [
      { name: 'Generative AI & LLMs', level: 'Exploring', icon: 'Bot' },
      { name: 'RAG Architectures', level: 'Exploring', icon: 'Brain' },
      { name: 'AI Agents', level: 'Exploring', icon: 'Workflow' },
    ]
  },

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'AISECT University, Jharkhand',
      status: 'Completed',
      period: 'Post Graduation',
      highlights: 'Advanced Data Structures, Software Engineering, Web Technologies, Database Systems.'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Veer Kunwar Singh University (VKSU)',
      status: '1st Division',
      period: 'Graduation',
      highlights: 'Object-Oriented Programming, Relational Databases, Computer Networks, Operating Systems.'
    },
    {
      degree: 'Intermediate (PCM)',
      institution: 'Bihar School Examination Board (BSEB)',
      status: '1st Division',
      period: 'Higher Secondary',
      highlights: 'Physics, Chemistry, and Advanced Mathematics.'
    },
    {
      degree: 'Secondary School Certificate (10th)',
      institution: 'Central Board of Secondary Education (CBSE)',
      status: '1st Division',
      period: 'Secondary',
      highlights: 'Academic distinction with focus on Science and Mathematics.'
    }
  ],

  experience: [
    {
      role: 'Full-Stack MERN Developer',
      company: 'Independent & Project Engineering',
      period: '2022 — Present (2+ Years)',
      location: 'Delhi, India',
      description: 'Architecting and developing full-stack web applications with React, Node.js, Express, and MongoDB.',
      bullets: [
        'Developed and maintained responsive web applications using the MERN stack with 99%+ uptime and sub-second load times.',
        'Implemented complex animations and scroll effects using GSAP, ScrollTrigger, and Lenis to deliver engaging UI experiences.',
        'Utilized React and Redux Toolkit for clean, predictable client state management and seamless async data fetching.',
        'Designed and built secure RESTful APIs with Express, incorporating JWT authentication, role guards, and rate limiting.',
        'Developed real-time communication features utilizing WebSockets and WebRTC for interactive text and media exchange.',
        'Authored unit and integration test workflows with Jest and verified endpoint schemas with Postman.'
      ]
    },
    {
      role: 'Web Systems Engineer & Freelance Developer',
      company: 'Client Production Domains',
      period: '2018 — 2023',
      location: 'Remote / India',
      description: 'Managed production web platforms, zero-downtime server migrations, and high-traffic hosting infrastructure.',
      bullets: [
        'Created, customized, and maintained production WordPress websites with tailored PHP hooks and responsive styling.',
        'Orchestrated multi-server migrations between hosting providers with zero recorded downtime or data loss.',
        'Provided continuous infrastructure and technical support for commercial client domains:',
        'Active domains managed: gamingconsole.com, allindiaexamresult.com, healthynord.com, jaideoclasses.in.',
        'Hardened website security against malicious attacks, bot injection, and brute-force vulnerabilities.'
      ]
    }
  ],

  freelanceDomains: [
    { name: 'gamingconsole.com', category: 'Gaming & Tech Media', status: 'Managed & Scaled' },
    { name: 'allindiaexamresult.com', category: 'Education & Examination Portal', status: 'High Traffic & Migrations' },
    { name: 'healthynord.com', category: 'Health & Wellness Editorial', status: 'SEO & Performance' },
    { name: 'jaideoclasses.in', category: 'EdTech & Online Coaching', status: 'LMS Platform Setup' }
  ],

  hobbies: [
    { name: 'Meditation', description: 'Cultivating mindfulness, sharp focus, and mental clarity for complex engineering problems.' },
    { name: 'Tech Deep Dives', description: 'Exploring modern frontend engineering patterns, animation theory, and AI agent frameworks.' },
    { name: 'Open Source', description: 'Auditing open-source MERN libraries and modern React architectures.' }
  ]
};
