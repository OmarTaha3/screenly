'use client';
import ToggleFavButton from '@/components/shared/ToggleFavButton';
import WatchNowLink from '@/components/shared/WatchNowLink';
import { MovieDetails } from '@/types/MovieDetails';

import MoviePoster from './MoviePoster';
import MovieStatistics from './MovieStatistics';
import Cast from './Cast';
import Director from './Director';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getCast } from '@/queries/allQueries';
import { QUERY_KEYS } from '@/queries/allKeys';

interface MovieInfoProps {
  movie: MovieDetails;
}
const MovieInfo = ({ movie }: MovieInfoProps) => {
  const { id }: { id: string } = useParams();
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: [QUERY_KEYS.CAST, id],
    queryFn: () => getCast(id),
    staleTime: 60 * 60 * 1000,
  });

  return (
    <section className="container relative z-10 mb-10">
      <div className="-mt-40 md:-mt-60 xl:-mt-80 xl:px-16">
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-stretch">
          {/* Render the movie poster */}
          <MoviePoster
            poster={movie?.poster_path}
            title={movie.original_title}
          />
          <div className="space-y-10 lg:w-3/5">
            {/* Render the movie title */}
            <h1 title={movie.title}>{movie.title}</h1>
            {/* Render movie statistics like ratings, duration, etc. */}
            <MovieStatistics movie={movie} />
            {/* Render the movie overview */}
            <p title={movie.overview}>{movie.overview}</p>
            <div className="flex items-center gap-8 max-md:justify-center">
              {/* Render the favorite button */}
              <div className="h-9 w-9">
                <ToggleFavButton movie={movie} />
              </div>
              {/* Render the "Watch Now" link */}
              <WatchNowLink id={movie.id} />
            </div>
            {/* Render the director details */}
            <Director
              crew={data?.crew}
              isPending={isPending}
              isSuccess={isSuccess}
              isError={isError}
            />
          </div>
        </div>
        {/* Render the cast details */}
        <Cast
          cast={data?.cast}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
        />
      </div>
    </section>
  );
};

export default MovieInfo;
