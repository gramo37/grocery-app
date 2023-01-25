import { configureStore } from '@reduxjs/toolkit'
import { orderReducer } from './reducers/orderReducer'
import cartReducer from "./slices/CartSlice"
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        order: orderReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})