import { configureStore } from '@reduxjs/toolkit';
import cursorReducer from './cursorSlice';

const store = configureStore({
  reducer: {
    cursor: cursorReducer, 
  },
});

export default store;
