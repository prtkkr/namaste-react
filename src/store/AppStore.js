import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const AppStore = configureStore({
  reducer: {
    // Add your reducers here
    cart: cartReducer,
  },
});

export default AppStore;
