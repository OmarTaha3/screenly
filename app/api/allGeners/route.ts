import { movieAxios } from '@/config/axiosConfig';
import { handleRequest } from '../../../utils/handleRequest';
import { externalEndPoints } from '@/config/endPoints';

export async function GET() {
  return handleRequest(async () => {
    const response = await movieAxios.get(externalEndPoints.allGeners);
    return { data: response.data, status: response.status };
  });
}
