import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/loginSlice";
import { cartReducer } from "./slices/cartSlice";
import { searchReducer } from "./slices/searchSlice";
import { productReducer } from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        cartItem:cartReducer,
        query:searchReducer,
        product:productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch