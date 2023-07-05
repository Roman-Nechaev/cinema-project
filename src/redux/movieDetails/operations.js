import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../../KEY/movieKey';

export const fetchDetailsMovie = createAsyncThunk(
  'movie/fetchDetails',
  async (data, thunkAPI) => {
    const { moviesId, lang } = data;
    try {
      const response = await axios.get(`/movie/${moviesId}`, {
        params: {
          api_key: API_KEY,
          language: lang,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
