import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Mail, Phone, FileText } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import {
  closeMobileMenu,
  selectIsMobileMenuOpen,
  selectActiveSection,
} from '../../features/ui/uiSlice';
import { Button } from '../ui/Button';

const navItems = [
  { name: 'About', href: '/#about', sectionId: 'about' },
  { name: 'Skills', href: '/#skills', sectionId: 'skills' },
  { name: 'Projects', href: '/projects', sectionId: 'projects' },
  { name: 'Experience', href: '/#experience', sectionId: 'experience' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
  { name: 'Resume', href: '/resume', sectionId: 'resume' },
];

export const MobileDrawer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isOpen = useSelector(selectIsMobileMenuOpen);
  const activeSection = useSelector(selectActiveSection);
  const drawerRef = useRef(null);

  // Close on route path change
  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [location.pathname, dispatch]);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        dispatch(closeMobileMenu());
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, dispatch]);

  const handleLinkClick = (e, item) => {
    dispatch(closeMobileMenu());
    if (item.href.startsWith('/#')) {
      e.preventDefault();
      const targetId = item.sectionId;
      if (location.pathname !== '/') {
        navigate(`/#${targetId}`);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => dispatch(closeMobileMenu())}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="relative w-4/5 max-w-sm h-full bg-dark-bg dark:bg-[#11140f] border-l border-neutral-800 dark:border-dark-border p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800 dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center font-display font-bold text-neutral-100">
                    A<span className="text-lime-accent">D</span>
                  </div>
                  <span className="font-display font-bold text-sm text-neutral-100">
                    Atul Demond
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => dispatch(closeMobileMenu())}
                  aria-label="Close navigation menu"
                  className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive =
                    location.pathname === item.href ||
                    (location.pathname === '/' && activeSection === item.sectionId);

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-lime-accent text-black font-semibold'
                          : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-black' : 'text-neutral-500'}`} />
                    </a>
                  );
                })}
              </nav>

              {/* Resume Quick Action */}
              <div className="mt-6 pt-6 border-t border-neutral-800/80 dark:border-dark-border/80">
                <Link to="/resume" onClick={() => dispatch(closeMobileMenu())}>
                  <Button
                    variant="outline"
                    size="md"
                    icon={FileText}
                    className="w-full justify-center border-lime-accent/50 text-lime-300"
                  >
                    View & Download Resume
                  </Button>
                </Link>
              </div>
            </div>

            {/* Footer with direct contact icons */}
            <div className="pt-6 border-t border-neutral-800 dark:border-dark-border">
              <p className="text-xs text-neutral-400 font-mono mb-3">Direct Contact</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/albatino7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/atuldemond/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:atuldemond@gmail.com"
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:8651029001"
                  aria-label="Call Mobile"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
