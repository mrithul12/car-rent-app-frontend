import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
    isActive: boolean;
}
const initialState: LoginState = {
    isActive: false,
};

export const loginSlice = createSlice({
    name: "loginPage",
    initialState,
    reducers: {
        setActive: (state) => {
            state.isActive = true;
        },
        setInActive: (state) => {
            state.isActive = false;
        },
    },
});

export const { setActive, setInActive } = loginSlice.actions;
export const { reducer: loginReducer } = loginSlice;
