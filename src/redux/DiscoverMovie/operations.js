import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../../KEY/movieKey';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchDiscoverMovie = createAsyncThunk(
  'movie/fetchDiscover',
  async (data, thunkAPI) => {
    // const { pageMovies, lang } = data;

    try {
      const response = await axios.get(
        '/discover/movie?&with_watch_monetization_types=free',
        {
          params: {
            api_key: API_KEY,
            sort_by: 'popularity.desc',
          },
        }
      );

      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
