import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface CartProduct {
    id: string;
    name: string;
    image: string;
    stock: number;
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
                const updatedQuantity = existingProduct.quantity + action.payload.quantity;
                if (updatedQuantity <= action.payload.stock) {
                    existingProduct.quantity = updatedQuantity
                    toast.success('Product Added to Cart')
                } else {
                    toast.error('Product is out of stock')
                }

            } else {
                state.cart.push(action.payload);
                toast.success('Product Added to Cart')
            }
        },
        removeProduct : (state, action: PayloadAction<string>)=>{
            const remainingProducts = state.cart.filter((product) => product.id !== action.payload)
            state.cart = remainingProducts
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const existingProduct = state.cart.find(product => product.id === action.payload);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const existingProduct = state.cart.find(product => product.id === action.payload);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        },
    },
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer;
