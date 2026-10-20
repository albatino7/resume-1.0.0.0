import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Heart,
  Download,
  Copy,
  ExternalLink,
  Sparkles,
  Cpu
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../../../shared/components/ui/SocialIcons';
import { toast } from 'react-toastify';
import { triggerConfetti } from '../../../shared/utils/confetti';
import { portfolioData } from '../../../shared/constants/portfolioData';
import { playClick, playSuccess } from '../../../shared/utils/soundEffects';
import TechIcon from '../../../shared/components/ui/TechIcon';

export default function AboutWindow({ onOpenWindow }) {
  const { personal, learningHighlights } = portfolioData;

  const handleCopy = (text, label) => {
    playClick();
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label}!`, {
      icon: "💾"
    });
  };

  const handleCelebrate = () => {
    playSuccess();
    triggerConfetti();
    toast.info("🎉 Welcome to Atul Demond's 90s Portfolio!", {
      icon: "🕹️"
    });
  };

  return (
    <div className="space-y-3 sm:space-y-4 text-xs md:text-sm">
      {/* 90s Profile Header Card */}
      <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0] flex flex-col md:flex-row gap-3 sm:gap-4 items-center md:items-start">
        {/* Pixel Avatar Frame */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 win95-sunken p-1 bg-white relative flex items-center justify-center">
            <div className="w-full h-full bg-[#1e1b4b] flex flex-col items-center justify-center text-white relative overflow-hidden">
              <span className="font-pixel text-xl sm:text-2xl text-yellow-300 drop-shadow-[2px_2px_0px_#000]">AD</span>
              <span className="text-[8px] sm:text-[9px] font-mono-90s text-emerald-400 mt-0.5 sm:mt-1">MERN_DEV</span>
            </div>
            <span className="absolute -bottom-2 bg-yellow-300 text-black px-1.5 py-0.2 font-pixel text-[7px] sm:text-[8px] border border-black shadow">
              ONLINE
            </span>
          </div>

          <div className="mt-2.5 text-center">
            <span className="inline-block bg-green-700 text-white font-mono-90s text-[9px] sm:text-[10px] px-1.5 py-0.5 border border-black">
              ● READY FOR HIRE
            </span>
          </div>
        </div>

        {/* Bio Details */}
        <div className="flex-1 space-y-2 text-center md:text-left w-full min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-blue-900 tracking-tight">
                {personal.name}
              </h1>
              <p className="font-mono-90s text-gray-800 font-semibold text-xs sm:text-sm">
                {personal.title} <span className="text-blue-800 font-bold">({personal.experienceYears})</span>
              </p>
            </div>

            <button
              onClick={handleCelebrate}
              className="win95-btn px-2.5 py-1 text-xs self-center sm:self-start flex items-center gap-1 font-bold text-purple-900 active:scale-95 mt-1 sm:mt-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
              <span>Say Hi!</span>
            </button>
          </div>

          {/* Location & Quick Contact Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs">
            <div className="flex items-center gap-1.5 win95-sunken px-2 py-1 bg-white text-gray-800 min-w-0">
              <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
              <span className="truncate">{personal.location}</span>
            </div>

            <div
              onClick={() => handleCopy(personal.phone, "Phone Number")}
              className="flex items-center justify-between win95-sunken px-2 py-1 bg-white text-gray-800 cursor-pointer hover:bg-yellow-50 active:bg-yellow-100 min-w-0"
              title="Click to copy phone"
            >
              <div className="flex items-center gap-1.5 truncate">
                <Phone className="w-3.5 h-3.5 text-green-700 flex-shrink-0" />
                <span className="truncate">{personal.phone}</span>
              </div>
              <Copy className="w-3 h-3 text-gray-500 hover:text-black flex-shrink-0 ml-1" />
            </div>

            <div
              onClick={() => handleCopy(personal.email, "Email")}
              className="flex items-center justify-between win95-sunken px-2 py-1 bg-white text-gray-800 cursor-pointer hover:bg-yellow-50 active:bg-yellow-100 min-w-0"
              title="Click to copy email"
            >
              <div className="flex items-center gap-1.5 truncate">
                <Mail className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
                <span className="truncate">{personal.email}</span>
              </div>
              <Copy className="w-3 h-3 text-gray-500 hover:text-black flex-shrink-0 ml-1" />
            </div>

            <div className="flex items-center justify-around gap-2 win95-sunken px-2 py-1 bg-white min-w-0">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-800 hover:underline font-semibold truncate"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5] flex-shrink-0" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
              </a>
              <span className="text-gray-400">|</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-900 hover:underline font-semibold truncate"
              >
                <GithubIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
        <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-[#808080]">
          <span className="font-bold text-xs uppercase tracking-wider text-blue-900">
            Professional Summary
          </span>
        </div>
        <div className="win95-sunken p-2.5 sm:p-3 bg-white font-sys text-gray-900 leading-relaxed text-xs sm:text-[13px]">
          {personal.summary}
        </div>
      </div>

      {/* Core Tech Stack Arsenal */}
      <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
        <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#808080]">
          <span className="font-bold text-xs uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-blue-800" />
            <span>Core Tech Arsenal</span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono-90s text-gray-600">Production Ready</span>
        </div>

        <div className="win95-sunken p-2 bg-white">
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5">
            {[
              { name: 'React', label: 'React.js' },
              { name: 'Node', label: 'Node.js' },
              { name: 'Express', label: 'Express.js' },
              { name: 'MongoDB', label: 'MongoDB' },
              { name: 'JavaScript', label: 'JavaScript' },
              { name: 'Redux', label: 'Redux Toolkit' },
              { name: 'Tailwind', label: 'TailwindCSS' },
              { name: 'HTML', label: 'HTML5' },
              { name: 'CSS', label: 'CSS3' },
              { name: 'WebRTC', label: 'WebRTC' },
              { name: 'GSAP', label: 'GSAP Motion' },
              { name: 'Git', label: 'Git & GitHub' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 win95-raised p-1 sm:p-1.5 bg-[#f0f0f0] hover:bg-yellow-50 cursor-default"
                title={item.label}
              >
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <TechIcon name={item.name} className="w-3.5 h-3.5 flex-shrink-0" />
                </div>
                <span className="text-[11px] font-bold text-gray-800 truncate">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning & Experience Highlights */}
      <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
        <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#808080]">
          <span className="font-bold text-xs uppercase tracking-wider text-blue-900">
            Key Learning & Hands-On Achievements
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono-90s text-gray-600">8 Highlights</span>
        </div>

        <div className="win95-sunken p-2 sm:p-2.5 bg-white space-y-1.5 sm:space-y-2">
          {learningHighlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-1.5 sm:gap-2 text-xs leading-normal">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-700 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies & Action Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 win95-raised p-2 bg-[#d4d0c8]">
        <div className="flex items-center gap-1.5 text-xs flex-wrap">
          <Heart className="w-3.5 h-3.5 text-red-600 fill-red-500 flex-shrink-0" />
          <span className="font-bold text-gray-800">Hobbies:</span>
          <div className="flex gap-1 flex-wrap">
            {personal.hobbies.map((h, i) => (
              <span
                key={i}
                className="bg-yellow-100 text-yellow-900 border border-yellow-500 text-[10px] sm:text-[11px] px-1 py-0.2"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => onOpenWindow('resume')}
            className="win95-btn px-2.5 py-1 font-bold text-xs flex items-center justify-center gap-1 active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-blue-900" />
            <span>Resume.pdf</span>
          </button>
          <button
            onClick={() => onOpenWindow('contact')}
            className="win95-btn px-2.5 py-1 font-bold text-xs flex items-center justify-center gap-1 bg-[#dcdc55] hover:bg-[#eaeaa0] active:scale-95"
          >
            <Mail className="w-3.5 h-3.5 text-red-700" />
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
