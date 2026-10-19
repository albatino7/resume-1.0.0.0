import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import {
  Search,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  ChevronRight,
} from 'lucide-react';
import { Github } from '../components/ui/Icons';
import { projectsService } from '../services/projectsService';
import { projectCategories } from '../data/projectsData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProjectCardSkeleton } from '../components/ui/Skeleton';

export const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const loadMoreRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['projectsInfinite', selectedCategory, searchQuery],
    queryFn: ({ pageParam = 1 }) =>
      projectsService.getProjectsPaginated({
        pageParam,
        limit: 2,
        category: selectedCategory,
        search: searchQuery,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const observerTarget = loadMoreRef.current;
    if (!observerTarget) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(observerTarget);

    return () => {
      if (observerTarget) observer.unobserve(observerTarget);
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Flatten pages
  const allProjects = data ? data.pages.flatMap((page) => page.items) : [];
  const totalCount = data?.pages[0]?.totalItems || 0;

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link to="/" className="hover:text-lime-accent">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-lime-accent">Projects</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-neutral-100 tracking-tight">
          Project Catalog & Case Studies
        </h1>
        <p className="text-base text-neutral-400 leading-relaxed">
          Explore complete production codebases, architecture designs, and live deployments
          across the MERN stack, real-time WebSockets, and emerging AI tools.
        </p>
      </div>

      {/* Controls: Category Filter & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-lime-accent text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, title, tags..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-lime-accent/60"
          />
        </div>
      </div>

      {/* Active filters count */}
      <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
        <span>
          Showing <strong className="text-lime-accent">{allProjects.length}</strong> of{' '}
          <strong className="text-neutral-200">{totalCount}</strong> projects
        </span>
        {(selectedCategory !== 'all' || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="flex items-center gap-1 text-lime-400 hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            Clear filters
          </button>
        )}
      </div>

      {/* Initial Loading Skeletons */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-8 rounded-2xl border border-red-500/40 bg-red-950/20 text-center space-y-4">
          <p className="text-red-400 text-sm">
            {error?.message || 'Error fetching projects from the service layer.'}
          </p>
          <Button variant="secondary" size="sm" onClick={() => refetch()}>
            Retry Query
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && allProjects.length === 0 && (
        <div className="py-20 text-center space-y-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/20">
          <p className="text-neutral-300 font-display text-lg">No matching projects found</p>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            Try adjusting your search query or selecting a different category from above.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Projects Grid */}
      {!isLoading && allProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-neutral-800 dark:border-dark-border bg-neutral-900/40 dark:bg-dark-card overflow-hidden hover:border-lime-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lime-glow/20"
            >
              <div>
                {/* Image & Header */}
                <div className="relative h-60 overflow-hidden bg-neutral-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant="accent" size="sm">
                      {project.badge}
                    </Badge>
                    <span className="text-xs font-mono text-neutral-300 bg-neutral-900/80 px-2.5 py-1 rounded-full border border-neutral-700/60 backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>

                  {project.metrics && project.metrics[0] && (
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-300 bg-neutral-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800">
                      <span className="text-neutral-400">{project.metrics[0].label}:</span>
                      <span className="text-lime-accent font-semibold">{project.metrics[0].value}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <h2 className="font-display font-bold text-xl text-neutral-100 group-hover:text-lime-accent transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-950/70 text-neutral-300 border border-neutral-800/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
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
            </article>
          ))}
        </div>
      )}

      {/* Infinite Scroll Trigger and Skeletons */}
      <div ref={loadMoreRef} className="py-6 flex flex-col items-center justify-center">
        {isFetchingNextPage && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        )}

        {hasNextPage && !isFetchingNextPage && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchNextPage()}
            className="text-xs font-mono"
          >
            Load Next Projects
          </Button>
        )}

        {!hasNextPage && allProjects.length > 0 && (
          <div className="text-center py-8 border-t border-neutral-800/60 w-full">
            <p className="text-xs font-mono text-neutral-500">
              ✦ You've reached the end of the project catalog.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
