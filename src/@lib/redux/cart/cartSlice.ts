import { TId } from '@base/interfaces';
import { storage } from '@lib/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartItem {
  id: TId;
  quantity: number;
}

interface ICartCalculation {
  total: number;
}

interface ICartItemModification {
  id: TId;
  short?: boolean;
}

interface IState {
  cart: ICartItem[];
  cartCalculation: ICartCalculation;
}

const getCart = storage.getData('cart');

const initialState: IState = {
  cart: getCart ? JSON.parse(getCart) : [],
  cartCalculation: {
    total: 0,
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ICartItemModification>) => {
      if (action.payload?.short) {
        state.cart.push({ id: action.payload.id, quantity: 1 });
      } else {
        const itemIdx = state.cart.findIndex((item) => item.id === action.payload.id);
        state.cart[itemIdx].quantity += 1;
      }

      storage.setData('cart', JSON.stringify(state.cart));
    },
    removeCart: (state, action: PayloadAction<ICartItemModification>) => {
      const itemIdx = state.cart.findIndex((item) => item.id === action.payload.id);

      if (action.payload?.short) state.cart.splice(itemIdx, 1);
      else state.cart[itemIdx].quantity -= 1;

      storage.setData('cart', JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      storage.removeData('cart');
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
