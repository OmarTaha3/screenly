import { ImageWithFallBack } from '@/components/shared/ImageWithFallBack';
import { TEXTS } from '@/constants/text';
import { getPosterPath } from '@/utils/getPosterPath';

interface MoviePoster {
  poster: string;
  title: string | null;
}
const MoviePoster = ({ poster, title }: MoviePoster) => {
  const posterPath = getPosterPath(poster);

  return (
    <div className="relative flex w-4/5 shrink-0 items-center justify-center md:w-2/5">
      <ImageWithFallBack
        src={posterPath}
        alt={title || TEXTS.CARD_POSTER_ALT}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
};

export default MoviePoster;
