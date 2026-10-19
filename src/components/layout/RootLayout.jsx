import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../navigation/Navbar';
import { MobileDrawer } from '../navigation/MobileDrawer';
import { Footer } from '../navigation/Footer';

gsap.registerPlugin(ScrollTrigger);

export const RootLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Lenis + GSAP ScrollTrigger lifecycle integration
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let lenis;
    let tickerCallback;

    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      // Synchronize Lenis scroll event with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      tickerCallback = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      console.warn('Lenis initialization notice:', e);
    }

    return () => {
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
      }
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-dark-text transition-colors duration-300 relative selection:bg-lime-accent selection:text-black">
      <Navbar />
      <MobileDrawer />
      <main className="flex-1 w-full pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
