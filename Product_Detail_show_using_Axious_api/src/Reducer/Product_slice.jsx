
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initial: [

    ],
    card:[

    ],
    qunatity:0,
    price:0


}

const Product_slice = createSlice({
    name: "Sotre_Data",
    initialState,
    reducers: {
        get_api_data: (state,actions) => {
            state.initial = actions.payload


        },
       
        Send_data_add_to_card: (state, action) => {
            const productToAdd = action.payload;
            const existingProductIndex = state.card.findIndex(product => product.id === productToAdd.id);

            if (existingProductIndex !== -1) {
                // If the product already exists in the card, update its quantity and price
                state.card[existingProductIndex].price += productToAdd.price;
                state.card[existingProductIndex].quantity++;
                state.price += productToAdd.price; // Update total price
                // state.price += productToAdd.price
               
            } else {
                // If the product doesn't exist, add it to the card
                state.card.push({ ...productToAdd, quantity: 1 });
                state.price += productToAdd.price; // Update total price
             
            }
        }
       
       
       
    }})


export const {get_api_data,Send_data_add_to_card} = Product_slice.actions
export default Product_slice.reducer 
