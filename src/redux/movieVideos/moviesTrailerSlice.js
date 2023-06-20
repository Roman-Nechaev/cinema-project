import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchMovieVideos } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const extraActions = [fetchMovieVideos];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const trailerSlice = createSlice({
  name: 'moviesTrailer',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchMovieVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const moviesTrailerSliceReducer = trailerSlice.reducer;
