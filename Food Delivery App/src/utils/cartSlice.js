import { createSlice } from "@reduxjs/toolkit";


//this is slice - return an object
const cartSlice = createSlice({
    name: 'cart',        //this is a config
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {

            //Vanilla(older) Redux => DON'T MUTATE STATE returning is not mandatory
            //const newState=[...state];        (Immer js)
            //newState.push(action.payload);
            //return newState;


            //Redux Toolkit
            //We have to mutate the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            // state=[]        //it is a local variable
            // state=["deep"]       it won't work- it not modifies the state it is just adding the reference to it

            //RTK- Either Mutate the existing State or return a new State
            // state.items.length=0;       //immer knows it is global redux state      state is a proxy object
            return { items: [] };      //this new array will be replaced inside originalState
        }
    }
});


//actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;


//reducer
export default cartSlice.reducer;