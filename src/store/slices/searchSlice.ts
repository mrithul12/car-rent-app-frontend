import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface QueryState{
    query:string
}
const initialState:QueryState = {
    query:""
}

export const querySlice = createSlice({
    name:"query",
    initialState,
    reducers:{
    searchQuery:(state,action:PayloadAction<string>)=>{
        state.query = action.payload;
    }
    }
})

export const {searchQuery} = querySlice.actions
export const {reducer:searchReducer} = querySlice
