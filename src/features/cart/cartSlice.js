import { createSlice } from "@reduxjs/toolkit";
import items from "../../cartItems";
import { useSelector } from "react-redux";

const initialState = {
  cartItems: items,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseProducts(state, action) {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },

    decreaseProducts(state, action) {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      cartItem.amount = cartItem.amount - 1;
    },

    clearCart(state, action) {
      state.cartItems = [];
      state.amount = 0;
    },

    removeItem(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = updatedCartItems;
    },

    calculateTotal(state, action) {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  increaseProducts,
  decreaseProducts,
  clearCart,
  removeItem,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
