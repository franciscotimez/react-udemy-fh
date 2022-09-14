import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 10,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementBy, decrement } = counterSlice.actions;

// export default counterSlice.reducer