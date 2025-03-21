import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cursorVariants: 'default',
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setCursorVariants: (state, action) => {
      state.cursorVariants = action.payload;
    },
  },
});

export const { setCursorVariants } = cursorSlice.actions;

export default cursorSlice.reducer;
