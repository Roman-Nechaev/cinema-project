import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../../KEY/movieKey';

export const fetchSearchMovie = createAsyncThunk(
  'movie/fetchSearch',
  async (data, thunkAPI) => {
    try {
      const { search, page, lang } = data;

      const response = await axios.get(`/search/movie`, {
        params: {
          api_key: API_KEY,
          query: search,
          page: page,
          language: lang,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
