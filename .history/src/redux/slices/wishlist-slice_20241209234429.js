import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    addWishlist(){
      
    }
  }
  
});
export const { inc, dec, reset } = wishlistSlice.actions; //setState
export default wishlistSlice.reducer; //state
