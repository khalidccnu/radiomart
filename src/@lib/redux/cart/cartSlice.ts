import { IProduct } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { $$, storage } from '@lib/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICartItem {
  id: TId;
  quantity: number;
}

interface ICartCalculation {
  total: number;
}

interface ICartItemModification {
  id?: TId;
  short?: boolean;
  quantity?: number;
  product?: Array<Partial<IProduct & { quantity: number }>>;
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
    updateCart: (state, action: PayloadAction<ICartItemModification>) => {
      const itemIdx = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[itemIdx].quantity = action.payload.quantity;

      storage.setData('cart', JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      storage.removeData('cart');
    },
    executeCartCalc: (state, action: PayloadAction<ICartItemModification>) => {
      state.cartCalculation.total = action.payload.product?.reduce(
        (total, current) =>
          total +
          current?.quantity *
            (current?.discount ? $$.toDiscountPrice(current?.price, current?.discount_percentage) : current?.price),
        0,
      );
    },
  },
});

export const { addCart, removeCart, updateCart, clearCart, executeCartCalc } = cartSlice.actions;
export default cartSlice.reducer;
