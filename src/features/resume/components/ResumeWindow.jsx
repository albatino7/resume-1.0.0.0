import React from 'react';
import {
  Printer,
  Copy
} from 'lucide-react';
import { toast } from 'react-toastify';
import { portfolioData } from '../../../shared/constants/portfolioData';
import { playClick } from '../../../shared/utils/soundEffects';
import TechIcon from '../../../shared/components/ui/TechIcon';

export default function ResumeWindow() {
  const { personal, education, projects, learningHighlights } = portfolioData;

  const handlePrint = () => {
    playClick();
    window.print();
  };

  const handleCopyAll = () => {
    playClick();
    const textResume = `
ATUL DEMOND - MERN STACK DEVELOPER
Phone: ${personal.phone} | Email: ${personal.email} | GitHub: ${personal.github}
Address: ${personal.location} | LinkedIn: ${personal.linkedin}

SUMMARY:
${personal.summary}

SKILLS:
Frontend: JavaScript, React, Redux Toolkit, GSAP, ScrollTrigger, Locomotive Scroll, Bootstrap, TailwindCSS, HTML, CSS
Backend: Node.js, Express.js, MongoDB, Google OAuth, JWT, Passport.js, WebRTC, WebSockets, RESTful APIs
Tools: Jest (Testing), Postman (API Testing), Git, GitHub, Windows, Linux, VS Code

LEARNING & HIGHLIGHTS:
${learningHighlights.map(h => `- ${h}`).join('\n')}

PROJECTS:
${projects.map(p => `- ${p.title} (${p.type}): ${p.tagline} | Tech: ${p.techStack.join(', ')}`).join('\n')}

EDUCATION:
${education.map(e => `- ${e.degree}: ${e.institution} (${e.score})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    toast.success("Full text resume copied to clipboard!", {
      icon: "📋"
    });
  };

  return (
    <div className="space-y-2.5 sm:space-y-3 text-xs md:text-sm">
      {/* Top action toolbar */}
      <div className="win95-raised p-2 bg-[#d4d0c8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-bold text-gray-800 text-xs">
          <span>Document:</span>
          <span className="font-mono-90s text-blue-900 bg-white px-2 py-0.5 win95-sunken truncate text-[11px] sm:text-xs">
            Atul_Demond_Resume.doc
          </span>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5">
          <button
            onClick={handleCopyAll}
            className="win95-btn px-2.5 py-1.5 sm:py-1 text-xs flex items-center justify-center gap-1 font-semibold active:scale-95"
            title="Copy plain text resume"
          >
            <Copy className="w-3.5 h-3.5 text-gray-700" />
            <span>Copy Text</span>
          </button>

          <button
            onClick={handlePrint}
            className="win95-btn px-3 py-1.5 sm:py-1 text-xs flex items-center justify-center gap-1.5 font-bold text-blue-900 bg-[#dfdfdf] active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet */}
      <div className="win95-sunken p-3 sm:p-6 bg-white text-black font-sans leading-normal shadow-inner max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b-2 border-black pb-3 mb-3">
          <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900">
            {personal.name}
          </h1>
          <div className="text-xs text-gray-700 font-medium flex flex-wrap gap-x-4 gap-y-1 mt-1">
            <span>📞 {personal.phone}</span>
            <span>✉️ {personal.email}</span>
            <span>🔗 github.com/albatino7</span>
            <span>📍 {personal.location}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-4">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5">
            Summary
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed text-justify">
            {personal.summary}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-4">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="border border-gray-300 p-2 bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1.5 border-b border-gray-300 pb-0.5">Frontend</h3>
              <ul className="space-y-1.5 text-gray-800 text-[11px]">
                <li className="flex items-center gap-1.5"><TechIcon name="JavaScript" className="w-3.5 h-3.5 flex-shrink-0" /><span>JavaScript (ES6+)</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="React" className="w-3.5 h-3.5 flex-shrink-0" /><span>React, Redux Toolkit</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="GSAP" className="w-3.5 h-3.5 flex-shrink-0" /><span>GSAP, ScrollTrigger</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="Locomotive" className="w-3.5 h-3.5 flex-shrink-0" /><span>Locomotive Scroll</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="Tailwind" className="w-3.5 h-3.5 flex-shrink-0" /><span>Bootstrap, TailwindCSS</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="HTML" className="w-3.5 h-3.5 flex-shrink-0" /><span>HTML5, CSS3</span></li>
              </ul>
            </div>

            <div className="border border-gray-300 p-2 bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1.5 border-b border-gray-300 pb-0.5">Backend</h3>
              <ul className="space-y-1.5 text-gray-800 text-[11px]">
                <li className="flex items-center gap-1.5"><TechIcon name="Node" className="w-3.5 h-3.5 flex-shrink-0" /><span>Node.js, Express.js</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="MongoDB" className="w-3.5 h-3.5 flex-shrink-0" /><span>MongoDB, Mongoose</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="Google OAuth" className="w-3.5 h-3.5 flex-shrink-0" /><span>Google OAuth, JWT</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="JWT" className="w-3.5 h-3.5 flex-shrink-0" /><span>Passport.js, Auth</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="WebRTC" className="w-3.5 h-3.5 flex-shrink-0" /><span>WebRTC, WebSockets</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="REST" className="w-3.5 h-3.5 flex-shrink-0" /><span>RESTful APIs</span></li>
              </ul>
            </div>

            <div className="border border-gray-300 p-2 bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1.5 border-b border-gray-300 pb-0.5">Tools & OS</h3>
              <ul className="space-y-1.5 text-gray-800 text-[11px]">
                <li className="flex items-center gap-1.5"><TechIcon name="Jest" className="w-3.5 h-3.5 flex-shrink-0" /><span>Testing: Jest</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="Postman" className="w-3.5 h-3.5 flex-shrink-0" /><span>API Testing: Postman</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="Git" className="w-3.5 h-3.5 flex-shrink-0" /><span>Version Control: Git, GitHub</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="Linux" className="w-3.5 h-3.5 flex-shrink-0" /><span>OS: Windows, Linux</span></li>
                <li className="flex items-center gap-1.5"><TechIcon name="VS Code" className="w-3.5 h-3.5 flex-shrink-0" /><span>IDE: Visual Studio Code</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning & Experience Highlights */}
        <div className="mb-4">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
            Learning & Hands-On Engineering Experience
          </h2>
          <ul className="space-y-1 text-xs text-gray-800">
            {learningHighlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-black font-bold">•</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Projects */}
        <div className="mb-4">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
            Featured Fullstack Projects
          </h2>
          <div className="space-y-2 text-xs">
            {projects.map((p, i) => (
              <div key={i} className="border-l-2 border-blue-900 pl-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{p.title} ({p.type})</span>
                  <span className="text-[10px] text-gray-600 font-mono">{p.category}</span>
                </div>
                <p className="text-gray-700 text-[11px] mt-0.5">{p.description}</p>
                <div className="text-[10px] text-blue-900 font-semibold mt-0.5">
                  Tech Stack: {p.techStack.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-2">
            Education & Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {education.map((edu, i) => (
              <div key={i} className="p-1.5 border border-gray-200 bg-gray-50">
                <div className="font-bold text-gray-900">{edu.degree}</div>
                <div className="text-gray-700 text-[11px]">{edu.institution}</div>
                <div className="text-[10px] text-blue-900 font-semibold">{edu.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
