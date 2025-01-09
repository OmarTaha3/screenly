export const internalEndPoints = {
  popularMovies: '/popularMovies',
  movieDetails: '/movieDetails',
};

export const externalEndPoints = {
  popularMovies: '/movie/popular',
  movieDetails: (id: string) => `/movie/${id}`,
};
