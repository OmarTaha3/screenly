import MovieCard from '@/components/shared/MovieCard';
import { useFavoriteMoviesStore } from '@/store/useFavoriteMovieStore';
import React from 'react';

const FavMovies = () => {
  const movies = useFavoriteMoviesStore((state) => state.favoriteMovies);

  return (
    <section className="movieCards-container my-10">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default FavMovies;
