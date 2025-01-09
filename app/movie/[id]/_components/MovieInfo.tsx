import ToggleFavButton from '@/components/shared/ToggleFavButton';
import WatchNowLink from '@/components/shared/WatchNowLink';
import CircularProgressBar from '@/components/ui/CircularProgressBar';
import Tag from '@/components/ui/Tag';
import { genreLookup } from '@/constants/geners';
import { MovieDetails } from '@/types/MovieDetails';
import React from 'react';
import MoviePoster from './MoviePoster';
import MovieStatistics from './MovieStatistics';
import Cast from './Cast';
import Director from './Director';

interface MovieInfoProps {
  movie: MovieDetails;
}
const MovieInfo = ({ movie }: MovieInfoProps) => {
  return (
    <section className="container relative z-10 mb-10">
      <div className="-mt-40 px-16 md:-mt-60 xl:-mt-80">
        <div className="flex w-full flex-row items-stretch gap-8">
          <MoviePoster
            poster={movie?.poster_path}
            title={movie.original_title}
          />
          <div className="w-3/5 space-y-10">
            <h1 title={movie.title}>{movie.title}</h1>
            <MovieStatistics movie={movie} />
            <p title={movie.overview}>{movie.overview}</p>
            <div className="flex items-center gap-8">
              <div className="h-9 w-9">
                <ToggleFavButton movie={movie} />
              </div>
              <WatchNowLink id={movie.id} />
            </div>
            <Director />
          </div>
        </div>
        <Cast />
      </div>
    </section>
  );
};

export default MovieInfo;
