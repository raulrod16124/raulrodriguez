import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'what-i-do', 'work', 'experience', 'about', 'contact'];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (SECTION_IDS.includes(id)) {
            setActiveSection(id);
          }
          return;
        }

        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let current = 'home';
        for (const el of elements) {
          if (el.offsetTop <= scrollPosition) {
            current = el.id;
          }
        }
        if (SECTION_IDS.includes(current)) {
          setActiveSection(current);
        }
      },
      {
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0.1, 0.25, 0.4, 0.6],
      }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return activeSection;
};
