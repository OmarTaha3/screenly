'use client';

import cn from '@/utils/classNames';
import Nav from './Nav';
import useScrollDirection from '@/hooks/useScrollDirection';

const Footer = () => {
  const isScrollingDown = useScrollDirection();

  return (
    <footer
      className={cn(
        'fixed -bottom-full left-0 flex h-16 w-full items-center justify-center bg-black text-white transition-all duration-300 md:hidden',
        {
          'bottom-0': !isScrollingDown,
        }
      )}
    >
      <Nav />
    </footer>
  );
};

export default Footer;
