import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

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
                // existingProduct.quantity += action.payload.quantity;
                toast.error('Product Already Added to Cart')
            } else {
                state.cart.push(action.payload);
                toast.success('Product Added to Cart')
            }
        },
        removeProduct : (state, action: PayloadAction<string>)=>{
            const remainingProducts = state.cart.filter((product) => product.id !== action.payload)
            state.cart = remainingProducts
        }
    },
});

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer;
