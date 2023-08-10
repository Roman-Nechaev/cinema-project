export const selectMoviesSearch = state => state.moviesSearch.items.results;
export const selectSearchIsLoading = state => state.moviesSearch.isLoading;
export const selectSearchError = state => state.moviesSearch.error;
export const selectMoviesTotal = state =>
  state.moviesSearch.items.total_results;
