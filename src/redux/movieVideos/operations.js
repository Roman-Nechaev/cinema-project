import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../../KEY/movieKey';

export const fetchMovieVideos = createAsyncThunk(
  'movie/moviesTrailer',
  async (movie_Id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/movie/${movie_Id}/videos`, {
        params: {
          api_key: API_KEY,
          // language: 'ru-RU',
          // language: 'uk-UK',
        },
      });

      let trailer = data.results.find(vid => vid.name === 'Official Trailer');
      if (!trailer) {
        trailer = data.results[0];
      }

      return trailer;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
