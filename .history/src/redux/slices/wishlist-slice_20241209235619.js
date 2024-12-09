import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    addWishlist(state, action) {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value.push(action.payload);
      }else {
        state.value.filter(({id})=> )
      }
    },
  },
});
export const { addWishlist } = wishlistSlice.actions; //setState
export default wishlistSlice.reducer; //state