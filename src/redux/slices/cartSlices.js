import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
};

const updateLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }

      state.totalPrice = parseFloat((state.totalPrice + newItem.price).toFixed(2));
      updateLocalStorage(state);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.cart.find((item) => item.id === id);

      if (itemToRemove) {
        state.totalPrice = parseFloat(
          (state.totalPrice - itemToRemove.price * itemToRemove.quantity).toFixed(2)
        );
        state.cart = state.cart.filter((item) => item.id !== id);
        updateLocalStorage(state);
      }
    },

    increaseDecrease: (state, action) => {
      const { id, type } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        if (type === "increment") {
          item.quantity += 1;
          state.totalPrice = parseFloat((state.totalPrice + item.price).toFixed(2));
        } else if (type === "decrement") {
          if (item.quantity > 1) {
            item.quantity -= 1;
            state.totalPrice = parseFloat((state.totalPrice - item.price).toFixed(2));
          } else {
            state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
            state.totalPrice = parseFloat((state.totalPrice - item.price).toFixed(2));
          }
        }
        updateLocalStorage(state);
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      updateLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, increaseDecrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
