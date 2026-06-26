import { useEffect, useState, useRef } from 'react';
import type { RefObject } from 'react';

export const useIntersectionObserver = (
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
): [RefObject<HTMLDivElement | HTMLElement | null>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Disconnect after it becomes visible once so it doesn't animate out and in repeatedly
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [elementRef, isVisible];
};
