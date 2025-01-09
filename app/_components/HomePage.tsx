import { getAllMovies } from '@/queries/allMovies';
import React from 'react';
import Banner from './Banner';
import TopMovies from './TopMovies';
import { notFound } from 'next/navigation';

const HomePage = async () => {
  const { data } = await getAllMovies();

  if (!data) return notFound();

  return (
    <>
      <Banner movie={data.results[0]} />
      <TopMovies movies={data.results} />
    </>
  );
};

export default HomePage;
