'use client';
import { useFavoriteMoviesStore } from '@/store/useFavoriteMovieStore';
import NoFavorites from './NoFavorites';
import FavMovies from './FavMovies';
import MovieCardSekelton from '@/components/sekelton/MovieCardSekelton';

const FavHub = () => {
  const hasHydrated = useFavoriteMoviesStore((state) => state._hasHydrated);
  const movies = useFavoriteMoviesStore((state) => state.favoriteMovies);

  if (!hasHydrated)
    return (
      <div className="movieCards-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <MovieCardSekelton key={index} />
        ))}
      </div>
    );

  return <>{movies.length === 0 ? <NoFavorites /> : <FavMovies />}</>;
};

export default FavHub;
