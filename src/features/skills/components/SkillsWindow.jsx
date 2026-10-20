import React, { useState } from 'react';
import {
  Code,
  Server,
  Wrench,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { portfolioData } from '../../../shared/constants/portfolioData';
import { playClick } from '../../../shared/utils/soundEffects';
import TechIcon from '../../../shared/components/ui/TechIcon';

export default function SkillsWindow() {
  const { skills, learningHighlights } = portfolioData;
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend', fullLabel: 'Frontend UI', icon: Code },
    { id: 'backend', label: 'Backend', fullLabel: 'Backend & DB', icon: Server },
    { id: 'tools', label: 'Tools', fullLabel: 'Tools & DevOps', icon: Wrench },
    { id: 'learning', label: 'Highlights', fullLabel: 'Core Highlights', icon: Zap }
  ];

  // Render a classic 90s block gauge that fits mobile
  const renderRetroGauge = (level) => {
    const totalBlocks = 10;
    const filledBlocks = Math.round((level / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;

    return (
      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        <div className="flex gap-0.5 win95-sunken p-0.5 bg-black">
          {Array.from({ length: filledBlocks }).map((_, i) => (
            <div key={`fill-${i}`} className="w-1.5 sm:w-2.5 h-2.5 sm:h-3 bg-blue-500 border border-blue-400"></div>
          ))}
          {Array.from({ length: emptyBlocks }).map((_, i) => (
            <div key={`empty-${i}`} className="w-1.5 sm:w-2.5 h-2.5 sm:h-3 bg-gray-900 border border-gray-800"></div>
          ))}
        </div>
        <span className="font-mono-90s font-bold text-[11px] sm:text-xs text-blue-900 w-8 sm:w-10 text-right">
          {level}%
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-2.5 sm:space-y-3 text-xs md:text-sm">
      {/* 90s Tabbed Dialog Bar - Horizontal scrollable on mobile */}
      <div className="flex items-end gap-1 border-b border-[#808080] pt-1 px-1 overflow-x-auto whitespace-nowrap no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                playClick();
                setActiveTab(tab.id);
              }}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs flex items-center gap-1 sm:gap-1.5 transition-none cursor-pointer border-t-2 border-l-2 border-r-2 flex-shrink-0 active:scale-95 ${
                isActive
                  ? 'bg-[#c0c0c0] font-bold border-t-[#ffffff] border-l-[#ffffff] border-r-[#404040] relative -bottom-[1px] z-10 border-b-0'
                  : 'bg-[#a0a0a0] text-gray-800 border-t-[#d0d0d0] border-l-[#d0d0d0] border-r-[#606060] hover:bg-[#b0b0b0]'
              }`}
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">{tab.fullLabel}</span>
              <span className="sm:hidden">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
        {/* Frontend Tab */}
        {activeTab === 'frontend' && (
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-[#808080]">
              <span className="font-bold text-blue-900 uppercase tracking-wider text-xs">
                Frontend UI & Motion Libraries
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono-90s text-gray-700">Client-Side</span>
            </div>

            <div className="win95-sunken p-2 sm:p-2.5 bg-white space-y-2">
              {skills.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-1.5 p-1 hover:bg-yellow-50"
                >
                  <div className="flex items-center gap-2 min-w-0 truncate">
                    <div className="w-5 h-5 win95-sunken bg-white p-0.5 flex items-center justify-center flex-shrink-0">
                      <TechIcon name={skill.name} className="w-3.5 h-3.5 flex-shrink-0" />
                    </div>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{skill.name}</span>
                    <span className="text-[9px] sm:text-[10px] bg-blue-100 text-blue-900 border border-blue-400 px-1 font-mono-90s flex-shrink-0 hidden xs:inline">
                      {skill.badge}
                    </span>
                  </div>
                  {renderRetroGauge(skill.level)}
                </div>
              ))}
            </div>

            <div className="p-2 win95-sunken bg-yellow-50 text-[10px] sm:text-[11px] text-gray-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-600 flex-shrink-0" />
              <span>
                <strong>Animation Specialty:</strong> GSAP, ScrollTrigger, and Locomotive Scroll.
              </span>
            </div>
          </div>
        )}

        {/* Backend Tab */}
        {activeTab === 'backend' && (
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-[#808080]">
              <span className="font-bold text-blue-900 uppercase tracking-wider text-xs">
                Backend Services & Databases
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono-90s text-gray-700">Server Architecture</span>
            </div>

            <div className="win95-sunken p-2 sm:p-2.5 bg-white space-y-2">
              {skills.backend.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-1.5 p-1 hover:bg-yellow-50"
                >
                  <div className="flex items-center gap-2 min-w-0 truncate">
                    <div className="w-5 h-5 win95-sunken bg-white p-0.5 flex items-center justify-center flex-shrink-0">
                      <TechIcon name={skill.name} className="w-3.5 h-3.5 flex-shrink-0" />
                    </div>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{skill.name}</span>
                    <span className="text-[9px] sm:text-[10px] bg-emerald-100 text-emerald-900 border border-emerald-500 px-1 font-mono-90s flex-shrink-0 hidden xs:inline">
                      {skill.badge}
                    </span>
                  </div>
                  {renderRetroGauge(skill.level)}
                </div>
              ))}
            </div>

            <div className="p-2 win95-sunken bg-emerald-50 text-[10px] sm:text-[11px] text-gray-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>
                <strong>Authentication & Real-Time:</strong> OAuth 2.0, JWT, Passport.js & WebRTC/WebSockets.
              </span>
            </div>
          </div>
        )}

        {/* Tools & DevOps Tab */}
        {activeTab === 'tools' && (
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-[#808080]">
              <span className="font-bold text-blue-900 uppercase tracking-wider text-xs">
                Development Environment & QA
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono-90s text-gray-700">Toolchain</span>
            </div>

            <div className="win95-sunken p-2 sm:p-2.5 bg-white divide-y divide-gray-200">
              {skills.tools.map((tool, index) => (
                <div
                  key={index}
                  className="py-1.5 sm:py-2 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 win95-sunken bg-white p-0.5 flex items-center justify-center flex-shrink-0">
                      <TechIcon name={tool.name} className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm">{tool.name}</div>
                      <div className="text-gray-600 text-[11px] sm:text-xs">{tool.desc}</div>
                    </div>
                  </div>
                  <span className="win95-raised px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-mono-90s font-semibold bg-[#e8e8e8] text-gray-800 self-start sm:self-center">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning Highlights Tab */}
        {activeTab === 'learning' && (
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-[#808080]">
              <span className="font-bold text-blue-900 uppercase tracking-wider text-xs">
                Engineering Competencies
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono-90s text-gray-700">Best Practices</span>
            </div>

            <div className="win95-sunken p-2 sm:p-2.5 bg-white space-y-1.5 sm:space-y-2">
              {learningHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-1.5 sm:gap-2 text-xs leading-normal">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-800 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
