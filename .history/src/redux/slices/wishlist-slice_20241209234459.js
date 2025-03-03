import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    addWishlist(state, action){
      state.value.push(action.payload)
    }
  }
  
});
export const { inc, dec, reset } = wishlistSlice.actions; //setState
export default wishlistSlice.reducer; //state
