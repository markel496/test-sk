import { configureStore } from '@reduxjs/toolkit'
import products from './products/slice'
import burger from './burger/slice'

export const store = configureStore({
  reducer: { products, burger },
})
