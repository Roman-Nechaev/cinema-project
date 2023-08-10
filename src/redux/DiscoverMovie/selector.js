export const selectDiscoverMovie = state => state.discoverMovies.items;
export const selectDiscoverMovieIsLoading = state =>
  state.discoverMovies.isLoading;
export const selectDiscoverMovieError = state => state.discoverMovies.error;
