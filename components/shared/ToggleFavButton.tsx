'use client';

import HeartIcon from '@/public/icons/HeartIcon';
import IconButton from '../ui/IconButton';
import { GeneralMovie } from '@/types/GeneralMovie';
import { useFavoriteMoviesStore } from '@/store/useFavoriteMovieStore';
import cn from '@/utils/classNames';
import FavButtonSekelton from '../sekelton/FavButtonSekelton';
import { MovieDetails } from '@/types/MovieDetails';

interface ToggleFavButtonProps {
  movie: GeneralMovie | MovieDetails;
  containerClassName?: string;
}

const ToggleFavButton = ({
  movie,
  containerClassName,
}: ToggleFavButtonProps) => {
  const hasHydrated = useFavoriteMoviesStore((state) => state._hasHydrated);
  const isFav = useFavoriteMoviesStore((state) => state.isFavorite(movie.id));
  const toggleFavorite = useFavoriteMoviesStore(
    (state) => state.toggleFavorite
  );

  if (!hasHydrated) return <FavButtonSekelton />;

  return (
    <IconButton
      icon={<HeartIcon />}
      className={cn(
        'transition',
        containerClassName,
        isFav ? 'text-primary' : 'text-transparent'
      )}
      onClick={() => toggleFavorite(movie)}
      ariaLabel="Add to favorites"
    />
  );
};

export default ToggleFavButton;
