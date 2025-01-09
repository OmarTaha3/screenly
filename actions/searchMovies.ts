'use server';
import { movieAxios } from '@/config/axiosConfig';
import { externalEndPoints } from '@/config/endPoints';

export const getSearchedMovies = async (query: string, page: number) => {
  if (!query.trim()) {
    return { data: { results: [], total_pages: 0 } };
  }
  return await movieAxios.get(externalEndPoints.search, {
    params: {
      query,
      page,
    },
  });
};
