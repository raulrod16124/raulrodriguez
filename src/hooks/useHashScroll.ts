import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const useHashScroll = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }
    const id = hash.replace('#', '');
    if (!id) {
      return;
    }

    let cancelled = false;

    const scrollToElement = () => {
      if (cancelled) {
        return;
      }
      const element = document.getElementById(id);
      if (!element) {
        return;
      }
      element.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      });
    };

    requestAnimationFrame(scrollToElement);

    return () => {
      cancelled = true;
    };
  }, [hash]);
};
