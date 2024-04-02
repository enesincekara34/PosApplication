import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        total:0
    },
    reducers:{
        addProduct:(state,action) =>{
            const findCartItem = state.cartItems.find((item)=>item._id == action.payload._id);
            if(findCartItem){
                findCartItem.quantity+=1
            }
            else{
                state.cartItems.push(action.payload)
            }

            state.total += action.payload.price
            //state.cartItems.push(action.payload)
        },

        decrese:(state, action) => {
            const findCartItem = state.cartItems.find((item)=> item._id === action.payload._id);
            if (findCartItem.quantity<=1) {
                state.cartItems = state.cartItems.filter((item)=>item._id !== action.payload._id)
                state.total -= findCartItem.price
            }

            else{
                findCartItem.quantity-=1
                state.total -= action.payload.price
            }

            



        },

        addCartProduct:(state,action) => {
            const findCartItem = state.cartItems.find((item)=>item._id == action.payload._id);
            if (findCartItem) {
                findCartItem.quantity+=1
            }
        },

        deleteSingleProduct:(state,action) => {
            const findCartItem = state.cartItems.find((item)=>item._id == action.payload._id);
            if (findCartItem) {
                let newCartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
                state.cartItems= newCartItems
                state.total -= (action.payload.price*action.payload.quantity)
            }

            

        },

        deleteCartProduct:(state,action) => {
            if (window.confirm("Ürünü Silmek İstediğinizden Emin Misiniz ?")) {
                state.cartItems = []
                state.total=0
            }

            


        }
    }
})


export default cartSlice.reducer;
export const {addProduct, decrese, addCartProduct, deleteCartProduct, deleteSingleProduct} = cartSlice.actions;