import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send } from 'lucide-react';
import { portfolioData } from '../../../shared/constants/portfolioData';
import { playClick, playSuccess, playError } from '../../../shared/utils/soundEffects';

export default function TerminalWindow() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Microsoft(R) Windows 98 [Version 4.10.1998]' },
    { type: 'output', text: '(C) Copyright Microsoft Corp 1981-1998.' },
    { type: 'output', text: 'ATUL-DOS Command Prompt initialized.' },
    { type: 'output', text: 'Type "help" or tap buttons below for commands.' },
    { type: 'output', text: ' ' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [matrixActive, setMatrixActive] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const quickCommands = ['help', 'about', 'skills', 'projects', 'contact', 'hire', 'matrix', 'cls'];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommandString = useCallback((cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    playClick();
    const lowerCmd = trimmed.toLowerCase();

    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, { type: 'input', text: `C:\\ATUL> ${trimmed}` }];

      switch (lowerCmd) {
        case 'help':
          newHistory.push(
            { type: 'output', text: 'AVAILABLE COMMANDS:' },
            { type: 'output', text: '  about      - Display developer summary and biography' },
            { type: 'output', text: '  skills     - List frontend, backend and dev tools' },
            { type: 'output', text: '  projects   - Show all fullstack projects & domains' },
            { type: 'output', text: '  education  - Display university transcripts & degrees' },
            { type: 'output', text: '  contact    - Show phone, email, LinkedIn, and GitHub' },
            { type: 'output', text: '  hire       - Initiate instant hiring protocol' },
            { type: 'output', text: '  matrix     - Toggle green Matrix digital phosphor rain' },
            { type: 'output', text: '  cls/clear  - Clear the command terminal screen' },
            { type: 'output', text: '  date       - Show current system date and timestamp' }
          );
          break;

        case 'about':
        case 'bio':
          newHistory.push(
            { type: 'output', text: `NAME: ${portfolioData.personal.name}` },
            { type: 'output', text: `TITLE: ${portfolioData.personal.title} (${portfolioData.personal.experienceYears})` },
            { type: 'output', text: `LOCATION: ${portfolioData.personal.location}` },
            { type: 'output', text: `SUMMARY: ${portfolioData.personal.summary}` }
          );
          break;

        case 'skills':
          newHistory.push(
            { type: 'output', text: 'FRONTEND: React, Redux Toolkit, GSAP, ScrollTrigger, Locomotive Scroll, TailwindCSS, Bootstrap, JavaScript (ES6+), HTML5, CSS3' },
            { type: 'output', text: 'BACKEND: Node.js, Express.js, MongoDB, WebRTC, WebSockets, Google OAuth, JWT, Passport.js, RESTful APIs' },
            { type: 'output', text: 'TOOLS: Jest (Testing), Postman (API Testing), Git & GitHub, Linux, Windows, VS Code' }
          );
          break;

        case 'projects':
          portfolioData.projects.forEach((p, idx) => {
            newHistory.push({
              type: 'output',
              text: `[${idx + 1}] ${p.title} (${p.type}): ${p.tagline} | Tech: ${p.techStack.join(', ')}`
            });
          });
          break;

        case 'education':
          portfolioData.education.forEach((edu) => {
            newHistory.push({
              type: 'output',
              text: `* ${edu.degree} - ${edu.institution} [${edu.score}]`
            });
          });
          break;

        case 'contact':
          newHistory.push(
            { type: 'output', text: `PHONE:    ${portfolioData.personal.phone}` },
            { type: 'output', text: `EMAIL:    ${portfolioData.personal.email}` },
            { type: 'output', text: `LINKEDIN: ${portfolioData.personal.linkedin}` },
            { type: 'output', text: `GITHUB:   ${portfolioData.personal.github}` },
            { type: 'output', text: `ADDRESS:  ${portfolioData.personal.location}` }
          );
          break;

        case 'hire':
          playSuccess();
          newHistory.push(
            { type: 'output', text: '>>> EXECUTING HIRE PROTOCOL <<<' },
            { type: 'output', text: `Dialing Atul Demond at ${portfolioData.personal.phone}...` },
            { type: 'output', text: `Status: READY FOR HIRE. Fullstack MERN Architect available.` }
          );
          break;

        case 'matrix':
          setMatrixActive((prev) => !prev);
          newHistory.push({
            type: 'output',
            text: 'Matrix state toggled.'
          });
          break;

        case 'cls':
        case 'clear':
          return [];

        case 'date':
          newHistory.push({
            type: 'output',
            text: `Current Date & Time: ${new Date().toString()}`
          });
          break;

        default:
          playError();
          newHistory.push({
            type: 'output',
            text: `Bad command or file name: "${trimmed}". Type "help" for a list of valid commands.`
          });
      }

      newHistory.push({ type: 'output', text: ' ' });
      return newHistory;
    });

    setInputVal('');
  }, []);

  const handleCommand = (e) => {
    e.preventDefault();
    executeCommandString(inputVal);
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={`h-[280px] sm:h-[380px] bg-black win95-sunken p-2.5 sm:p-3 font-mono-90s text-xs md:text-sm overflow-y-auto flex flex-col justify-between ${
        matrixActive ? 'text-[#00ff66]' : 'text-gray-200'
      }`}
    >
      <div className="space-y-1 overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            className={`${
              item.type === 'input'
                ? 'font-bold text-yellow-400'
                : matrixActive
                ? 'text-[#00ff66]'
                : 'text-gray-300'
            } leading-relaxed break-words text-[11px] sm:text-xs md:text-sm`}
          >
            {item.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="pt-2 border-t border-gray-800 mt-2 flex-shrink-0">
        {/* Mobile Quick Tap Command Chips */}
        <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap no-scrollbar pb-1.5 mb-1">
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                executeCommandString(cmd);
              }}
              className="bg-gray-800 hover:bg-gray-700 text-yellow-300 border border-gray-600 px-2 py-0.5 text-[10px] sm:text-[11px] font-mono-90s active:scale-95 flex-shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Input Line */}
        <form onSubmit={handleCommand} className="flex items-center gap-1 sm:gap-2">
          <span className="text-[#00ff66] font-bold text-xs sm:text-sm flex-shrink-0">C:\ATUL&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent text-yellow-300 focus:outline-none font-mono-90s text-base sm:text-xs md:text-sm min-w-0"
          />
          <button
            type="submit"
            className="text-gray-400 hover:text-white p-1 active:scale-95 flex-shrink-0"
            title="Run Command"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
