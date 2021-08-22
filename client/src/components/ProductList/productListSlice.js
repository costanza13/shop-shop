import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'productList',
  initialState: {
    products: []
  },
  reducers: {
    updateProducts: (state, action) => {
      state.products = [...action.payload];
    }
  }
})

export const { updateProducts } = slice.actions;

export const selectProducts = state => state.productList.products;

export default slice.reducer;