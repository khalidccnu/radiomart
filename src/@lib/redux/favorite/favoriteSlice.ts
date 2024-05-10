import { TId } from '@base/interfaces';
import { storage } from '@lib/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IFavoriteItem {
  id: TId;
}

interface IFavoriteItemModification {
  id: TId;
}

interface IState {
  favorite: IFavoriteItem[];
}

const getFavorite = storage.getData('favorite');

const initialState: IState = {
  favorite: getFavorite ? JSON.parse(getFavorite) : [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IFavoriteItemModification>) => {
      state.favorite.push({ id: action.payload.id });
      storage.setData('favorite', JSON.stringify(state.favorite));
    },
    removeFavorite: (state, action: PayloadAction<IFavoriteItemModification>) => {
      const itemIdx = state.favorite.findIndex((item) => item.id === action.payload.id);

      state.favorite.splice(itemIdx, 1);
      storage.setData('favorite', JSON.stringify(state.favorite));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
