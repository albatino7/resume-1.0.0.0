import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  Cpu,
} from 'lucide-react';
import { Github } from '../components/ui/Icons';
import { projectsService } from '../services/projectsService';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Skeleton } from '../components/ui/Skeleton';

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const {
    data: project,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => projectsService.getProjectById(projectId),
  });

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-8 animate-pulse">
        <Skeleton className="w-32 h-6 rounded-md" />
        <Skeleton className="w-3/4 h-12 rounded-xl" />
        <Skeleton className="w-full h-80 rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-40 rounded-xl" />
          <Skeleton className="h-40 rounded-xl" />
          <Skeleton className="h-40 rounded-xl" />
        </div>
      </div>
    );
  }

  // Not Found State
  if (isError || !project) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-lime-accent">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="font-display font-bold text-3xl text-neutral-100">
            Project Not Found
          </h1>
          <p className="text-sm text-neutral-400">
            {error?.message || `We couldn't locate a project with ID "${projectId}".`}
          </p>
        </div>
        <div className="pt-4 flex justify-center gap-4">
          <Link to="/projects">
            <Button variant="primary" size="md" icon={ArrowLeft}>
              Back to Projects
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="md">
              Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
        <Link to="/" className="hover:text-lime-accent">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/projects" className="hover:text-lime-accent">Projects</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-lime-accent truncate max-w-xs">{project.title}</span>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="accent" size="sm">{project.categoryLabel}</Badge>
          <Badge variant="outline" size="sm">{project.year}</Badge>
          <Badge variant="success" size="sm">Verified Architecture</Badge>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-5xl text-neutral-100 tracking-tight leading-[1.15]">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
          {project.overview}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="md" icon={Github}>
              Inspect GitHub Source
            </Button>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="md" icon={ExternalLink} iconPosition="right">
                View Deployment
              </Button>
            </a>
          )}
          <Link to="/projects">
            <Button variant="ghost" size="md" icon={ArrowLeft}>
              Back to Catalog
            </Button>
          </Link>
        </div>
      </div>

      {/* Project Cover / Showcase Image */}
      <div className="rounded-2xl overflow-hidden border border-neutral-800 dark:border-dark-border shadow-2xl relative">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-80 sm:h-96 md:h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Metrics Row */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-1"
            >
              <span className="text-xs font-mono uppercase text-neutral-400 block">
                {metric.label}
              </span>
              <span className="font-display font-bold text-xl text-lime-accent">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Problem & Solution Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-3">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase font-semibold">
            <AlertTriangle className="w-4 h-4" />
            The Architectural Problem
          </div>
          <h2 className="font-display font-bold text-xl text-neutral-100">
            Pain Points & Bottlenecks
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-3">
          <div className="flex items-center gap-2 text-lime-400 text-xs font-mono uppercase font-semibold">
            <CheckCircle className="w-4 h-4" />
            The Engineered Solution
          </div>
          <h2 className="font-display font-bold text-xl text-neutral-100">
            Technical Resolution
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Architecture Blueprint Visualization */}
      {project.architecture && (
        <div className="p-8 rounded-2xl bg-neutral-900/50 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-lime-accent/10 text-lime-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-xl text-neutral-100">
                System Architecture & Stack
              </h2>
            </div>
            <Badge variant="outline" size="sm">Decoupled MERN</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(project.architecture).map(([layer, desc]) => (
              <div
                key={layer}
                className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-1"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-lime-400 font-semibold block">
                  {layer}
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {Array.isArray(desc) ? desc.join(', ') : desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Features List */}
      <div className="p-8 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-6">
        <h2 className="font-display font-bold text-xl text-neutral-100">
          Core Capabilities & Deliverables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-lime-accent shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges & Lessons Learned */}
      {project.challenges && project.challenges.length > 0 && (
        <div className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 space-y-4">
          <h2 className="font-display font-bold text-lg text-neutral-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-lime-accent" />
            Engineering Challenges Overcome
          </h2>
          <ul className="space-y-2.5">
            {project.challenges.map((chal, cIdx) => (
              <li key={cIdx} className="text-xs sm:text-sm text-neutral-400 flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0 mt-2" />
                <span>{chal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack Tags */}
      <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
        <span className="text-xs font-mono uppercase text-neutral-400 block">
          Full Technology Breakdown
        </span>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-950 text-neutral-200 border border-neutral-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-8 border-t border-neutral-800/80 flex items-center justify-between">
        <Link to="/projects">
          <Button variant="outline" size="md" icon={ArrowLeft}>
            Back to Projects
          </Button>
        </Link>
        <a href="#contact" onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}>
          <Button variant="primary" size="md">
            Discuss Similar Project
          </Button>
        </a>
      </div>
    </article>
  );
};
