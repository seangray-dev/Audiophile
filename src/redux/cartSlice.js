import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === productId
      );
      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === productId
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
