'use server';
import { movieAxios } from '@/config/axiosConfig';
import { externalEndPoints } from '@/config/endPoints';

export const getAllMovies = async () => {
  return await movieAxios.get(externalEndPoints.popularMovies);
};
