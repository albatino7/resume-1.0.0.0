import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { resumeData } from '../../data/resumeData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 dark:border-dark-border/80 bg-neutral-950/60 dark:bg-[#0c0e0b]/90 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-800/80 dark:border-dark-border/80">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center font-display font-bold text-neutral-100">
                A<span className="text-lime-accent">D</span>
              </div>
              <span className="font-display font-bold text-base text-neutral-100">
                Atul Demond
              </span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Full-Stack MERN Developer specializing in high-performance web applications,
              scalable REST APIs, interactive animations, and modern React architectures.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${resumeData.personal.phoneDisplay}`}
                aria-label="Call Mobile"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="/#about" className="hover:text-lime-accent transition-colors">
                  About Atul
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-lime-accent transition-colors">
                  Skills & Stack
                </a>
              </li>
              <li>
                <Link to="/projects" className="hover:text-lime-accent transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <a href="/#experience" className="hover:text-lime-accent transition-colors">
                  Experience & Timeline
                </a>
              </li>
              <li>
                <Link to="/resume" className="hover:text-lime-accent transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Contact & Location
            </h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent"></span>
                <span>Delhi, India</span>
              </p>
              <p>
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="hover:text-lime-accent transition-colors font-mono text-xs"
                >
                  {resumeData.personal.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${resumeData.personal.phoneDisplay}`}
                  className="hover:text-lime-accent transition-colors font-mono text-xs"
                >
                  +91 {resumeData.personal.phoneDisplay}
                </a>
              </p>
              <p className="text-xs text-neutral-400 pt-2">
                Status:{' '}
                <span className="text-lime-accent">
                  {resumeData.personal.availability}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {CURRENT_YEAR} Atul Demond. Built with React, Redux Toolkit,
            GSAP & Tailwind CSS.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-lime-accent/50 text-neutral-400 hover:text-lime-accent transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
