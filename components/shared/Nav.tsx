'use client';
import { ROUTES } from '@/routes';
import cn from '@/utils/classNames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    id: 0,
    name: 'Home',
    href: ROUTES.HOME,
  },
  {
    id: 1,
    name: 'Favorite',
    href: ROUTES.FAVORITE,
  },
  {
    id: 2,
    name: 'Search',
    href: ROUTES.SEARCH,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center justify-between gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              aria-current={pathname === link.href ? 'page' : undefined}
              href={link.href}
              className={cn(
                'rounded-md px-4 py-2 font-medium transition',
                pathname === link.href
                  ? 'bg-secondary text-white hover:brightness-main'
                  : 'hover:text-secondary'
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
