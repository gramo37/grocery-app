import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { orderReducer } from './reducers/orderReducer'
import cartReducer from "./slices/CartSlice"
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore';
// import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    cart: cartReducer,
    order: orderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
