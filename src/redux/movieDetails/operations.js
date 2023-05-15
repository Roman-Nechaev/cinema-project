import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../../KEY/movieKey';

export const fetchDetailsMovie = createAsyncThunk(
  'movie/fetchDetails',
  async (movie_Id, thunkAPI) => {
    try {
      const response = await axios.get(`/movie/${movie_Id}`, {
        params: {
          api_key: API_KEY,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
