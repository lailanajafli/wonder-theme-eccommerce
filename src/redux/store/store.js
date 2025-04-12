import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlices";
import productsReducer from "../slices/productsSlice"; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer, 
  },
});

export default store;
