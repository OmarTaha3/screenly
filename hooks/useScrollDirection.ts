'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to detect the scroll direction (up or down) of the page.
 *
 * This hook tracks the scroll position and returns a boolean value indicating
 * whether the user is scrolling down or not.
 *
 * @returns isScrollingDown - A boolean value indicating whether the user is scrolling down (true) or up (false).
 *
 * Usage example:
 * const isScrollingDown = useScrollDirection(); // Will return true if scrolling down, false if scrolling up
 */
function useScrollDirection(): boolean {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    /**
     * Handle scroll event and determine the scroll direction.
     *
     * If the current scroll position is greater than the previous one,
     * it means the user is scrolling down. Otherwise, the user is scrolling up.
     */
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false); 
      }
      lastScrollY = window.scrollY; 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return isScrollingDown; 
}

export default useScrollDirection;
