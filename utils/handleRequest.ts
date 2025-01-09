import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

/**
 * A helper function to handle API requests and return a standardized response.
 * It handles both successful and failed requests and formats the response accordingly.
 *
 * @param callback - A function that returns a promise containing the data and status of the response.
 *                    This is typically an API request.
 * @returns A standardized response using `NextResponse.json`, which contains the data or error message.
 *
 * Usage example:
 * const response = await handleRequest(() => api.get('/endpoint'));
 * console.log(response); // Returns a NextResponse with the status and data or error message.
 */
export const handleRequest = async <T>(
  callback: () => Promise<{ data: T; status: number }>
): Promise<NextResponse> => {
  try {
    const result = await callback();
    return NextResponse.json(result.data, { status: result.status });
  } catch (error: unknown) {
    let status = 500;
    let message = 'Internal server error';
    if (error instanceof AxiosError) {
      status = error.response?.status || 500;
      message = error.response?.data?.error || 'Internal server error';
    } else if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status });
  }
};
