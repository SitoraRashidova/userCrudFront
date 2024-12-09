import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import wishlist from "./slices/wishlist-slice"
import user from ""
const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist,
    user: use
  },
});
export default store
