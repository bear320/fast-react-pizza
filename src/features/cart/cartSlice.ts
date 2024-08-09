import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, IItem } from "../../types";

const initialState: ICart = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IItem>) {
      // payload = item
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQty(state, action: PayloadAction<number>) {
      // payload = pizzaId
      state.cart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          const newQty = item.quantity + 1;
          return {
            ...item,
            quantity: newQty,
            totalPrice: item.unitPrice * newQty,
          };
        }
        return item;
      });
    },
    decreaseItemQty(state, action: PayloadAction<number>) {
      // payload = pizzaId
      state.cart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          const newQty = item.quantity - 1;
          return {
            ...item,
            quantity: newQty,
            totalPrice: item.unitPrice * newQty,
          };
        }
        return item;
      });
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQty,
  decreaseItemQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
