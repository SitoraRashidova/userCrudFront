import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc(state) {
      state.value + state.value + 1;
    },
  },
});
export const {i}= counterSlice.actions
