import { internalAxios } from '@/config/axiosConfig';
import { internalEndPoints } from '@/config/endPoints';

export const getCast = async (movieId: string) => {
  const response = await internalAxios.get(internalEndPoints.movieCast, {
    params: {
      movieId,
    },
  });
  return response.data;
};
