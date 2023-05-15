import { configureStore } from '@reduxjs/toolkit';

import { moviesReducer } from './moviesSlice';
import { moviesDetailsReducer } from './movieDetails/movieDetailsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    moviesDetails: moviesDetailsReducer,
  },
});
