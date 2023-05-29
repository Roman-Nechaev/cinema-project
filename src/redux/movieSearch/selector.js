export const selectMoviesSearch = state => state.moviesSearch.items.results;
export const selectMoviesTotal = state =>
  state.moviesSearch.items.total_results;
