import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../utils/constants';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios(`${BASE_URL}/categories`);
      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
