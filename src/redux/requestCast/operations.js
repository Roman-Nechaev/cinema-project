import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../../KEY/movieKey';

export const fetchRequestCast = createAsyncThunk(
  'movie/fetchCast',
  async (movie_Id, thunkAPI) => {
    try {
      const response = await axios.get(`/movie/${movie_Id}/credits`, {
        params: {
          api_key: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
