'use client';
import { useFavoriteMoviesStore } from '@/store/useFavoriteMovieStore';
import NoFavorites from './NoFavorites';

const FavMovies = () => {
  const hasHydrated = useFavoriteMoviesStore((state) => state._hasHydrated);
  const movies = useFavoriteMoviesStore((state) => state.favoriteMovies);

/*   if (!hasHydrated) return <div>Loading...</div>;
 */
  return <>{movies.length === 0 ? <NoFavorites /> : <FavMovies />}</>;
};

export default FavMovies;
