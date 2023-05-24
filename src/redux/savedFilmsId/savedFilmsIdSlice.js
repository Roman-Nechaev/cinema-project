import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filmsId: [],
};
export const savedFilmsIdSlice = createSlice({
  name: 'filmsId',
  initialState,
  reducers: {
    setFilmsID(state, action) {
      const itemFilm = state.filmsId.find(item => item === action.payload);
      if (!itemFilm) {
        state.filmsId.push(action.payload);
      } else {
        const index = state.filmsId.findIndex(stat => stat === action.payload);
        state.filmsId.splice(index, 1);
      }
    },
  },
});

export const filmsIdReducer = savedFilmsIdSlice.reducer;

export const { setFilmsID } = savedFilmsIdSlice.actions;

export const selectFilmsIdValue = state => state.savedFilmsId.filmsId;
