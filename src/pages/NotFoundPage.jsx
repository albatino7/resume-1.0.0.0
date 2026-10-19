import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 max-w-xl mx-auto space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lime-accent">
        <Terminal className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-lime-400 uppercase tracking-widest font-semibold">
          Error 404 // Route Undefined
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-neutral-100">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed">
          The path you requested does not exist on this server or has been relocated.
        </p>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Link to="/">
          <Button variant="primary" size="md" icon={Home}>
            Back to Home
          </Button>
        </Link>
        <Link to="/projects">
          <Button variant="outline" size="md">
            View Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};
