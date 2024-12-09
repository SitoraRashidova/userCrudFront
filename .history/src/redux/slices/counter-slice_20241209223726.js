import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc(state, actions) {
      state.value += ac;
    },
    dec(state) {
      state.value -= 1;
    },
    reset(state) {
      state.value = 0;
    },
  },
});
export const { inc, dec, reset } = counterSlice.actions; //setState
export default counterSlice.reducer; //state