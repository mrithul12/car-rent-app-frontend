import { Car } from "@/components/types/products";
import { BASE_URL } from "@/lib/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarState{
    carData:Car[];
    loading:boolean;
    error:string;
}


export const initialState:CarState={
    carData:[],
    loading:false,
    error:''
}

export const carFetch = createAsyncThunk<Car[]>(
    "product/car",
    async ()=>{
        const response = await fetch(`${BASE_URL}/api/cars`)
        const data = await response.json()
        return data.data
    }

)
  


export const carDataSlice = createSlice({
    name:"cardata",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(carFetch.pending,(state) =>{
            state.loading = true;
        })
        .addCase(carFetch.fulfilled,(state, action:PayloadAction<Car[]>)=>{
            state.loading = false;
            state.carData = action.payload
        })
        .addCase(carFetch.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message || "somthing went wrong"
        })
        

        
    }
})

export const {reducer:carDataReducer} = carDataSlice

