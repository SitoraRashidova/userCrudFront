import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  
});
export const { inc, dec, reset } = counterSlice.actions; //setState
export default counterSlice.reducer; //state
