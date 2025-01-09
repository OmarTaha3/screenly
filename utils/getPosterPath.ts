/**
 * Generates the full URL for a movie poster image using a base URL and a relative image path.
 *
 * This function combines a base URL for image hosting (from the environment variable `TMDB_IMAGE_URL`)
 * with the relative path to the image to create the full URL that can be used to display the poster.
 *
 * @param path - The relative path of the poster image. This is typically provided by the TMDB API.
 * @returns A string representing the full URL to the movie poster image.
 *
 * Usage example:
 * const posterUrl = getPosterPath('/path/to/poster.jpg');
 * console.log(posterUrl); // "https://image.tmdb.org/t/p/original/path/to/poster.jpg"
 */
export const getPosterPath = (path: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;
  return `${baseUrl}${path}`;
};
