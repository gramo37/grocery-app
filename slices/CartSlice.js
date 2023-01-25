import { createSlice } from "@reduxjs/toolkit"

const initialState = {items: []}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if item already present in cart
            // If present increment the quantity
            for (let i = 0; i < state.items.length; i++) {
                const element = state.items[i];
                if(element.title === action.payload.title) {
                    let temp = state.items;
                    temp[i].quantity += 1;
                    state.items = temp;
                    return
                }
            }
            // If not present in cart add item to cart
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            // Check if item already present in cart
            // If present increment the quantity
            for (let i = 0; i < state.items.length; i++) {
                const element = state.items[i];
                if(element.title === action.payload.title) {
                    let temp = state.items;
                    temp[i].quantity -= 1;
                    if(temp[i].quantity == 0) {
                        temp.splice(i, 1)
                    }
                    state.items = temp;
                    return
                }
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectCartItems = state => state.cart.items

export default cartSlice.reducer