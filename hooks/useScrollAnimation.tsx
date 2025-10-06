import { useState, useEffect, useRef, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = { threshold: 0.1, triggerOnce: true }): [RefObject<any>, boolean] => {
  const ref = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(node);
        }
      } else {
        if (!options.triggerOnce) {
          setIsInView(false);
        }
      }
    }, {
        threshold: options.threshold,
    });

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options.triggerOnce, options.threshold]);

  return [ref, isInView];
};
