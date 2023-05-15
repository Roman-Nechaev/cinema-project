import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchDetailsMovie } from './operations';

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

const extraActions = [fetchDetailsMovie];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const moviesSlice = createSlice({
  name: 'moviesDetails',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchDetailsMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const moviesDetailsReducer = moviesSlice.reducer;
