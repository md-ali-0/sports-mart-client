import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import config from "@/config";
import { CartProduct as ICartProduct } from "@/redux/features/cart/cartSlice";
import { FC } from "react";
import { LuX } from "react-icons/lu";

interface CartProductProps {
    product: ICartProduct
}

const CartProduct : FC<CartProductProps> = ({product}) => {
    return (
        <div className="rounded-lg border  p-4 md:p-6">
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
                        <Button variant={"outline"} size={"icon"}>
                            <svg
                                className="h-2.5 w-2.5 text-gray-900"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h16"
                                />
                            </svg>
                        </Button>
                        <Input
                            type="number"
                            className="w-14"
                            defaultValue={product.quantity}
                        />
                        <Button variant={"outline"} size={"icon"}>
                            <svg
                                className="h-2.5 w-2.5 text-gray-900"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </Button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900">
                            ${product.quantity * product.price}
                        </p>
                    </div>
                </div>
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline"
                    >
                        {product.name}
                    </a>
                    <div className="flex items-center gap-4">
                        <Button
                            variant={"outline"}
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500 gap-2"
                        >
                            <LuX/>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
