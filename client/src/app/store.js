import { configureStore } from '@reduxjs/toolkit'
import categoryMenuReducer from '../components/CategoryMenu/categoryMenuSlice';
import productListReducer from '../components/ProductList/productListSlice';

export default configureStore({
  reducer: {
    categoryMenu: categoryMenuReducer,
    productList: productListReducer
  }
});

// reducer: {
//   products: [],
//   cart: [],
//   cartOpen: false,
//   categories: [],
//   currentCategory: ''
// }
