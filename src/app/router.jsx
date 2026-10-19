import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

// Lazy loaded page components
const ProjectsPage = lazy(() =>
  import('../pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage }))
);
const ProjectDetailsPage = lazy(() =>
  import('../pages/ProjectDetailsPage').then((module) => ({ default: module.ProjectDetailsPage }))
);
const ResumePage = lazy(() =>
  import('../pages/ResumePage').then((module) => ({ default: module.ResumePage }))
);

const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-neutral-800 border-t-lime-accent animate-spin" />
      <span className="absolute font-mono text-[10px] font-bold text-lime-accent">AD</span>
    </div>
    <span className="text-xs font-mono text-neutral-400 animate-pulse">Loading module...</span>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: 'projects/:projectId',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetailsPage />
          </Suspense>
        ),
      },
      {
        path: 'resume',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ResumePage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
