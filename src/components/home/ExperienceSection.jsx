import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, CheckCircle } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import { Badge } from '../ui/Badge';

export const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.exp-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 md:py-28 border-t border-neutral-800/60 dark:border-dark-border/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-0.5 bg-lime-accent"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
              03 // Engineering Experience
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-100 tracking-tight">
            Proven track record of shipping production code.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            From hands-on full-stack MERN application engineering to managing commercial hosting
            migrations and infrastructure uptime.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {resumeData.experience.map((exp) => (
            <div
              key={exp.role + exp.period}
              className="exp-item p-8 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border hover:border-lime-accent/50 transition-all duration-300 relative group shadow-sm hover:shadow-lime-glow/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-800/70">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <Badge variant="accent" size="sm">
                      {exp.period}
                    </Badge>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-lime-400" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-neutral-100">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-lime-400 font-mono mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <p className="text-sm text-neutral-300 max-w-md italic">
                  "{exp.description}"
                </p>
              </div>

              {/* Accomplishment Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-lime-accent shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300 leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
