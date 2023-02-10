import {createSlice} from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        item:['Banana','Apple','Orange']
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload);

        },
        removeItem:(state)=>{
            state.item.pop();
        },
        clearCart:(state)=>{
            state.item=[];
        },
    }
})
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;