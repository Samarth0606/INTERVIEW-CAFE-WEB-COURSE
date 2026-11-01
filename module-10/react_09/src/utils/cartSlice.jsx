import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:{
    items: []
  },
  reducers: {
    addItem: (state,action) => {
        state.items.push(action.payload)
    },
    removeItem: state => {
        state.items.pop()
    },
    clearCart: (state) => {
        state.items.length = 0;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer