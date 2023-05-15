import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { API_KEY } from '../KEY/movieKey';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchPopMovie = createAsyncThunk(
  'movie/fetchPop',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('/trending/movie/day', {
        params: {
          api_key: API_KEY,
          page,
        },
      });

      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const fetchDetailsMovie = createAsyncThunk(
//   'movie/fetchDetails',
//   async (movie_Id, thunkAPI) => {
//     try {
//       const response = await axios.get(`/movie/${movie_Id}`, {
//         params: {
//           api_key: API_KEY,
//         },
//       });
//       console.log(response);
//       return response.data.results;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );