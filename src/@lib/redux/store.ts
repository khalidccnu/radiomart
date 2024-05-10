import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import favoriteSlice from './favorite/favoriteSlice';

const store = configureStore({
  reducer: {
    cartSlice,
    favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
