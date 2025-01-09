import MovieCard from '@/components/shared/MovieCard';
import { useFavoriteMoviesStore } from '@/store/useFavoriteMovieStore';
import React from 'react';

const Fav = () => {
  const movies = useFavoriteMoviesStore((state) => state.favoriteMovies);

  return (
    <section className="mt-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default Fav;
