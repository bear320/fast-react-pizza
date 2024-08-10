import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, IItem } from "../../types";
import { RootState } from "../../store";

const initialState: ICart = {
  cart: [],
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

export const getCart = (state: RootState) => state.cart.cart;

export const getCurrentQtyById = (id: number) => (state: RootState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getTotalCartQty = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// 'reselect'

export default cartSlice.reducer;
