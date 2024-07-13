import { createSlice } from "@reduxjs/toolkit";

export interface CartProduct {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
}

export interface CartState {
    cart: CartProduct[] | null;
}

const initialState = {
    cart : null
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    }
})

export default cartSlice.reducer