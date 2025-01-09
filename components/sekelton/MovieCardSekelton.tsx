const MovieCardSekelton = () => {
  return (
    <div className="group relative overflow-clip rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      {/* Skeleton Button for favorite */}
      <div className="absolute right-2 top-2 h-9 w-9 animate-pulse rounded-full bg-gray-900"></div>

      <div>
        {/* Skeleton Movie Poster */}
        <div className="relative flex aspect-[2/3] items-center justify-center">
          <div className="h-full w-full animate-pulse rounded-lg bg-gray-900"></div>
        </div>

        {/* Skeleton Overlay Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-100" />

        {/* Skeleton Content */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent p-4 text-white transition-opacity duration-300 group-hover:opacity-100">
          <div className="mb-2 h-6 w-3/4 animate-pulse rounded-md bg-gray-900"></div>
          <div className="rounded-m mb-1 h-4 w-2/4 animate-pulse bg-gray-900"></div>
          <div className="mt-2 flex items-center gap-1">
            <div className="mr-2 h-5 w-16 animate-pulse rounded-md bg-gray-900"></div>
            <div className="h-5 w-20 animate-pulse rounded-md bg-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSekelton;
