import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePDF() {
  const pdfDoc = await PDFDocument.create();
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Letter page
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const { width, height } = page.getSize();
  const margin = 40;
  let y = height - margin;

  // Header - Name
  page.drawText('Atul Demond', {
    x: margin,
    y: y - 10,
    size: 24,
    font: fontBold,
    color: rgb(0.08, 0.08, 0.08),
  });

  // Contact info line
  y -= 35;
  const contactText = 'Phone: +91 8651029001  |  Email: atuldemond@gmail.com  |  GitHub: github.com/albatino7';
  page.drawText(contactText, {
    x: margin,
    y,
    size: 9.5,
    font: fontHelvetica,
    color: rgb(0.2, 0.2, 0.2),
  });

  y -= 14;
  const contactText2 = 'LinkedIn: linkedin.com/in/atuldemond/  |  Location: Delhi Dabri Mor, Delhi, India';
  page.drawText(contactText2, {
    x: margin,
    y,
    size: 9.5,
    font: fontHelvetica,
    color: rgb(0.2, 0.2, 0.2),
  });

  // Divider line
  y -= 15;
  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 1,
    color: rgb(0.7, 0.7, 0.7),
  });

  const drawSectionHeading = (title) => {
    y -= 22;
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 11,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 5;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.5,
      color: rgb(0.75, 0.75, 0.75),
    });
    y -= 10;
  };

  // Section 1: Summary
  drawSectionHeading('Summary');
  const summaryLines = [
    'MERN Stack Developer with over 2 years of hands-on experience in designing, developing, and implementing',
    'web applications using modern technologies. Proficient in frontend development with HTML, CSS, JavaScript, React,',
    'and GSAP. Experienced in backend development with Node.js and Express.js, and adept in database management with',
    'MongoDB. Strong expertise in state management using Redux Toolkit and authentication mechanisms including Google',
    'OAuth and JWT. Committed to continuous learning in Generative AI and delivering innovative, efficient web solutions.'
  ];
  for (const line of summaryLines) {
    page.drawText(line, { x: margin, y, size: 9, font: fontHelvetica, color: rgb(0.15, 0.15, 0.15) });
    y -= 12;
  }

  // Section 2: Technical Skills
  drawSectionHeading('Technical Skills');
  const skills = [
    '• Frontend: React, Redux Toolkit, JavaScript (ES6+), GSAP, ScrollTrigger, Locomotive/Lenis, Tailwind CSS, Bootstrap, HTML5, CSS3',
    '• Backend: Node.js, Express.js, RESTful APIs, WebSockets, WebRTC, Google OAuth, JWT, Passport.js',
    '• Database & Storage: MongoDB, Mongoose, Compound Indexing',
    '• Tools & Testing: Git, GitHub, Postman, Jest, Vite, Visual Studio Code, Linux, Windows OS',
    '• Emerging Interests: Generative AI, RAG Architectures, AI Agents'
  ];
  for (const line of skills) {
    page.drawText(line, { x: margin, y, size: 8.5, font: fontHelvetica, color: rgb(0.15, 0.15, 0.15) });
    y -= 12;
  }

  // Section 3: Professional Experience
  drawSectionHeading('Experience & Key Projects');
  
  // Role 1
  page.drawText('Full-Stack MERN Developer — Engineering & Applications', { x: margin, y, size: 10, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  page.drawText('2022 – Present', { x: width - margin - 75, y, size: 9, font: fontOblique, color: rgb(0.3, 0.3, 0.3) });
  y -= 13;
  const expBullets = [
    '• Developed and maintained responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js).',
    '• Implemented complex animations and scroll effects using GSAP, ScrollTrigger, and Locomotive Scroll to enhance UX.',
    '• Utilized React and Redux Toolkit for efficient client state management and seamless user interactions.',
    '• Designed and built secure RESTful APIs for multiple microservices and integrated them with frontend clients.',
    '• Implemented authentication and authorization mechanisms using Google OAuth, JWT, and Passport.js.',
    '• Developed real-time communication features using WebRTC and WebSockets for enhanced interactivity.',
    '• Wrote unit and integration tests using Jest and Postman to ensure code quality and reliability.'
  ];
  for (const b of expBullets) {
    page.drawText(b, { x: margin + 6, y, size: 8.5, font: fontHelvetica, color: rgb(0.2, 0.2, 0.2) });
    y -= 11.5;
  }

  y -= 5;
  // Role 2
  page.drawText('Web Systems & Freelance Developer — Client Production Domains', { x: margin, y, size: 10, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  page.drawText('2018 – 2023', { x: width - margin - 65, y, size: 9, font: fontOblique, color: rgb(0.3, 0.3, 0.3) });
  y -= 13;
  const exp2Bullets = [
    '• Created and managed production WordPress websites and executed zero-downtime server migrations.',
    '• Managed infrastructure and optimizations for active domains: gamingconsole.com, allindiaexamresult.com,',
    '  healthynord.com, and jaideoclasses.in.',
    '• Hardened server security, tuned MySQL database queries, and implemented caching layers.'
  ];
  for (const b of exp2Bullets) {
    page.drawText(b, { x: margin + 6, y, size: 8.5, font: fontHelvetica, color: rgb(0.2, 0.2, 0.2) });
    y -= 11.5;
  }

  // Section 4: Education & Certifications
  drawSectionHeading('Education & Certifications');
  const educationList = [
    { deg: 'Master of Computer Applications (MCA)', school: 'AISECT University, Jharkhand', div: 'Completed' },
    { deg: 'Bachelor of Computer Applications (BCA)', school: 'Veer Kunwar Singh University (VKSU)', div: '1st Division' },
    { deg: 'Intermediate (PCM)', school: 'BSEB / Veer Kunwar Singh University', div: '1st Division' },
    { deg: 'Secondary School (10th)', school: 'Central Board of Secondary Education (CBSE)', div: '1st Division' },
  ];
  for (const edu of educationList) {
    page.drawText(`• ${edu.deg}`, { x: margin + 6, y, size: 9, font: fontBold, color: rgb(0.15, 0.15, 0.15) });
    page.drawText(`${edu.school}  —  ${edu.div}`, { x: margin + 250, y, size: 8.5, font: fontHelvetica, color: rgb(0.3, 0.3, 0.3) });
    y -= 13;
  }

  // Section 5: Key Projects Highlight
  drawSectionHeading('Key Projects');
  const projectList = [
    '• PulseCart (E-Commerce Platform): Full-stack MERN with Redux Toolkit, JWT auth, cart persistence & checkout.',
    '• LinkPulse (URL Shortener & Analytics): Node.js/Express, MongoDB, redirect service, QR code, telemetry charts.',
    '• EchoSphere (Real-Time Collab): React, Node.js, WebSockets, WebRTC P2P media calling, online presence.',
    '• NeuroQuery (AI Semantic Search): Generative AI RAG search with vector embeddings and markdown Q&A.'
  ];
  for (const p of projectList) {
    page.drawText(p, { x: margin + 6, y, size: 8.5, font: fontHelvetica, color: rgb(0.2, 0.2, 0.2) });
    y -= 12;
  }

  // Hobbies / Extracurricular
  y -= 4;
  page.drawText('Interests & Practice: Meditation, Continuous Learning in Generative AI, Open-Source exploration.', {
    x: margin,
    y,
    size: 8.5,
    font: fontOblique,
    color: rgb(0.35, 0.35, 0.35)
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public', 'resume-atul-demond.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('✅ Generated real PDF asset at:', outputPath);
}

generateResumePDF().catch(console.error);
