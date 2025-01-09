'use client';

import HeartIcon from '@/public/icons/HeartIcon';
import IconButton from '../ui/IconButton';
import { generalMovie } from '@/types/generalMovie';
import { useFavoriteMoviesStore } from '@/store/useFavoriteMovieStore';
import cn from '@/utils/classNames';

interface ToggleFavButtonProps {
  movie: generalMovie;
}

const ToggleFavButton = ({ movie }: ToggleFavButtonProps) => {
  const hasHydrated = useFavoriteMoviesStore((state) => state._hasHydrated);
  const isFav = useFavoriteMoviesStore((state) => state.isFavorite(movie.id));
  const toggleFavorite = useFavoriteMoviesStore(
    (state) => state.toggleFavorite
  );

  if (!hasHydrated)
    return (
      <div className="absolute right-2 top-2 z-10 h-9 w-9 rounded-full bg-black/30 transition" />
    );

  return (
    <IconButton
      icon={<HeartIcon />}
      className={cn(
        'absolute right-2 top-2 z-10 transition',
        isFav ? 'text-secondary' : 'text-transparent'
      )}
      onClick={() => toggleFavorite(movie)}
      ariaLabel="Add to favorites"
    />
  );
};

export default ToggleFavButton;
