import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filmsId'],
};

export const filmsIdReducer = persistReducer(
  persistConfig,
  savedFilmsIdSlice.reducer
);

export const { setFilmsID } = savedFilmsIdSlice.actions;

export const selectFilmsIdValue = state => state.savedFilmsId.filmsId;
