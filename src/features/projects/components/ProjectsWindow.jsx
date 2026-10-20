import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  ShoppingBag,
  Link2,
  Video,
  Server,
  Layers,
  Terminal,
  CheckCircle,
  Copy,
  Globe
} from 'lucide-react';
import { GithubIcon } from '../../../shared/components/ui/SocialIcons';
import { toast } from 'react-toastify';
import { portfolioData } from '../../../shared/constants/portfolioData';
import { playClick } from '../../../shared/utils/soundEffects';
import TechIcon from '../../../shared/components/ui/TechIcon';

export default function ProjectsWindow() {
  const { projects } = portfolioData;
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Link2':
        return Link2;
      case 'Video':
        return Video;
      case 'Server':
        return Server;
      default:
        return FolderGit2;
    }
  };

  const copyUrl = (url, name) => {
    playClick();
    navigator.clipboard.writeText(url);
    toast.success(`Copied link for ${name}!`, {
      icon: "🌐"
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2.5 sm:gap-3 h-full text-xs md:text-sm">
      {/* Mobile Horizontal Project Tabs (shown on < md screens) */}
      <div className="md:hidden flex items-center gap-1.5 overflow-x-auto whitespace-nowrap no-scrollbar pb-1 border-b border-[#808080] win95-raised p-1.5 bg-[#d4d0c8]">
        {projects.map((project) => {
          const Icon = getIcon(project.retroIcon);
          const isSelected = selectedProjectId === project.id;
          return (
            <button
              key={project.id}
              onClick={() => {
                playClick();
                setSelectedProjectId(project.id);
              }}
              className={`win95-btn px-2.5 py-1 text-xs flex items-center gap-1.5 flex-shrink-0 active:scale-95 ${
                isSelected
                  ? 'bg-[#000080] text-white font-bold border-t-[#404040] border-l-[#404040] border-b-[#fff] border-r-[#fff]'
                  : 'text-black'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-yellow-300' : 'text-blue-800'}`} />
              <span className="truncate">{project.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Desktop Left Sidebar: Projects Tree / File List */}
      <div className="hidden md:flex w-56 win95-sunken p-2 bg-white flex-shrink-0 flex-col justify-between">
        <div>
          <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5 pb-1 border-b border-gray-300">
            <FolderGit2 className="w-3.5 h-3.5 text-yellow-600" />
            <span>C:\Projects\</span>
          </div>

          <div className="space-y-1">
            {projects.map((project) => {
              const Icon = getIcon(project.retroIcon);
              const isSelected = selectedProjectId === project.id;

              return (
                <button
                  key={project.id}
                  onClick={() => {
                    playClick();
                    setSelectedProjectId(project.id);
                  }}
                  className={`w-full text-left px-2 py-1.5 flex items-center gap-2 transition-none cursor-pointer text-xs ${
                    isSelected
                      ? 'bg-[#000080] text-white font-bold'
                      : 'hover:bg-[#dfdfdf] text-black'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 flex-shrink-0 ${
                      isSelected ? 'text-yellow-300' : 'text-blue-800'
                    }`}
                  />
                  <div className="truncate">
                    <div className="truncate leading-tight">{project.title}</div>
                    <div
                      className={`text-[10px] truncate ${
                        isSelected ? 'text-blue-200' : 'text-gray-500'
                      }`}
                    >
                      {project.category}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 p-2 win95-raised bg-[#d4d0c8] text-[11px]">
          <span className="font-bold block text-gray-800">Projects Explorer</span>
          <span className="text-gray-600 block mt-0.5">Total: 4 Projects</span>
          <span className="text-emerald-700 font-bold block mt-0.5">● All Deployable</span>
        </div>
      </div>

      {/* Right Content Area: Detailed Project Inspector */}
      <div className="flex-1 flex flex-col space-y-2.5 sm:space-y-3 min-w-0">
        {/* Project Header Card */}
        <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-[#808080] pb-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base md:text-lg font-bold text-blue-900 leading-tight">
                  {activeProject.title}
                </h2>
                <span className="bg-yellow-200 text-yellow-900 border border-yellow-700 text-[9px] sm:text-[10px] px-1.5 py-0.2 font-mono-90s whitespace-nowrap">
                  {activeProject.type}
                </span>
              </div>
              <p className="text-gray-700 font-mono-90s text-[11px] sm:text-xs mt-0.5">
                {activeProject.tagline}
              </p>
            </div>

            <div className="self-start sm:self-center px-1.5 sm:px-2 py-0.5 bg-black text-[#00ff66] font-mono-90s text-[10px] sm:text-xs border border-gray-600 whitespace-nowrap">
              STATUS: {activeProject.status}
            </div>
          </div>

          <div className="win95-sunken p-2 sm:p-2.5 bg-white text-gray-800 text-xs sm:text-[13px] leading-relaxed mt-2">
            {activeProject.description}
          </div>
        </div>

        {/* Key Features & Architecture Highlights */}
        <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
          <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 pb-1 border-b border-[#808080]">
            <CheckCircle className="w-3.5 h-3.5 text-green-700 flex-shrink-0" />
            <span>Key Engineering Highlights</span>
          </div>

          <div className="win95-sunken p-2 sm:p-2.5 bg-white space-y-1.5">
            {activeProject.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs text-gray-800">
                <span className="text-blue-700 font-bold font-mono-90s flex-shrink-0">[{idx + 1}]</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* If WordPress domains exist for this project, show domain table */}
        {activeProject.domains && (
          <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
            <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 pb-1 border-b border-[#808080]">
              <Globe className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
              <span>Domains Managed & Migrated (2018 - 2023)</span>
            </div>

            <div className="win95-sunken p-1.5 sm:p-2 bg-white overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[280px]">
                <thead>
                  <tr className="bg-[#dfdfdf] border-b border-gray-400">
                    <th className="p-1 sm:p-1.5 font-bold">Domain</th>
                    <th className="p-1 sm:p-1.5 font-bold">Scope / Purpose</th>
                    <th className="p-1 sm:p-1.5 font-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {activeProject.domains.map((dom, dIdx) => (
                    <tr key={dIdx} className="hover:bg-yellow-50">
                      <td className="p-1 sm:p-1.5 font-mono-90s font-bold text-blue-800 text-[11px] sm:text-xs">
                        {dom.name}
                      </td>
                      <td className="p-1 sm:p-1.5 text-gray-700 text-[11px] sm:text-xs">{dom.desc}</td>
                      <td className="p-1 sm:p-1.5 text-center">
                        <button
                          onClick={() => copyUrl(`https://${dom.name}`, dom.name)}
                          className="win95-btn px-1.5 py-0.5 text-[10px] sm:text-[11px] active:scale-95"
                          title="Copy Domain URL"
                        >
                          Copy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
          <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 pb-1 border-b border-[#808080]">
            <Layers className="w-3.5 h-3.5 text-indigo-700 flex-shrink-0" />
            <span>Technologies & Tools</span>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {activeProject.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="win95-sunken px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white text-gray-900 font-mono-90s text-[10px] sm:text-xs font-semibold flex items-center gap-1.5"
              >
                <TechIcon name={tech} className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons & Terminal Command preview */}
        <div className="win95-raised p-2 sm:p-2.5 bg-[#d4d0c8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
          {/* CLI Run snippet */}
          <div className="flex items-center gap-1.5 bg-black text-[#00ff66] px-2 py-1 font-mono-90s text-[11px] sm:text-xs overflow-hidden truncate">
            <Terminal className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <span className="text-gray-400">C:\&gt;</span>
            <span className="truncate">{activeProject.command}</span>
          </div>

          {/* Links */}
          <div className="grid grid-cols-4 sm:flex sm:items-center gap-1.5">
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-3 sm:col-auto win95-btn px-3 py-1 font-bold text-xs flex items-center justify-center gap-1.5 text-black hover:bg-gray-100 active:scale-95"
            >
              <GithubIcon className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Source Code</span>
              <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
            </a>

            <button
              onClick={() => copyUrl(activeProject.github, activeProject.title)}
              className="win95-btn px-2.5 py-1 text-xs flex items-center justify-center active:scale-95"
              title="Copy GitHub Link"
            >
              <Copy className="w-3 h-3 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
