import { ProductsType } from "@/components/types/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface CartItemType extends ProductsType{
  quantity:number
}

interface CartPage {
  cart:CartItemType[];
}

const initialState:CartPage = {
    cart:[]
   
   

}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
      addToCart:(state,action:PayloadAction<CartItemType>)=>{
        const cartItem = action.payload;
        const updateItem = state.cart.some((item)=>item.id===cartItem.id)

        if(!updateItem){
          state.cart.push(cartItem)
        }
      
      },

      incrementQuantity:(state,action)=>{
        const cart = action.payload
        const increment = state.cart.find((item)=>item.id===cart.id)
        if(increment && increment.quantity<5){
          increment.quantity +=1
        }
      },
      decrementQuantity:(state,action)=>{
        const cart = action.payload
        const decrement = state.cart.find((item)=>item.id===cart.id)
        if(decrement && decrement.quantity>1){
          decrement.quantity -= 1
        }
      },
      removeCart:(state,action)=>{
        const removeItem = action.payload
        const updateRemoveCart = state.cart.filter((item)=>item.id!==removeItem.id)
        state.cart = updateRemoveCart
      }

    }
})

export const {addToCart,incrementQuantity,decrementQuantity,removeCart} = cartSlice.actions
export const {reducer:cartReducer} = cartSlice