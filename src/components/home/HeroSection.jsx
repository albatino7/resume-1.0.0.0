import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import {
  ArrowDown,
  FileText,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroTerminal } from './HeroTerminal';
import { resumeData } from '../../data/resumeData';

export const HeroSection = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const terminalRef = useRef(null);
  const badgesRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgesRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 35,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          subtextRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          terminalRef.current,
          {
            opacity: 0,
            y: 40,
            scale: 0.98,
            duration: 0.8,
          },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle radial glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status & Availability Badges */}
            <div ref={badgesRef} className="flex flex-wrap items-center gap-2.5">
              <Badge variant="accent" size="sm" icon={Sparkles}>
                MERN Stack Specialist
              </Badge>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/80 dark:bg-dark-card border border-neutral-800 dark:border-dark-border text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
                <span className="w-2 h-2 rounded-full bg-lime-accent -ml-4" />
                <span>{resumeData.personal.availability}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div ref={headlineRef} className="space-y-2">
              <p className="text-xs uppercase font-mono tracking-widest text-lime-400 font-semibold">
                Hi, I'm {resumeData.personal.name}
              </p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-100 leading-[1.08]">
                Building <span className="text-lime-accent underline decoration-lime-accent/40 decoration-wavy underline-offset-8">thoughtful digital</span> experiences with modern web technology.
              </h1>
            </div>

            {/* Concise, factual professional bio */}
            <p ref={subtextRef} className="text-base sm:text-lg text-neutral-300 dark:text-neutral-300 max-w-2xl leading-relaxed">
              Full-Stack MERN Developer with over 2 years of hands-on experience designing and
              deploying resilient web applications. Specializing in high-performance React architectures,
              Redux Toolkit state management, Express RESTful APIs, MongoDB, and fluid GSAP micro-interactions.
            </p>

            {/* CTAs & Social Connections */}
            <div ref={ctaRef} className="w-full space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, 'projects')}
                >
                  <Button variant="primary" size="lg" icon={ArrowDown} iconPosition="right">
                    View Projects
                  </Button>
                </a>
                <Link to="/resume">
                  <Button
                    variant="outline"
                    size="lg"
                    icon={FileText}
                    className="border-neutral-700 hover:border-lime-accent/70 hover:text-lime-accent"
                  >
                    View Resume
                  </Button>
                </Link>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  <Button variant="ghost" size="lg">
                    Get in Touch
                  </Button>
                </a>
              </div>

              {/* Social icons & location */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-neutral-400 font-mono">
                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-lime-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/albatino7</span>
                </a>
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-lime-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/atuldemond</span>
                </a>
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <MapPin className="w-4 h-4 text-lime-accent" />
                  <span>Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal / Interactive Architecture Preview */}
          <div ref={terminalRef} className="lg:col-span-5 w-full">
            <HeroTerminal />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-2 text-neutral-500 hover:text-lime-accent transition-colors group"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-lime-accent">
              Explore
            </span>
            <div className="w-5 h-8 rounded-full border border-neutral-700 group-hover:border-lime-accent flex items-start justify-center p-1 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
