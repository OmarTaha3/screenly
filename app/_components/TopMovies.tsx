'use client';
import MovieCard from '@/components/shared/MovieCard';
import { GeneralMovie } from '@/types/GeneralMovie';

interface TopMoviesProps {
  movies: GeneralMovie[];
}
const TopMovies = ({ movies }: TopMoviesProps) => {
  /*   const {} =  useInfiniteQuery(
    ['allMovies'],
    ({ pageParam = 1 }) => fetchTimelinePosts(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const nextPageUrl = lastPage.post.next_page_url;
        if (nextPageUrl) {
          const nextPage = new URL(nextPageUrl).searchParams.get('page');
          return nextPage ? Number(nextPage) : undefined;
        }
        return undefined;
      },
    }
  ); */

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
