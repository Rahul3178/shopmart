import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems:[],
    cartItemsCount:0
}


export const CartSlicer= createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            AddToCart:(state,action)=>{
                state.cartItems.push(action.payload);
                state.cartItemsCount=state.cartItems.length;
        }
       

    }
}
    );

    export const {AddToCart}= CartSlicer.actions;
    export default CartSlicer.reducer;