import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../../KEY/movieKey';

export const fetchSearchMovie = createAsyncThunk(
  'movie/fetchSearch',
  async (allData, thunkAPI) => {
    try {
      const { search, page } = allData;

      const response = await axios.get(`/search/movie`, {
        params: {
          api_key: API_KEY,
          query: search,
          page: page,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
