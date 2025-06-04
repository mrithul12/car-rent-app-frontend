import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/loginSlice";
import { cartReducer } from "./slices/cartSlice";
import { searchReducer } from "./slices/searchSlice";
import { productReducer } from "./slices/productSlice";
import { carDataReducer } from "./slices/carDataslice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        cartItem:cartReducer,
        query:searchReducer,
        product:productReducer,
        carData:carDataReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch