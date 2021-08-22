import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'categoryMenu',
  initialState: {
    currentCategory: '',
    categories: []
  },
  reducers: {
    updateCategories: (state, action) => {
      state.categories = [...action.payload];
      console.log('bung', state.categories);
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.currentCategory;
      console.log('ho', state.currentCategory);
    }
  }
})

export const { updateCategories, updateCurrentCategory } = slice.actions

export const selectCategories = state => {
  return state.categoryMenu.categories;
};

export const selectCurrentCategory = state => {
  return state.categoryMenu.currentCategory;
};

export default slice.reducer;