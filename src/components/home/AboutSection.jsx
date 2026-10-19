import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  GraduationCap,
  Code,
  Globe,
  Heart,
} from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import { Badge } from '../ui/Badge';

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-28 border-t border-neutral-800/60 dark:border-dark-border/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 about-reveal">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-0.5 bg-lime-accent"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
              01 // Background & Philosophy
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-100 tracking-tight">
            Engineering with rigor, designing with empathy.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            I am a full-stack engineer driven by building robust backend architectures and
            pairing them with seamless, fluid frontend user experiences that leave a lasting impression.
          </p>
        </div>

        {/* 2-Column Grid: Narrative & Philosophy on Left, Education & Experience on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Developer Story & Core Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-2xl bg-neutral-900/50 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-6 about-reveal">
              <h3 className="text-xl font-display font-bold text-neutral-100 flex items-center gap-2.5">
                <Code className="w-5 h-5 text-lime-accent" />
                Engineering Philosophy
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Modern web applications should never force a trade-off between performance and delight.
                I focus on clean decoupled architectures: resilient RESTful APIs in Node.js/Express,
                predictable client state via Redux Toolkit and TanStack Query, and micro-interactions
                orchestrated with GSAP that feel natural, not overwhelming.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                  <span className="text-xs font-mono text-lime-400 font-semibold block mb-1">
                    State Integrity
                  </span>
                  <span className="text-xs text-neutral-400">
                    Predictable single sources of truth using Redux Toolkit and server-cache hydration.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                  <span className="text-xs font-mono text-lime-400 font-semibold block mb-1">
                    Fluid Animations
                  </span>
                  <span className="text-xs text-neutral-400">
                    60fps scroll triggers and purposeful transitions that respect user motion preferences.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                  <span className="text-xs font-mono text-lime-400 font-semibold block mb-1">
                    Secure APIs
                  </span>
                  <span className="text-xs text-neutral-400">
                    JWT access/refresh token rotation, Passport.js, OAuth2, and MongoDB indexing.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                  <span className="text-xs font-mono text-lime-400 font-semibold block mb-1">
                    Continuous Learning
                  </span>
                  <span className="text-xs text-neutral-400">
                    Exploring Generative AI, RAG embeddings, and full-stack AI agents for developer tools.
                  </span>
                </div>
              </div>
            </div>

            {/* Freelance Track Record & Domains Worked For */}
            <div className="p-8 rounded-2xl bg-neutral-900/50 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-5 about-reveal">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-display font-bold text-neutral-100 flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-lime-accent" />
                  Production Domains & Infrastructure
                </h3>
                <Badge variant="accent" size="sm">2018 – 2023</Badge>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Extensive track record configuring production servers, executing zero-downtime migrations,
                and optimizing Core Web Vitals for high-traffic commercial platforms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resumeData.freelanceDomains.map((dom) => (
                  <div
                    key={dom.name}
                    className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800 flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono font-semibold text-neutral-200">
                      {dom.name}
                    </span>
                    <span className="text-[11px] text-neutral-400 mt-1">
                      {dom.category} • <span className="text-lime-400">{dom.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Mindfulness */}
            <div className="p-6 rounded-2xl bg-neutral-900/30 dark:bg-dark-card/50 border border-neutral-800/60 flex items-start gap-4 about-reveal">
              <div className="p-3 rounded-xl bg-lime-accent/10 border border-lime-accent/20 text-lime-400 shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-100">Mindfulness & Meditation</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Regular meditation practice keeps my mental focus sharp, calm, and resilient when
                  tackling deep architectural challenges and debugging complex asynchronous race conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Academic Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-neutral-900/50 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-6 about-reveal">
              <h3 className="text-xl font-display font-bold text-neutral-100 flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-lime-accent" />
                Education & Credentials
              </h3>
              <p className="text-sm text-neutral-400">
                Verified academic milestones highlighting strong analytical grounding in Computer Applications and Science.
              </p>

              {/* Timeline cards */}
              <div className="space-y-4 pt-2">
                {resumeData.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="relative pl-6 pb-6 border-l border-neutral-800 last:pb-0 last:border-transparent group"
                  >
                    {/* Node indicator */}
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-lime-accent group-hover:scale-125 transition-transform" />

                    <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 group-hover:border-neutral-700 transition-colors space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-semibold text-lime-400">
                          {edu.period}
                        </span>
                        <Badge variant="outline" size="sm">
                          {edu.status}
                        </Badge>
                      </div>
                      <h4 className="text-sm font-bold text-neutral-100">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-neutral-300">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-neutral-400 pt-1">
                        {edu.highlights}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
