import { configureStore } from '@reduxjs/toolkit'
import categoryMenuReducer from '../components/CategoryMenu/categoryMenuSlice';

export default configureStore({
  reducer: {
    categoryMenu: categoryMenuReducer
  }
})

// reducer: {
//   products: [],
//   cart: [],
//   cartOpen: false,
//   categories: [],
//   currentCategory: ''
// }
