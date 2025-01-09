'use client';
import { useFavoriteMoviesStore } from '@/store/useFavoriteMovieStore';
import React from 'react';

const Hero = () => {
  const { favoriteMovies } = useFavoriteMoviesStore();
  return (
    <section className="relative bg-gradient-to-r from-background via-transparent to-transparent px-6 py-16 text-center text-white">
      <h1 className="text-3xl font-bold">Your Favorite Movies</h1>
      <p className="mt-2 text-lg text-gray-300">
        All your beloved films in one place
      </p>
    </section>
  );
};

export default Hero;
