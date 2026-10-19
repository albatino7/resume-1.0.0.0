import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { toggleTheme, selectThemeMode } from '../../features/theme/themeSlice';

export const ThemeToggle = ({ className = '' }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeMode);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-xl border border-neutral-700/60 dark:border-dark-border bg-neutral-800/40 dark:bg-dark-card hover:border-lime-accent/50 text-neutral-300 dark:text-neutral-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent/70 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-4 h-4 text-lime-accent" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4 h-4 text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
