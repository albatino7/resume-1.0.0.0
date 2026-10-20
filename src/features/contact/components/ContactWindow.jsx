import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  ExternalLink,
  MessageSquare,
  Radio
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../../../shared/components/ui/SocialIcons';
import { toast } from 'react-toastify';
import { triggerConfetti } from '../../../shared/utils/confetti';
import { portfolioData } from '../../../shared/constants/portfolioData';
import { playClick, playSuccess, playError } from '../../../shared/utils/soundEffects';

export default function ContactWindow() {
  const { personal } = portfolioData;

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [modemStatus, setModemStatus] = useState('Modem idle: Ready on COM1 (56.6 kbps)');

  const handleCopy = (text, label) => {
    playClick();
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label}!`, {
      icon: "💾"
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      playError();
      toast.error('Please fill in Name, Email, and Message!', {
        icon: "⚠️"
      });
      return;
    }

    playClick();
    setSending(true);
    setModemStatus('Dialing 56k connection... ATDT 555-1998');

    setTimeout(() => {
      setModemStatus('Negotiating baud rate... Handshake OK!');
    }, 800);

    setTimeout(() => {
      setModemStatus('Uploading packet via SMTP protocol...');
    }, 1600);

    setTimeout(() => {
      setSending(false);
      setModemStatus('Packet Delivered! Carrier disconnected (NO CARRIER).');
      playSuccess();
      triggerConfetti();
      toast.success(
        `Thank you ${form.name}! Message sent to Atul Demond.`,
        { icon: "✉️" }
      );
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 2400);
  };

  return (
    <div className="space-y-2.5 sm:space-y-3 text-xs md:text-sm">
      {/* Contact Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {/* Email Card */}
        <div className="win95-raised p-2 sm:p-2.5 bg-[#c0c0c0] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-blue-900 font-bold mb-1">
              <span className="flex items-center gap-1.5 truncate">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-800 flex-shrink-0" />
                <span className="text-xs">Electronic Mail</span>
              </span>
              <button
                onClick={() => handleCopy(personal.email, "Email Address")}
                className="win95-btn p-1 text-[10px] active:scale-95"
                title="Copy Email"
              >
                <Copy className="w-3 h-3" />
              </button>
            </div>
            <div className="win95-sunken p-1.5 bg-white text-gray-900 font-mono-90s text-xs truncate">
              {personal.email}
            </div>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="win95-btn mt-2 py-1.5 sm:py-1 text-center font-bold text-xs text-blue-900 hover:bg-gray-100 block active:scale-95"
          >
            Open Mail Client
          </a>
        </div>

        {/* Phone Card */}
        <div className="win95-raised p-2 sm:p-2.5 bg-[#c0c0c0] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-green-900 font-bold mb-1">
              <span className="flex items-center gap-1.5 truncate">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-700 flex-shrink-0" />
                <span className="text-xs">Telephone / Cell</span>
              </span>
              <button
                onClick={() => handleCopy(personal.phone, "Phone Number")}
                className="win95-btn p-1 text-[10px] active:scale-95"
                title="Copy Phone"
              >
                <Copy className="w-3 h-3" />
              </button>
            </div>
            <div className="win95-sunken p-1.5 bg-white text-gray-900 font-mono-90s text-xs">
              +91 {personal.phone}
            </div>
          </div>
          <a
            href={`tel:${personal.phone}`}
            className="win95-btn mt-2 py-1.5 sm:py-1 text-center font-bold text-xs text-green-900 hover:bg-gray-100 block active:scale-95"
          >
            Place Voice Call
          </a>
        </div>

        {/* Address Card */}
        <div className="win95-raised p-2 sm:p-2.5 bg-[#c0c0c0] flex flex-col justify-between sm:col-span-2 md:col-span-1">
          <div>
            <div className="flex items-center gap-1.5 text-red-900 font-bold mb-1">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 flex-shrink-0" />
              <span className="text-xs">Location / HQ</span>
            </div>
            <div className="win95-sunken p-1.5 bg-white text-gray-900 text-xs truncate">
              {personal.location}
            </div>
          </div>
          <div className="win95-sunken mt-2 p-1 text-[10px] text-gray-600 text-center bg-gray-100">
            Open for Remote & On-Site
          </div>
        </div>
      </div>

      {/* Online Profiles Row */}
      <div className="win95-raised p-2 sm:p-2.5 bg-[#d4d0c8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
        <span className="font-bold text-xs text-gray-800 flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-blue-700 animate-pulse flex-shrink-0" />
          <span>Live Digital Profiles:</span>
        </span>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="win95-btn px-2.5 py-1.5 sm:py-1 text-xs flex items-center justify-center gap-1.5 font-bold text-[#0077b5] active:scale-95"
          >
            <LinkedinIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span>LinkedIn</span>
            <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="win95-btn px-2.5 py-1.5 sm:py-1 text-xs flex items-center justify-center gap-1.5 font-bold text-black active:scale-95"
          >
            <GithubIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span>GitHub</span>
            <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
          </a>
        </div>
      </div>

      {/* 90s Web Message Dispatch Form */}
      <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
        <div className="flex items-center justify-between pb-1 mb-2 border-b border-[#808080]">
          <div className="flex items-center gap-1.5 font-bold text-blue-900 text-xs sm:text-sm">
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Transmit Message via 56k Gateway</span>
          </div>
          <span className="text-[10px] font-mono-90s text-gray-600 hidden sm:inline">Port 25</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-bold text-gray-800 mb-0.5">
                Your Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name / Recruiter"
                required
                className="w-full win95-sunken px-2 py-1.5 sm:py-1 bg-white text-base sm:text-xs text-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-800 mb-0.5">
                Your Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@domain.com"
                required
                className="w-full win95-sunken px-2 py-1.5 sm:py-1 bg-white text-base sm:text-xs text-black focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-800 mb-0.5">
              Subject
            </label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="Opportunity / Collaboration"
              className="w-full win95-sunken px-2 py-1.5 sm:py-1 bg-white text-base sm:text-xs text-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-800 mb-0.5">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              rows="3"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Hi Atul, I saw your portfolio and would like to talk about..."
              required
              className="w-full win95-sunken p-2 bg-white text-base sm:text-xs text-black focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Dial-up Modem Progress Bar */}
          <div className="win95-sunken p-1.5 bg-black text-[#00ff66] font-mono-90s text-[10px] sm:text-[11px] flex items-center justify-between">
            <span className="truncate">{modemStatus}</span>
            {sending && (
              <span className="animate-spin text-yellow-300 ml-2">◐</span>
            )}
          </div>

          {/* Submit button */}
          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={sending}
              className={`w-full sm:w-auto win95-btn px-4 py-2 sm:py-1.5 font-bold text-xs flex items-center justify-center gap-2 active:scale-95 ${
                sending
                  ? 'opacity-70 cursor-wait'
                  : 'text-blue-900 bg-[#dfdfdf] hover:bg-white'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>{sending ? 'Transmitting Data...' : 'Send Message Now'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
