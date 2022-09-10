import { configureStore } from '@reduxjs/toolkit';



import  addToCartSlice  from '../addToCart'
import  allpostesHave  from '../FetchData';



export const store = configureStore({
  reducer: {
    addToCartSlice:addToCartSlice,
    allpostes:allpostesHave,
  }, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),


})
