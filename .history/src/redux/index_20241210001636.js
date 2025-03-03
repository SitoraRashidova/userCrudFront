import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import wishlist from "./slices/wishlist-slice"
import user from "./slices/user-slice"
const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist,
    user: user
  },
});
export default store
