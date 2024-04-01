import { createSlice } from "@reduxjs/toolkit";

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

            //state.cartItems.push(action.payload)
        },

        deleteProduct:(state, action) => {
            const findCartItem = state.cartItems.find((item)=> item._id == action.payload._id);
            if (findCartItem) {
                findCartItem.quantity-=1 && findCartItem.quantity == 0 == []
            }
        }
    }
})


export default cartSlice.reducer;
export const {addProduct, deleteProduct} = cartSlice.actions;