import { configureStore } from '@reduxjs/toolkit';

import { moviesReducer } from './moviesSlice';
import { moviesDetailsReducer } from './movieDetails/movieDetailsSlice';
import { moviesSearchReducer } from './movieSearch/movieDetailsSlice';
import { filmsIdReducer } from './savedFilmsId/savedFilmsIdSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    moviesDetails: moviesDetailsReducer,
    moviesSearch: moviesSearchReducer,
    savedFilmsId: filmsIdReducer,
  },
});
