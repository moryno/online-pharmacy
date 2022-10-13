import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    // Delete cart

    removeProduct: (state, action) => {
      state.products.splice(
        state.products.findIndex((product) => product.id === action.payload),
        1
      );
      state.quantity -= 1;
      state.total -=
        Number(action.payload.price) * Number(action.payload.quantity);
    },
    deleteCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
