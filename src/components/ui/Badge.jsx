import React from 'react';

export const Badge = ({
  children,
  variant = 'default', // 'default' | 'accent' | 'outline' | 'success'
  size = 'md',
  className = '',
  icon: Icon,
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-medium',
    lg: 'text-sm px-3.5 py-1.5 font-semibold',
  };

  const variantClasses = {
    default: 'bg-neutral-800/80 text-neutral-300 border border-neutral-700/60 dark:bg-[#1a2018] dark:text-[#c4cdc0] dark:border-[#273222]',
    accent: 'bg-lime-accent/15 text-lime-600 dark:text-lime-300 border border-lime-accent/30 font-semibold',
    outline: 'bg-transparent text-neutral-400 border border-neutral-700 dark:border-dark-border',
    success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full select-none ${sizeClasses[size] || sizeClasses.md} ${
        variantClasses[variant] || variantClasses.default
      } ${className}`}
    >
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      {children}
    </span>
  );
};
