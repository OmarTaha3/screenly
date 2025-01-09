import { movieAxios } from '@/config/axiosConfig';
import { handleRequest } from '../../../utils/handleRequest';
import { externalEndPoints } from '@/config/endPoints';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const movieId = searchParams.get('movieId') ?? '';

  return handleRequest(async () => {
    const response = await movieAxios.get(
      externalEndPoints.movieCast(movieId)
    );
    return { data: response.data, status: response.status };
  });
}
