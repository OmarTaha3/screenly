'use client';
import Tag from '../ui/Tag';
import { GeneralMovie } from '@/types/GeneralMovie';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/queries/allKeys';
import { getAllGeners } from '@/queries/allQueries';
import TagSekelton from '../sekelton/TagSekelton';
import { gener } from '@/types/gener';

interface GenerHubProps {
  movie: GeneralMovie;
}

interface GenerTagsProps {
  genres: gener[];
  movie: GeneralMovie;
}

const GenerHub = ({ movie }: GenerHubProps) => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.ALL_GENERS],
    queryFn: getAllGeners,
    staleTime: 60 * 60 * 1000,
  });

  return (
    <div className="flex flex-wrap items-start gap-3">
      {isPending && (
        <>
          {Array.from({ length: 2 }).map((_, index) => (
            <TagSekelton key={index} />
          ))}
        </>
      )}
      {isError && (
        <p className="text-center text-red-500">
          Failed to load Geners. Please try again.
        </p>
      )}
      {isSuccess && <GenerTags genres={data.genres} movie={movie} />}
    </div>
  );
};

const GenerTags = ({ genres, movie }: GenerTagsProps) => {
  const genreLookup = genres.reduce<{ [key: number]: string }>((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  return (
    <>
      {movie?.genre_ids?.map((genreId) => (
        <Tag key={genreId} tagName={genreLookup[genreId]} />
      ))}
    </>
  );
};

export default GenerHub;
