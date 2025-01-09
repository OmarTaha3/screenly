import { ImageWithFallBack } from '@/components/shared/ImageWithFallBack';
import { cast } from '@/constants/cast';
import { getPosterPath } from '@/utils/getPosterPath';
import React from 'react';

const Director = () => {
  const director = cast.crew.find((member) => member.job === 'Director');
  return (
    <div>
      <h3 className="headerBorder relative mb-8">Director</h3>
      <div className="flex items-start gap-8">
        <div className="relative flex aspect-[2/3] shrink-0 items-center justify-center">
          <ImageWithFallBack
            src={getPosterPath(director?.profile_path)}
            alt={director?.name ?? 'Director'}
            width={200}
            height={250}
            fallbackSrc="/images/placeholder.png"
            className="rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold">{director?.name}</h3>
          <p className="text-sm text-gray-400">
            Known for: {director?.known_for_department}
          </p>
          <p className="text-sm text-gray-400">
            Popularity: {director?.popularity.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Director;
