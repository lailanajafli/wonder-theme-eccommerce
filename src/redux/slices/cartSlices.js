// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  cartCount: JSON.parse(localStorage.getItem("cartCount")) || 0,
  isCartModalOpen: false,
};

const updateLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
  localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cart.push({ ...newItem, quantity: newItem.quantity });
      }

      state.totalPrice = parseFloat(
        (state.totalPrice + newItem.price * newItem.quantity).toFixed(2)
      );
      state.cartCount = state.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      updateLocalStorage(state);
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.cartCount = state.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      updateLocalStorage(state);
    },

    increaseDecrease: (state, action) => {
      const { id, type } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        if (type === "increment") {
          item.quantity += 1;
        } else if (type === "decrement" && item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
        }

        state.totalPrice = state.cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        state.cartCount = state.cart.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        updateLocalStorage(state);
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.cartCount = 0;
      localStorage.removeItem("cart");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("cartCount");
    },

    toggleCartModal: (state) => {
      state.isCartModalOpen = !state.isCartModalOpen;
    },
    closeCartModal: (state) => {
      state.isCartModalOpen = false;
    },

    syncCartWithProducts: (state, action) => {
      const availableProducts = action.payload;
      const filteredCart = state.cart.filter((cartItem) =>
        availableProducts.some((product) => product.id === cartItem.id)
      );

      state.cart = filteredCart;
      state.cartCount = filteredCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = parseFloat(
        filteredCart
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)
      );

      updateLocalStorage(state);
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseDecrease,
  clearCart,
  toggleCartModal,
  closeCartModal,
  syncCartWithProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
