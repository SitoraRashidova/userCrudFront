import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import wishlist
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store
