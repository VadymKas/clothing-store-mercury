import { configureStore } from '@reduxjs/toolkit';
import categories from './features/categories/categoriesSlice';

export const store = configureStore({
  reducer: { categories },
});
