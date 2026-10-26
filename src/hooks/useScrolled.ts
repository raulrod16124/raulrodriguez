import { useEffect, useState } from 'react';

export const useScrolled = (threshold = 8) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > threshold);
    };

    const handleScroll = () => {
      if (frame !== 0) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [threshold]);

  return isScrolled;
};
