'use client';
import { ROUTES } from '@/routes';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="container px-4 py-8 text-center">
      <div className="max-w-auto mx-auto">
        <div className="mx-auto md:max-w-lg">
          <p className="text-[150px] md:text-[200px] font-semibold text-gray-300">404</p>
        </div>
        <h2 className="mt-8 text-xl font-black lg:text-5xl">
          Oops! Something went wrong
        </h2>
        <p className="my-2 text-sm text-secondary lg:text-base">
          Page dosen&apos;t exist
        </p>
        <Link href={ROUTES.HOME} className="mainLink mx-auto mt-4">
          Go to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
