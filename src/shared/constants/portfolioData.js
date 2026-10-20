export const portfolioData = {
  personal: {
    name: "Atul Demond",
    title: "MERN Stack Developer",
    subtitle: "Full-Stack Web Architect & Real-Time Specialist",
    tagline: "Building high-performance web applications with the speed of 90s nostalgia and the power of modern MERN stack.",
    location: "Delhi Dabri Mor, Street No. 6, India",
    phone: "8651029001",
    email: "atuldemond@gmail.com",
    linkedin: "https://www.linkedin.com/in/atuldemond/",
    github: "https://github.com/albatino7",
    experienceYears: "2+ Years",
    status: "Available for Full-time Roles & Contracts",
    hobbies: ["Meditation", "Retro Computing", "Open Source", "Exploring New Tech"],
    summary: `MERN Stack Developer with over 2 years of hands-on experience in designing, developing, and implementing web applications using a variety of modern technologies. Proficient in frontend development with HTML, CSS, JavaScript, and libraries such as React and GSAP. Experienced in backend development with Node.js and Express.js, and adept in database management with MongoDB. Strong expertise in state management using Redux Toolkit and authentication mechanisms including Google OAuth and JWT. Committed to continuous learning and exploring new technologies to deliver innovative and efficient solutions.`
  },

  learningHighlights: [
    "Developed and maintained responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
    "Implemented complex animations and scroll effects using GSAP, ScrollTrigger, and Locomotive Scroll to enhance user experience.",
    "Utilized React and Redux Toolkit for efficient state management and seamless user interactions.",
    "Designed and built RESTful APIs for various functionalities and integrated them with frontend applications.",
    "Implemented secure authentication and authorization mechanisms using Google OAuth, JWT, and Passport.js.",
    "Developed real-time communication features using WebRTC and WebSockets for enhanced interactivity.",
    "Wrote unit and integration tests using Jest to ensure code quality and reliability.",
    "Collaborated with cross-functional teams to gather requirements, design solutions, and deliver high-quality products."
  ],

  education: [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "AISECT University, Jharkhand",
      level: "Post Graduation",
      year: "Completed",
      score: "Graduated with Distinction",
      icon: "GraduationCap"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Veer Kunwar Singh University (VKSU)",
      level: "Graduation",
      year: "Completed",
      score: "1st Division",
      icon: "Award"
    },
    {
      degree: "Intermediate (PCM - Physics, Chemistry, Math)",
      institution: "BSEB / Veer Kunwar Singh University",
      level: "Senior Secondary",
      year: "Completed",
      score: "1st Division",
      icon: "BookOpen"
    },
    {
      degree: "Secondary School (10th Standard)",
      institution: "CBSE Board",
      level: "High School",
      year: "Completed",
      score: "1st Division",
      icon: "School"
    }
  ],

  skills: {
    frontend: [
      { name: "JavaScript (ES6+)", level: 92, badge: "Core" },
      { name: "React", level: 90, badge: "Framework" },
      { name: "Redux Toolkit", level: 88, badge: "State Mgmt" },
      { name: "GSAP & ScrollTrigger", level: 85, badge: "Motion" },
      { name: "Locomotive Scroll", level: 82, badge: "Scroll FX" },
      { name: "TailwindCSS & Bootstrap", level: 92, badge: "Styling" },
      { name: "HTML5 & CSS3", level: 95, badge: "Markup" }
    ],
    backend: [
      { name: "Node.js", level: 88, badge: "Runtime" },
      { name: "Express.js", level: 88, badge: "Framework" },
      { name: "MongoDB & Mongoose", level: 86, badge: "Database" },
      { name: "RESTful APIs", level: 92, badge: "Architecture" },
      { name: "WebRTC & WebSockets", level: 84, badge: "Real-time" },
      { name: "Google OAuth & Passport.js", level: 86, badge: "Auth" },
      { name: "JWT (JSON Web Tokens)", level: 90, badge: "Security" }
    ],
    tools: [
      { name: "Jest Testing", category: "Testing", desc: "Unit & Integration test suites" },
      { name: "Postman", category: "API Testing", desc: "Endpoint debugging & mock servers" },
      { name: "Git & GitHub", category: "Version Control", desc: "Branching, PRs & workflows" },
      { name: "Windows & Linux", category: "Operating Systems", desc: "Bash scripting & sysadmin" },
      { name: "Visual Studio Code", category: "IDE", desc: "Extensions, debugging & dev tools" }
    ]
  },

  projects: [
    {
      id: "ecommerce",
      title: "Fullstack E-Commerce Platform",
      tagline: "End-to-End Online Shopping Ecosystem",
      type: "Fullstack MERN Project",
      category: "E-Commerce",
      status: "Production Ready",
      featured: true,
      description: "A robust, scalable fullstack e-commerce web application featuring product catalogs, category filtering, cart management, order checkout, JWT authentication, and administrative inventory dashboards.",
      highlights: [
        "Dynamic cart and global state persistence via Redux Toolkit",
        "Role-based authentication (Admin vs Customer) with JWT and bcrypt",
        "Optimized MongoDB aggregations for high-speed product queries",
        "Responsive, high-converting checkout flows and payment integration"
      ],
      techStack: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "REST APIs"],
      github: "https://github.com/albatino7",
      liveDemo: "https://gamingconsole.com",
      command: "npm run start:store",
      retroIcon: "ShoppingBag"
    },
    {
      id: "url-shortener",
      title: "Ultra-Fast URL Shortener",
      tagline: "High-Throughput Link Management & Analytics Service",
      type: "Fullstack Project",
      category: "Microservice / Web App",
      status: "Active",
      featured: true,
      description: "A streamlined URL shortener service that generates secure, compact URLs with custom vanity slugs, instant redirection, click tracking analytics, and automated QR code generation.",
      highlights: [
        "Base-62 nano hash generation guaranteeing sub-30ms redirect latency",
        "Real-time click count tracking, referral sources, and visitor metrics",
        "Comprehensive unit & integration test coverage written with Jest",
        "Rate-limiting to guard against denial-of-service link flooding"
      ],
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Jest", "REST APIs"],
      github: "https://github.com/albatino7",
      liveDemo: "https://allindiaexamresult.com",
      command: "node server.js --shorten",
      retroIcon: "Link2"
    },
    {
      id: "video-chat",
      title: "Real-Time Video Chat Application",
      tagline: "Peer-to-Peer Encrypted Calling & Instant Messaging",
      type: "Fullstack Real-time Project",
      category: "WebRTC / Sockets",
      status: "Active",
      featured: true,
      description: "Peer-to-peer real-time video communication platform engineered using WebSockets for room signaling and WebRTC for high-fidelity, low-latency audio/video media streams.",
      highlights: [
        "WebSockets signaling server handles peer discovery and room handshakes",
        "WebRTC STUN/TURN integration for reliable NAT traversal across networks",
        "Interactive features including screen sharing, mic mute, and camera toggles",
        "Seamless fluid UI transitions powered by GSAP animation triggers"
      ],
      techStack: ["React", "WebRTC", "WebSockets / Socket.io", "Node.js", "Express.js", "GSAP"],
      github: "https://github.com/albatino7",
      liveDemo: "https://jaideoclasses.in",
      command: "npm run start:video",
      retroIcon: "Video"
    },
    {
      id: "wordpress-domains",
      title: "WordPress Platforms & Multi-Domain Migration",
      tagline: "Server Architecture & Zero-Downtime Migration (2018 - 2023)",
      type: "Cloud & Web Infrastructure",
      category: "Hosting & Sysadmin",
      status: "Maintained (2018-2023)",
      featured: false,
      description: "Managed, developed, and migrated multiple high-traffic commercial and educational websites across Linux servers, optimizing database performance and configuring DNS/SSL.",
      highlights: [
        "Zero-downtime server-to-server migration of databases and file assets",
        "DNS routing, SSL provisioning, and caching configuration (cPanel, Nginx, Apache)",
        "Security hardening, plugin audits, and database query optimization",
        "Managed 4 high-profile domains serving thousands of daily visitors"
      ],
      domains: [
        { name: "gamingconsole.com", desc: "Gaming news, review portal & interactive community", link: "https://gamingconsole.com" },
        { name: "allindiaexamresult.com", desc: "High-traffic national examination results & notifications", link: "https://allindiaexamresult.com" },
        { name: "healthynord.com", desc: "Health, fitness & wellness advisory platform", link: "https://healthynord.com" },
        { name: "jaideoclasses.in", desc: "Comprehensive online academic coaching & learning portal", link: "https://jaideoclasses.in" }
      ],
      techStack: ["WordPress", "Linux / Ubuntu", "Apache / Nginx", "MySQL", "PHP", "DNS / SSL"],
      github: "https://github.com/albatino7",
      liveDemo: "https://gamingconsole.com",
      command: "ssh root@webhost -p 22",
      retroIcon: "Server"
    }
  ],

  retroStats: {
    hits: "048291",
    resolution: "800x600 16-Bit Color",
    browser: "Netscape Navigator 3.0 / IE 4.0",
    dialupSpeed: "56.6 Kbps V.90 Modem",
    osBuild: "AtulOS v4.10.1998"
  }
};
