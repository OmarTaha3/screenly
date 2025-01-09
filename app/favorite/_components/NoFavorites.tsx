import { ROUTES } from '@/routes';
import Link from 'next/link';

const NoFavorites = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <span className="text-4xl text-gray-400">❤️</span>
      <h2 className="mt-4 text-2xl font-semibold">No Favorites Yet</h2>
      <p className="mt-2 px-12 text-center text-gray-500">
        Explore movies and add your favorites to this list!
      </p>
      <Link href={ROUTES.HOME} className="mainLink mt-4">
        Start Exploring
      </Link>
    </section>
  );
};

export default NoFavorites;
