import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { moviesReducer } from './moviesSlice';
import { moviesDetailsReducer } from './movieDetails/movieDetailsSlice';
import { moviesSearchReducer } from './movieSearch/movieDetailsSlice';
import { filmsIdReducer } from './savedFilmsId/savedFilmsIdSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filmsId'],
};

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    moviesDetails: moviesDetailsReducer,
    moviesSearch: moviesSearchReducer,
    savedFilmsId: persistReducer(persistConfig, filmsIdReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
