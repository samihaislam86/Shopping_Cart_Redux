import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}

const addToCart=createSlice({
    name:'cart',
    initialState,
    reducers:{
        additem:(state,action)=>{
            const existing=state.items.find(item=>item.id===action.payload.id);
            if (existing){
                existing.quantity+=1
            }else{
                state.items.push({ ...action.payload, quantity: 1 });
            }
            
        }

    }
})

export const {additem}=addToCart.actions
export default addToCart.reducer