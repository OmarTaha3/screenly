'use server';
import { movieAxios } from '@/config/axiosConfig';
import { externalEndPoints } from '@/config/endPoints';

export const getAllMovies = async (page: number) => {
  return await movieAxios.get(externalEndPoints.popularMovies, {
    params: {
      page,
    },
  });
};
