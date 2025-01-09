import DirectorSekelton from '@/components/sekelton/DirectorSekelton';
import { ImageWithFallBack } from '@/components/shared/ImageWithFallBack';
import { CrewMember } from '@/types/crew';
import { getPosterPath } from '@/utils/getPosterPath';

interface DirectorProps {
  crew: CrewMember[];
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
}

interface DirectorDetailsProps {
  crew: CrewMember[];
}
const Director = ({ crew, isPending, isError, isSuccess }: DirectorProps) => {
  return (
    <div>
      <h3 className="headerBorder relative mb-8 text-center md:text-left">
        Director
      </h3>
      {/* Render the skeleton loader while data is loading, Show an error message if data failed to load, otherwise render the director details */}
      {isPending && <DirectorSekelton />}
      {isError && (
        <div className="text-center text-red-500">
          Failed to load director information. Please try again.
        </div>
      )}
      {isSuccess && <DirectorDetails crew={crew} />}{' '}
    </div>
  );
};

const DirectorDetails = ({ crew }: DirectorDetailsProps) => {
  const director = crew.find((member) => member.job === 'Director');

  // If no director is found, display a fallback message
  if (!director) {
    return (
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600">
            Director Not Found
          </h3>
          <p className="text-sm text-gray-400">
            No director information available for this movie.
          </p>
        </div>
      </div>
    );
  }

  // If the director is found, render their details, including their profile image and information
  return (
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
  );
};
export default Director;
