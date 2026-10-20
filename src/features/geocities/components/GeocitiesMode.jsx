import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShoppingBag,
  Layers,
  Flame,
  GraduationCap,
  Copy
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../../../shared/components/ui/SocialIcons';
import { toast } from 'react-toastify';
import { triggerConfetti } from '../../../shared/utils/confetti';
import { portfolioData } from '../../../shared/constants/portfolioData';
import { playClick, playSuccess, playError } from '../../../shared/utils/soundEffects';
import TechIcon from '../../../shared/components/ui/TechIcon';

export default function GeocitiesMode({ onSwitchToDesktop }) {
  const { personal, education, skills, projects } = portfolioData;

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text, label) => {
    playClick();
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label}!`, { icon: "💾" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      playError();
      toast.error('Please enter Name, Email and Message!', { icon: "⚠️" });
      return;
    }
    playSuccess();
    triggerConfetti();
    toast.success(`Thank you ${form.name}! Message delivered to Atul Demond.`, {
      icon: "✉️"
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#000033] text-white font-sys pb-20 select-text">
      {/* 90s Web Banner Header - Solid One-Color */}
      <div className="bg-[#1a0836] border-b-4 border-yellow-400 p-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-yellow-300 font-pixel text-xs blink">★ WELCOME TO ★</span>
        </div>
        <h1 className="font-pixel text-xl sm:text-3xl text-yellow-300 drop-shadow-[3px_3px_0px_#ff0000] tracking-wider mb-2">
          ATUL DEMOND&apos;S CYBER REALM
        </h1>
        <p className="text-cyan-300 font-mono-90s text-sm">
          MERN STACK DEVELOPER • REAL-TIME WEBRTC ARCHITECT • GSAP MOTION DESIGNER
        </p>

        {/* Switch back to Windows 95 Desktop button */}
        <div className="mt-3 flex justify-center">
          <button
            onClick={() => {
              playClick();
              onSwitchToDesktop();
            }}
            className="win95-btn px-4 py-1.5 text-xs font-bold text-blue-900 bg-[#c0c0c0] hover:bg-white flex items-center gap-2 active:scale-95"
          >
            <span>🖥️ Switch to Windows 95 Desktop View</span>
          </button>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="bg-yellow-400 text-black py-1 px-3 font-mono-90s text-xs font-bold overflow-hidden border-b-2 border-black">
        <div className="animate-retro-marquee">
          🔥🔥🔥 2+ YEARS EXPERIENCE IN MERN STACK (REACT, NODE, EXPRESS, MONGODB) 🔥 WEBRTC REAL-TIME VIDEO CHAT 🔥 E-COMMERCE ECOSYSTEM 🔥 URL SHORTENER MICROSERVICE 🔥 CALL: 8651029001 🔥 DELHI DABRI MOR 🔥 EMAIL: ATULDEMOND@GMAIL.COM 🔥🔥🔥
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Under Construction Banner */}
        <div className="hazard-stripes p-2 text-center text-black font-pixel text-xs font-bold border-2 border-yellow-300 shadow">
          <div className="bg-yellow-300 py-1 px-2 inline-block border border-black">
            🚧 UNDER PERMANENT CONSTRUCTION 1998 🚧
          </div>
        </div>

        {/* Bio & Intro Section */}
        <section className="border-4 border-double border-cyan-400 p-4 bg-blue-950/80 rounded-none shadow-xl">
          <div className="flex items-center gap-2 mb-3 border-b-2 border-cyan-400 pb-2">
            <Flame className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <h2 className="font-pixel text-sm text-yellow-300">ABOUT ATUL DEMOND</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Retro Avatar */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 border-4 border-yellow-400 bg-black p-1 flex items-center justify-center text-center">
                <div>
                  <div className="font-pixel text-3xl text-cyan-400">AD</div>
                  <div className="text-[10px] font-mono-90s text-yellow-300 mt-1">MERN CRAFTSMAN</div>
                </div>
              </div>
              <span className="mt-2 bg-green-500 text-black px-2 py-0.5 font-pixel text-[9px]">
                AVAILABLE FOR HIRE
              </span>
            </div>

            {/* Description & Contact Badges */}
            <div className="md:col-span-2 space-y-3 text-xs">
              <p className="leading-relaxed text-gray-200">
                {personal.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono-90s pt-2">
                <div className="bg-black/60 p-2 border border-cyan-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div
                  onClick={() => handleCopy(personal.phone, "Phone")}
                  className="bg-black/60 p-2 border border-cyan-500 flex items-center justify-between cursor-pointer hover:bg-cyan-900/40"
                >
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>{personal.phone}</span>
                  </span>
                  <Copy className="w-3 h-3 text-cyan-300" />
                </div>
                <div
                  onClick={() => handleCopy(personal.email, "Email")}
                  className="bg-black/60 p-2 border border-cyan-500 flex items-center justify-between cursor-pointer hover:bg-cyan-900/40"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="truncate">{personal.email}</span>
                  </span>
                  <Copy className="w-3 h-3 text-cyan-300" />
                </div>
                <div className="bg-black/60 p-2 border border-cyan-500 flex items-center justify-around">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-yellow-300 underline font-bold flex items-center gap-1.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                    <span>LinkedIn</span>
                  </a>
                  <span>|</span>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-yellow-300 underline font-bold flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Fullstack Projects */}
        <section className="border-4 border-double border-yellow-400 p-4 bg-indigo-950/80 shadow-xl">
          <div className="flex items-center gap-2 mb-4 border-b-2 border-yellow-400 pb-2">
            <ShoppingBag className="w-5 h-5 text-yellow-400" />
            <h2 className="font-pixel text-sm text-yellow-300">FEATURED FULLSTACK PROJECTS</h2>
          </div>

          <div className="space-y-6">
            {projects.map((proj, pIdx) => (
              <div
                key={proj.id}
                className="border-2 border-dashed border-cyan-400 p-3 bg-black/50 space-y-2 text-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-700 pb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-pixel text-xs text-yellow-400">
                      #{pIdx + 1} {proj.title}
                    </span>
                    <span className="bg-red-800 text-white px-1.5 py-0.2 text-[10px] font-mono-90s">
                      {proj.type}
                    </span>
                  </div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-yellow-300 underline font-mono-90s flex items-center gap-1 self-start sm:self-center"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-gray-200 leading-relaxed">{proj.description}</p>

                {/* Highlights */}
                <div className="space-y-1 text-gray-300 text-[11px]">
                  {proj.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-1.5">
                      <span className="text-green-400 font-bold">✔</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-blue-900 border border-blue-500 text-cyan-200 px-1.5 py-0.5 text-[10px] font-mono-90s flex items-center gap-1"
                    >
                      <TechIcon name={tech} className="w-3 h-3 flex-shrink-0" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="border-4 border-double border-green-400 p-4 bg-emerald-950/70 shadow-xl">
          <div className="flex items-center gap-2 mb-3 border-b-2 border-green-400 pb-2">
            <Layers className="w-5 h-5 text-green-400" />
            <h2 className="font-pixel text-sm text-green-300">TECHNICAL ARSENAL</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="border border-green-500 p-3 bg-black/60">
              <h3 className="font-bold text-yellow-300 mb-2 border-b border-green-700 pb-1">
                Frontend Mastery
              </h3>
              <ul className="space-y-1.5 text-gray-200">
                {skills.frontend.map((s, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <TechIcon name={s.name} className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{s.name}</span>
                    </div>
                    <span className="font-mono-90s text-green-400 flex-shrink-0 ml-1">{s.level}%</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-green-500 p-3 bg-black/60">
              <h3 className="font-bold text-yellow-300 mb-2 border-b border-green-700 pb-1">
                Backend & Real-Time
              </h3>
              <ul className="space-y-1.5 text-gray-200">
                {skills.backend.map((s, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <TechIcon name={s.name} className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{s.name}</span>
                    </div>
                    <span className="font-mono-90s text-green-400 flex-shrink-0 ml-1">{s.level}%</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-green-500 p-3 bg-black/60">
              <h3 className="font-bold text-yellow-300 mb-2 border-b border-green-700 pb-1">
                Tools & OS
              </h3>
              <ul className="space-y-1.5 text-gray-200">
                {skills.tools.map((t, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <TechIcon name={t.name} className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-cyan-300">{t.name}</div>
                      <div className="text-[10px] text-gray-400">{t.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Qualifications */}
        <section className="border-4 border-double border-purple-400 p-4 bg-purple-950/70 shadow-xl">
          <div className="flex items-center gap-2 mb-3 border-b-2 border-purple-400 pb-2">
            <GraduationCap className="w-5 h-5 text-purple-300" />
            <h2 className="font-pixel text-sm text-purple-200">ACADEMIC CREDENTIALS</h2>
          </div>

          <div className="space-y-2 text-xs">
            {education.map((edu, eIdx) => (
              <div
                key={eIdx}
                className="bg-black/60 border border-purple-500 p-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
              >
                <div>
                  <span className="font-bold text-yellow-300">{edu.degree}</span>
                  <div className="text-gray-300 text-[11px]">{edu.institution}</div>
                </div>
                <span className="bg-purple-900 border border-purple-400 text-purple-200 px-2 py-0.5 text-[10px] font-mono-90s self-start sm:self-center">
                  {edu.score}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Guestbook / Contact Form */}
        <section className="border-4 border-double border-red-500 p-4 bg-red-950/80 shadow-xl">
          <div className="flex items-center gap-2 mb-3 border-b-2 border-red-500 pb-2">
            <Mail className="w-5 h-5 text-yellow-400" />
            <h2 className="font-pixel text-sm text-yellow-300">SIGN ATUL&apos;S 90s GUESTBOOK / TRANSMIT MESSAGE</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-300 font-bold mb-1">Your Handle / Name:</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Neo / Tech Recruiter"
                  className="w-full bg-black border-2 border-yellow-400 p-2 text-cyan-300 focus:outline-none text-base sm:text-xs"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 font-bold mb-1">Electronic Mail Address:</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="contact@company.com"
                  className="w-full bg-black border-2 border-yellow-400 p-2 text-cyan-300 focus:outline-none text-base sm:text-xs"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-bold mb-1">Message Transmission:</label>
              <textarea
                rows="3"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Let's build something extraordinary with MERN stack..."
                className="w-full bg-black border-2 border-yellow-400 p-2 text-cyan-300 focus:outline-none text-base sm:text-xs"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto win95-btn px-6 py-2.5 sm:py-2 font-bold text-sm bg-yellow-400 text-black hover:bg-yellow-300 active:scale-95"
            >
              Sign Guestbook & Send 🚀
            </button>
          </form>
        </section>

        {/* 90s Web Badges Footer */}
        <div className="text-center pt-4 space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="bg-black border border-gray-600 px-3 py-1 font-mono-90s text-xs text-green-400">
              VISITOR COUNT: <span className="font-bold text-yellow-300">048291</span>
            </div>
            <div className="bg-blue-900 border border-blue-400 px-2 py-1 text-[10px] font-mono-90s">
              NETSCAPE NOW 3.0
            </div>
            <div className="bg-gray-800 border border-gray-500 px-2 py-1 text-[10px] font-mono-90s">
              VALID HTML 3.2
            </div>
            <div className="bg-red-900 border border-red-500 px-2 py-1 text-[10px] font-mono-90s">
              MADE WITH NOTEPAD
            </div>
          </div>

          <p className="text-[11px] text-gray-400 font-mono-90s">
            (C) 1998-2026 Atul Demond. All Cyber-Rights Reserved. Best viewed with 16-bit color at 800x600 resolution.
          </p>
        </div>
      </div>
    </div>
  );
}
