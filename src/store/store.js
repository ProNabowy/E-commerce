import { configureStore } from "@reduxjs/toolkit";
import card_Reducer from "../slices/card_slice";
import cart_slice from "../slices/cart_slice";

const store = configureStore({
    reducer: {
        card: card_Reducer,
        cart: cart_slice
    }
});

export default store;