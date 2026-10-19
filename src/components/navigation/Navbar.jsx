import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import {
  toggleMobileMenu,
  selectIsMobileMenuOpen,
  selectActiveSection,
} from '../../features/ui/uiSlice';

const navItems = [
  { name: 'About', href: '/#about', sectionId: 'about' },
  { name: 'Skills', href: '/#skills', sectionId: 'skills' },
  { name: 'Projects', href: '/projects', sectionId: 'projects' },
  { name: 'Experience', href: '/#experience', sectionId: 'experience' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
];

export const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobileOpen = useSelector(selectIsMobileMenuOpen);
  const activeSection = useSelector(selectActiveSection);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-dark-bg/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-neutral-800/80 dark:border-dark-border/80 shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Mark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent/70 rounded-lg p-1"
          aria-label="Atul Demond Home"
        >
          <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-700/60 dark:border-dark-border flex items-center justify-center font-display font-bold text-lg text-neutral-100 group-hover:border-lime-accent/70 transition-all">
            A<span className="text-lime-accent font-black">D</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-neutral-100 dark:text-neutral-100 flex items-center gap-1.5">
              Atul Demond
              <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse"></span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 dark:text-neutral-400">
              MERN Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 dark:bg-dark-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-800/80 dark:border-dark-border">
          {navItems.map((item) => {
            const isActive =
              (location.pathname === item.href) ||
              (location.pathname === '/' && activeSection === item.sectionId);

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent/70 ${
                  isActive
                    ? 'text-black font-semibold'
                    : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-lime-accent rounded-full -z-10 transition-all duration-300 shadow-sm" />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/resume">
            <Button
              variant="outline"
              size="sm"
              icon={FileText}
              className="text-xs border-lime-accent/40 hover:border-lime-accent text-neutral-200"
            >
              Resume
            </Button>
          </Link>
          <a
            href="https://github.com/albatino7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile (opens in new tab)"
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/40 border border-transparent hover:border-neutral-800 transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileOpen}
            className="p-2.5 rounded-xl border border-neutral-700/60 dark:border-dark-border bg-neutral-900/60 dark:bg-dark-card text-neutral-200 hover:text-lime-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent/70"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
