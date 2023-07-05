import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../../KEY/movieKey';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchPopMovie = createAsyncThunk(
  'movie/fetchPop',
  async (data, thunkAPI) => {
    const { pageMovies, lang } = data;

    try {
      const response = await axios.get('/trending/movie/day', {
        params: {
          api_key: API_KEY,
          page: pageMovies,
          language: lang,
        },
      });

      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
