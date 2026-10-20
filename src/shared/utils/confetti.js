// Dynamic lazy-loaded celebration confetti to reduce initial bundle size
let confettiInstance = null;

export const triggerConfetti = async (options = {}) => {
  try {
    if (!confettiInstance) {
      const module = await import('canvas-confetti');
      confettiInstance = module.default || module;
    }
    if (typeof confettiInstance === 'function') {
      confettiInstance({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        ...options
      });
    }
  } catch {
    // Graceful fallback if confetti fails to load
  }
};
