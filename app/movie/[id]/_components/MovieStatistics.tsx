import CircularProgressBar from '@/components/ui/CircularProgressBar';
import Tag from '@/components/ui/Tag';
import { MovieDetails } from '@/types/MovieDetails';

interface MovieStatisticsProps {
  movie: MovieDetails;
}
const MovieStatistics = ({ movie }: MovieStatisticsProps) => {
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <div className="text-whtie flex items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <CircularProgressBar
          percentage={movie.vote_average}
          className="shrink-0"
        />
        <div className="flex flex-wrap items-start gap-3">
          {movie?.genres?.map((gener) => (
            <Tag key={gener.id} tagName={gener.name} />
          ))}{' '}
        </div>
      </div>{' '}
      <Tag tagName={`${hours}h ${minutes}m`} variant="primary" />
    </div>
  );
};

export default MovieStatistics;
