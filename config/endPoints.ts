export const internalEndPoints = {
  popularMovies: '/popularMovies',
  movieDetails: '/movieDetails',
  movieCast: '/movieCast',
};

export const externalEndPoints = {
  popularMovies: '/movie/popular',
  movieDetails: (id: string) => `/movie/${id}`,
  movieCast: (id: string) => `/movie/${id}/credits`,
};
