import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import config from "@/config";
import {
    decrementQuantity,
    CartProduct as ICartProduct,
    incrementQuantity,
    removeProduct,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { LuMinus, LuPlus, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

interface CartProductProps {
    product: ICartProduct;
}

const CartProduct: FC<CartProductProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const [stock, setStock] = useState(product.stock - product.quantity);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setQuantity(product.quantity);
        setStock(product.stock - product.quantity);
    }, [product.quantity, product.stock]);

    const deleteCartProduct = () => {
        dispatch(removeProduct(product.id));
    };

    const handleIncrementQuantity = () => {
        if (quantity < product.stock) {
            dispatch(incrementQuantity(product.id));
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const handleDecrementQuantity = () => {
        if (quantity > 1) {
            dispatch(decrementQuantity(product.id));
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity > 0 && newQuantity <= product.stock) {
            const quantityDifference = newQuantity - quantity;
            if (quantityDifference > 0) {
                for (let i = 0; i < quantityDifference; i++) {
                    dispatch(incrementQuantity(product.id));
                }
            } else {
                for (let i = 0; i < -quantityDifference; i++) {
                    dispatch(decrementQuantity(product.id));
                }
            }
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="rounded-lg border p-4 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                    <img
                        className="object-cover w-20 dark:hidden"
                        src={`${config.host}/${product.image}`}
                        alt={product.name}
                    />
                    <img
                        className="hidden object-cover w-20 dark:block"
                        src={`${config.host}/${product.image}`}
                        alt={product.name}
                    />
                </a>
                <label htmlFor="counter-input" className="sr-only">
                    Choose quantity:
                </label>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center gap-1">
                        <Button
                            variant={"outline"}
                            size={"icon"}
                            onClick={handleDecrementQuantity}
                        >
                            <LuMinus size={15} className="text-gray-900" />
                        </Button>
                        <Input
                            type="number"
                            className="w-14"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <Button
                            variant={"outline"}
                            size={"icon"}
                            onClick={handleIncrementQuantity}
                        >
                            <LuPlus size={15} className="text-gray-900" />
                        </Button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900">
                            ${quantity * product.price}
                        </p>
                    </div>
                </div>
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <Link
                        to={`/product-details/${product.id}`}
                        className="text-base font-medium text-gray-900 hover:underline"
                    >
                        {product.name}
                    </Link>
                    <div className="md:w-32">
                        <p className="text-sm">
                            Stock: {stock}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={deleteCartProduct}
                            variant={"outline"}
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500 gap-2"
                        >
                            <LuX />
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
