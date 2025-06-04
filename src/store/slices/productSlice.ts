import { ProductsType } from "@/components/types/products";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  product: ProductsType[];
  loading: boolean;
  error: string;
}

const initialState: ProductState = {
  product: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk<ProductsType[]>(
  "product/fetchdata",
  async () => {
    const response = await fetch(
      "https://car-rent-backend-anii.onrender.com/api/cars?populate=thumbnail&populate=images"
    );
    const data = await response.json();
    console.log("checkoutttttttttt",data)
    return data.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductsType[]>) => {
          state.loading = false;
          state.product = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "somthing went wrong";
      });
  },
});

export const { reducer: productReducer } = productSlice;
