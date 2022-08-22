import { createSlice } from '@reduxjs/toolkit'
import items from '../../assets/data.json'
import { minValue, maxValue } from '../../utils/minMaxFuncs'
import { checkingForApplyBtn } from '../../utils/check'

export const MONEY = 500
const initialProducts = items.data.filter((product) => product.category === '1')
const initialMinPrice = minValue(
  initialProducts.map((obj) => Number(obj.price))
)
const initialMaxPrice = maxValue(
  initialProducts.map((obj) => Number(obj.price))
)

const initialState = {
  products: initialProducts,
  activeCategory: '1',
  radioValue: '',
  priceValue: initialMinPrice,
  minPrice: initialMinPrice,
  maxPrice: initialMaxPrice,
  forMeChecked: false,
  visibleApplyBtn: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortByCategory(state, action) {
      state.products = items.data

      state.products = state.products.filter(
        (product) => product.category === action.payload
      )

      state.activeCategory = action.payload
      state.minPrice = minValue(state.products.map((obj) => Number(obj.price)))
      state.maxPrice = maxValue(state.products.map((obj) => Number(obj.price)))
      state.priceValue = state.minPrice
    },

    sortByPriceAndName(state) {
      switch (state.radioValue) {
        case 'incName':
          state.products = state.products.sort((a, b) => {
            const nameA = a.name.toLowerCase().replace(/ .*/, '')
            const nameB = b.name.toLowerCase().replace(/ .*/, '')
            if (nameA < nameB) {
              return -1
            }
            return 0
          })
          break

        case 'decName':
          state.products = state.products.sort((a, b) => {
            const nameA = a.name.toLowerCase().replace(/ .*/, '')
            const nameB = b.name.toLowerCase().replace(/ .*/, '')
            if (nameA > nameB) {
              return -1
            }
            return 0
          })
          break

        case 'incPrice':
          state.products = state.products.sort(
            (a, b) => Number(a.price) - Number(b.price)
          )
          break

        case 'decPrice':
          state.products = state.products.sort(
            (a, b) => Number(b.price) - Number(a.price)
          )
          break
      }
    },

    setRadioValue(state, action) {
      state.radioValue = action.payload
    },

    setPriceValue(state, action) {
      state.priceValue = action.payload
    },

    sortByVariablePrice(state) {
      let activeCategoryProducts = items.data.filter(
        (product) => product.category === state.activeCategory.toString()
      )

      if (state.forMeChecked) {
        activeCategoryProducts = activeCategoryProducts.filter(
          (product) => Number(product.price) <= MONEY
        )
      }

      state.products = activeCategoryProducts.filter(
        (product) => Number(product.price) >= state.priceValue
      )
    },

    setForMeChecked(state, action) {
      state.forMeChecked = action.payload
    },

    sortForMe(state) {
      state.forMeChecked
        ? (state.products = items.data
            .filter(
              (product) => product.category === state.activeCategory.toString()
            )
            .filter((product) => Number(product.price) <= MONEY))
        : (state.products = items.data.filter(
            (product) => product.category === state.activeCategory.toString()
          ))
    },

    resetSort(state) {
      state.radioValue = ''
      state.priceValue = state.minPrice
      state.forMeChecked = false
    },

    setVisibleApplyBtn(state) {
      const initialActiveProducts = items.data.filter(
        (product) => product.category === state.activeCategory
      )

      state.visibleApplyBtn = checkingForApplyBtn(
        initialActiveProducts,
        state.products
      )
    },
  },
})

export const stateProducts = (state) => state.products

// Action creators are generated for each case reducer function
export const {
  sortByCategory,
  sortByPriceAndName,
  setRadioValue,
  setPriceValue,
  sortByVariablePrice,
  sortForMe,
  setForMeChecked,
  resetSort,
  setVisibleApplyBtn,
} = productsSlice.actions

export default productsSlice.reducer
