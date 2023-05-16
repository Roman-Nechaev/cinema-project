import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchSearchMovie } from './operations';

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

const extraActions = [fetchSearchMovie];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const moviesSlice = createSlice({
  name: 'moviesSearch',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchSearchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const moviesSearchReducer = moviesSlice.reducer;
