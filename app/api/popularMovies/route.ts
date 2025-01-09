import { movieAxios } from '@/config/axios-config';
import { handleRequest } from '../../../utils/handleRequest';
import { externalEndPoints } from '@/config/endPoints';

export async function GET() {
  return handleRequest(async () => {
    const response = await movieAxios.get(externalEndPoints.popularMovies);
    return { data: response.data, status: response.status };
  });
}
