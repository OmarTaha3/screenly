import Banner from './_components/Banner';
import MovieInfo from './_components/MovieInfo';
import { internalAxios } from '@/config/axiosConfig';
import { internalEndPoints } from '@/config/endPoints';

const MovieDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id: movieId } = await params;
  const { data } = await internalAxios.get(internalEndPoints.movieDetails, {
    params: { movieId },
  });

  return (
    <main>
      <Banner backdrop={data?.backdrop_path} title={data?.original_title} />
      <MovieInfo movie={data} />
    </main>
  );
};

export default MovieDetailsPage;
