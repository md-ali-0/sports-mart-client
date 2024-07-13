import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const OrderSummary: FC = () => {
    const cart = useAppSelector((state) => state.cart.cart);

    const totalPriceWithOutVat = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const vatRate = 0.15;
    const vatAmount = totalPriceWithOutVat * vatRate;

    const totalPriceWithVat = totalPriceWithOutVat + vatAmount;

    const allProductsInStock = cart.every(
        (item) => item.quantity <= item.stock
    );
    const navigate = useNavigate()
    const handleProceedToCheckout = () => {
        toast.success("Proceeding to checkout..." , { duration: 500 })
        setTimeout(() => navigate('/checkout'), 500);
    };

    return (
        <div className="space-y-4 rounded-lg border p-4 sm:p-6">
            <p className="text-xl font-semibold text-gray-900">Order summary</p>
            <div className="space-y-4">
                <div className="space-y-2">
                    {/* Display original price and other details */}
                    {/* ... */}
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                            Total before VAT
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                            ${totalPriceWithOutVat.toFixed(2)}
                        </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                            VAT (15%)
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                            ${vatAmount.toFixed(2)}
                        </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-bold text-gray-900">
                            Total including VAT
                        </dt>
                        <dd className="text-base font-bold text-gray-900">
                            ${totalPriceWithVat.toFixed(2)}
                        </dd>
                    </dl>
                </div>
                <dl className="flex items-center justify-between gap-4 border-t pt-2">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">
                        ${totalPriceWithVat.toFixed(2)}
                    </dd>
                </dl>
            </div>
            <Button
                disabled={!allProductsInStock}
                className="w-full"
                onClick={handleProceedToCheckout}
            >
                Proceed to Checkout
            </Button>
            {!allProductsInStock && (
                <p className="text-sm text-red-600">
                    Some products are out of stock. Proceed to checkout
                    disabled.
                </p>
            )}
            <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500">or</span>
                <Link
                    to="/all-products"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                    Continue Shopping
                    <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default OrderSummary;
