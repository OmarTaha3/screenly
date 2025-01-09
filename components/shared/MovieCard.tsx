import { ROUTES } from '@/routes';
import { GeneralMovie } from '@/types/GeneralMovie';
import { getPosterPath } from '@/utils/getPosterPath';
import Link from 'next/link';
import { ImageWithFallBack } from './ImageWithFallBack';
import ToggleFavButton from './ToggleFavButton';
import { TEXTS } from '@/constants/text';
import Tag from '../ui/Tag';
import { MovieDetails } from '@/types/MovieDetails';

interface MovieCardProps {
  movie: GeneralMovie | MovieDetails;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  const poster = getPosterPath(movie.poster_path);
  return (
    <div className="group relative overflow-clip rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      {/* Button to add/remove movie from favorite */}
      <ToggleFavButton
        movie={movie}
        containerClassName="absolute right-2 top-2 z-10"
      />

      <Link href={ROUTES.MOVIE_DETAILS(movie.id)}>
        {/* Movie Poster */}
        <div className="relative flex aspect-[2/3] items-center justify-center">
          <ImageWithFallBack
            src={poster}
            alt={movie.title || TEXTS.CARD_POSTER_ALT}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Overlay Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-100 md:opacity-0" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent p-4 text-white transition-opacity duration-300 group-hover:opacity-100 md:opacity-0">
          <h3
            title={movie.title}
            className="line-clamp-1 text-lg font-semibold hover:underline"
          >
            {movie.title}
          </h3>
          <p className="text-sm text-gray-300">
            Release Date: {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm font-medium">
            <Tag
              tagName={movie.vote_average.toFixed(1)}
              variant="secondary"
              className="text-xs"
            />
            <span>{movie.vote_count} Votes</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
