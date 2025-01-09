'use client';
import { useCallback, useEffect, useState } from 'react';

/**
 * Custom hook to detect if the page has been scrolled beyond a specified height.
 *
 * @param HEIGHT - The threshold value (in pixels) that determines when the scroll state should change.
 *
 * @returns scrolled - A boolean value indicating whether the page has been scrolled past the provided HEIGHT.
 *
 * Usage example:
 * const hasScrolled = useScroll(100); // Will return true if the user has scrolled past 100px
 */
function useScroll(HEIGHT: number): boolean {
  const [scrolled, setScrolled] = useState(false);

  /**
   * Scroll event handler that sets the 'scrolled' state based on the scroll position.
   *
   * It compares the current scroll position (window.scrollY) with the HEIGHT parameter.
   * If the scroll position is greater than or equal to HEIGHT, it sets 'scrolled' to true.
   * Otherwise, it sets it to false.
   */
  const scrollMonitor = useCallback(() => {
    setScrolled(window.scrollY >= HEIGHT);
  }, [HEIGHT]);

  useEffect(() => {
    window.addEventListener('scroll', scrollMonitor);
    return () => {
      window.removeEventListener('scroll', scrollMonitor);
    };
  }, [scrollMonitor]);

  return scrolled;
}

export default useScroll;
