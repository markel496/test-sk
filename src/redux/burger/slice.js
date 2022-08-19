import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeBurger: false,
}

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setActiveBurger(state, action) {
      state.activeBurger = action.payload
    },
  },
})

export const stateBurger = (state) => state.burger

// Action creators are generated for each case reducer function
export const { setActiveBurger } = burgerSlice.actions

export default burgerSlice.reducer
