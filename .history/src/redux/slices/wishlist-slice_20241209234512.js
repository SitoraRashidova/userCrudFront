import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    addWishlist(state, action) {
      state.value.push(action.payload);
    },
  },
});
export const { addWishlist } = wishlistSlice.actions; //setState
export default wishlistSlice.reducer; //state
