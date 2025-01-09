import WatchNowLink from '@/components/shared/WatchNowLink';
import CircularProgressBar from '@/components/ui/CircularProgressBar';
import Tag from '@/components/ui/Tag';
import { genreLookup } from '@/constants/geners';
import { TEXTS } from '@/constants/text';
import { GeneralMovie } from '@/types/GeneralMovie';
import { getPosterPath } from '@/utils/getPosterPath';
import Image from 'next/image';
import React from 'react';

interface bannerProps {
  movie: GeneralMovie;
}

const Banner = ({ movie }: bannerProps) => {
  return (
    <section
      role="banner"
      className="relative flex min-h-screen w-full items-center bg-cover bg-center px-8 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:bottom-0 after:left-0 after:h-1/3 after:w-full after:bg-gradient-to-t after:from-background after:to-transparent sm:px-16 md:px-32 lg:px-40"
    >
      {/* Render the backdrop image if available */}
      {movie?.backdrop_path && (
        <MainBackdrop
          path={movie?.backdrop_path}
          title={movie?.original_title}
        />
      )}

      {/* Content container */}
      <div className="relative z-10 flex flex-col gap-8 lg:w-2/5">
        <h1 title={movie?.original_title}>
          {movie?.original_title}
        </h1>

        {/* Rating and genres */}
        <div className="text-whtie flex items-center gap-6">
          {/* Circular progress bar for movie rating */}
          <CircularProgressBar
            percentage={movie.vote_average}
            className="shrink-0"
          />

          {/* Genre tags */}
          <div className="flex flex-wrap items-start gap-3">
            {movie?.genre_ids?.map((genreId) => (
              <Tag key={genreId} tagName={genreLookup[genreId]} />
            ))}{' '}
          </div>
        </div>

        {/* Movie overview/description */}
        <p className="line-clamp-3" title={movie?.overview}>
          {movie?.overview}
        </p>

        {/* Watch now button linking to the movie details page */}
        <WatchNowLink id={movie.id} />
      </div>
    </section>
  );
};

// Component for rendering the main backdrop image
const MainBackdrop = ({ path, title }: { path: string; title: string }) => {
  const backdrop = getPosterPath(path);
  return (
    <Image
      src={backdrop}
      alt={title || TEXTS.MAIN_BANNER_ALT}
      fill
      priority
      className="absolute inset-0 -z-10 object-cover"
    />
  );
};

export default Banner;
