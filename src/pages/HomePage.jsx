import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { SkillsSection } from '../components/home/SkillsSection';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { ExperienceSection } from '../components/home/ExperienceSection';
import { ContactSection } from '../components/home/ContactSection';
import { setActiveSection } from '../features/ui/uiSlice';

export const HomePage = () => {
  const dispatch = useDispatch();

  // ScrollSpy to update Redux activeSection as sections scroll into viewport
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          dispatch(setActiveSection(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-80px 0px -40% 0px',
      threshold: [0.25, 0.5],
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [dispatch]);

  return (
    <div className="w-full space-y-0">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};
