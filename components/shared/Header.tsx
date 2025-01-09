'use client';
import { ROUTES } from '@/routes';
import Link from 'next/link';
import Nav from './Nav';
import useScroll from '@/hooks/useScroll';
import cn from '@/utils/classNames';

const Header = () => {
  const HEADER_HEIGHT = 64;
  const scrolled = useScroll(HEADER_HEIGHT);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-[padding]',
        scrolled ? 'px-6 pt-4' : 'px-0 pt-0'
      )}
    >
      <div
        style={{
          height: `${HEADER_HEIGHT}px`,
        }}
        className={cn(
          'flex items-center justify-center rounded-xl border bg-transparent px-6 transition md:justify-between',
          scrolled
            ? 'border-primary bg-background'
            : 'border-transparent bg-transparent'
        )}
      >
        {/* The logo text, with "Screen" and "Ly" styled differently for emphasis. */}
        <Link
          aria-label="Home"
          href={ROUTES.HOME}
          className="text-3xl font-bold"
        >
          Screen<span className="text-primary">Ly</span>
        </Link>

        {/* Renders the navigation menu component. */}
        <div className="hidden md:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
