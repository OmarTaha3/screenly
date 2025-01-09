import MovieCard from '@/components/shared/MovieCard';
import { GeneralMovie } from '@/types/GeneralMovie';

interface TopMoviesProps {
  movies: GeneralMovie[];
}
const TopMovies = ({ movies }: TopMoviesProps) => {
  return (
    <section className="container my-20">
      <h2 className="headerBorder relative text-center uppercase md:text-left">
        top rated movies
      </h2>
      <div className="movieCards-container mt-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TopMovies;
