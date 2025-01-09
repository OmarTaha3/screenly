import MovieCard from '@/components/shared/MovieCard';
import { generalMovie } from '@/types/generalMovie';

interface TopMoviesProps {
  movies: generalMovie[];
}
const TopMovies = ({ movies }: TopMoviesProps) => {
  return (
    <section className="container my-20">
      <h2 className="headerBorder relative text-center uppercase md:text-left">
        top rated movies
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TopMovies;
