import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  
});
export const { inc, dec, reset } = wishliSlice.actions; //setState
export default counterSlice.reducer; //state
