'use client';
import MovieCard from '@/components/shared/MovieCard';
import { GeneralMovie } from '@/types/GeneralMovie';

interface SearchResultProps {
  movies: GeneralMovie[];
}

const SearchResults = ({ movies }: SearchResultProps) => {
  return (
    <section className="container mb-20">
      <h2 className="headerBorder relative text-center uppercase md:text-left">
        Searched Result
      </h2>

      {movies.length === 0 ? (
        <p className="mt-5 text-center text-lg text-secondary">
          No movies found.
        </p>
      ) : (
        <div className="movieCards-container mt-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchResults;
