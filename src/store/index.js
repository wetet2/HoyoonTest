import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    increment2: (state) => {
      state.value += 2
    },
    decrement2: (state) => {
      state.value -= 2
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, increment2, decrement2, incrementByAmount } = counterSlice.actions

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})