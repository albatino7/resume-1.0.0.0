import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  href,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent/70 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary: 'bg-lime-accent text-black font-semibold hover:bg-lime-300 shadow-lime-glow hover:shadow-lime-glow-lg border border-lime-400',
    secondary: 'bg-neutral-800 text-neutral-100 hover:bg-neutral-700 border border-neutral-700 dark:bg-[#1a1f18] dark:border-[#2a3424] dark:hover:bg-[#232b1f]',
    outline: 'border border-neutral-700/60 dark:border-dark-border text-neutral-300 dark:text-neutral-200 hover:border-lime-accent/60 hover:text-lime-accent bg-transparent hover:bg-lime-accent/5',
    ghost: 'text-neutral-400 hover:text-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-800/40 bg-transparent',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
};
