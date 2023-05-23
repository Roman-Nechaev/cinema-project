import { createSlice } from '@reduxjs/toolkit';

export const savedFilmsIdSlice = createSlice({
  name: 'filmsId',
  initialState: [],
  reducers: {
    setFilmsID(state, action) {
      let cheatId = state.includes(action.payload);
      if (!cheatId) {
        state.push(action.payload);
        return;
      }
      const index = state.findIndex(stat => stat === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { setFilmsID } = savedFilmsIdSlice.actions;

export const filmsIdReducer = savedFilmsIdSlice.reducer;

export const selectFilmsIdValue = state => state.savedFilmsId;
