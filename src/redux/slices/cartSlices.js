import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  cartCount: JSON.parse(localStorage.getItem("cartCount")) || 0, // cartCount əlavə edilir
};

const updateLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
  localStorage.setItem("cartCount", JSON.stringify(state.cartCount)); // cartCount da saxlanır
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

      // totalPrice hesablanır
      state.totalPrice = parseFloat((state.totalPrice + newItem.price).toFixed(2));

      // cartCount hesablama
      state.cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);

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
        
        // cartCount yenilənir
        state.cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);

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
            state.totalPrice = parseFloat(
              (state.totalPrice - item.price * item.quantity).toFixed(2)
            );
            state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
          }
        }
        
        // cartCount yenilənir
        state.cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
        
        updateLocalStorage(state);
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.cartCount = 0; // cartCount da sıfırlanır
      updateLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, increaseDecrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
