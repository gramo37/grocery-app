import axios from "axios";
const BASE_URL = 'https://online-exam-portal.onrender.com/api/v1/createOrder'

export const createOrder = (cartItems) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireOrder",
        });

        // post Request
        const { data } = await axios.post(BASE_URL, cartItems, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        // Add this order to order.json file

        dispatch({
            type: "GetOrderSuccess",
            payload: data
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: "GetOrderFailure",
            payload: error
        });
    }
};

export const clearOrderStatus = () => (dispatch) => {
    dispatch({
        type: "ClearOrderStatus",
    });

}