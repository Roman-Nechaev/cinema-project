import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchRequestCast } from './operations';

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

const extraActions = [fetchRequestCast];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const castSlice = createSlice({
  name: 'moviesCast',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder

      .addCase(fetchRequestCast.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const castReducer = castSlice.reducer;
