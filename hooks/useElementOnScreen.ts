import { useEffect, useRef } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  enabled: boolean;
  onScreen: () => void;
}

export const useElementOnScreen = ({
  threshold = 0.1,
  root = null,
  rootMargin = '50%',
  enabled = false,
  onScreen = () => null,
}: Args) => {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = targetRef?.current;
    if (!enabled || !node) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onScreen();
          }
        }),
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [targetRef?.current, enabled]);

  return targetRef;
};
