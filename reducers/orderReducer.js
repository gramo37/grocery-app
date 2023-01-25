import {createReducer} from "@reduxjs/toolkit";

export const orderReducer = createReducer({},{
    RequireOrder: (state) => {
        state.loading= true
        state.message=""
        state.error=""
    },
    GetOrderSuccess: (state, action) => {
        state.loading= false
        state.message= action.payload
        state.error=""
    },
    GetOrderFailure: (state, action) => {
        state.loading= false
        state.message="Something went Wrong"
        state.error=action.payload
    },
    ClearOrderStatus: (state) => {
        state.loading= false
        state.message="",
        state.error=""
    }
})