import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
}

export interface CartState {
    cart: CartProduct[];
}

const initialState: CartState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartProduct>) => {
            const existingProduct = state.cart.find(
                (product) => product.id === action.payload.id
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        },
    },
});

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer;
