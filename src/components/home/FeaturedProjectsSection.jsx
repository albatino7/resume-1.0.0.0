import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import gsap from 'gsap';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Github } from '../ui/Icons';
import { projectsService } from '../../services/projectsService';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProjectCardSkeleton } from '../ui/Skeleton';

export const FeaturedProjectsSection = () => {
  const sectionRef = useRef(null);

  const { data: projects, isLoading, isError } = useQuery({
    queryKey: ['featuredProjects'],
    queryFn: () => projectsService.getFeaturedProjects(),
  });

  useEffect(() => {
    if (!projects || projects.length === 0) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.featured-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.18,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-28 border-t border-neutral-800/60 dark:border-dark-border/60 bg-grid-pattern relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-lime-accent"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
                04 // Flagship Projects
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-100 tracking-tight">
              Selected full-stack case studies.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Real-world implementations focusing on scalable backend logic, optimistic client state,
              and purposeful user interactions.
            </p>
          </div>

          <Link to="/projects">
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="border-neutral-700 hover:border-lime-accent hover:text-lime-accent"
            >
              Browse All Projects
            </Button>
          </Link>
        </div>

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        )}

        {/* Error Fallback */}
        {isError && (
          <div className="p-8 rounded-2xl border border-red-500/30 bg-red-950/20 text-center space-y-3">
            <p className="text-red-400 text-sm">
              Failed to load projects from service layer.
            </p>
            <Button variant="secondary" size="sm" onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        )}

        {/* Project Cards Grid */}
        {projects && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="featured-card rounded-2xl border border-neutral-800 dark:border-dark-border bg-neutral-900/40 dark:bg-dark-card overflow-hidden hover:border-lime-accent/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lime-glow/20"
              >
                <div>
                  {/* Card Visual / Thumbnail */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-950">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                    {/* Top badging */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <Badge variant="accent" size="sm">
                        {project.badge}
                      </Badge>
                      <span className="text-xs font-mono text-neutral-300 bg-neutral-900/80 px-2.5 py-1 rounded-full border border-neutral-700/60 backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>

                    {/* Quick Metrics preview banner */}
                    {project.metrics && project.metrics[0] && (
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-300 bg-neutral-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800">
                        <span className="text-neutral-400">{project.metrics[0].label}:</span>
                        <span className="text-lime-accent font-semibold">{project.metrics[0].value}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-xl text-neutral-100 group-hover:text-lime-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-950/70 text-neutral-300 border border-neutral-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="text-[11px] font-mono px-2 py-1 rounded-md text-neutral-500">
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 border-t border-neutral-800/60 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg text-neutral-400 hover:text-lime-accent hover:bg-neutral-800/60 border border-transparent hover:border-neutral-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo Link"
                        className="p-2 rounded-lg text-neutral-400 hover:text-lime-accent hover:bg-neutral-800/60 border border-transparent hover:border-neutral-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <Link to={`/projects/${project.id}`}>
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="text-xs font-semibold group-hover:border-lime-accent/50"
                    >
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
