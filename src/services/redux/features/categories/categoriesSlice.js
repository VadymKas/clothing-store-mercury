import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../../api/getCategories';

const initialState = {
  status: null,
  list: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
        state.list = [];
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.list = payload;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      })
      .addCase(getCategories.rejected, (state) => {
        state.status = 'error';
        state.list = [];
      });
  },
});

export default categoriesSlice.reducer;

export const categories = (state) => state.categories;
