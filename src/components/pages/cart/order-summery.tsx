import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrderSummery = () => {
    return (
        <div className="space-y-4 rounded-lg border p-4 sm:p-6">
            <p className="text-xl font-semibold text-gray-900">Order summary</p>
            <div className="space-y-4">
                <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                            Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                            $7,592.00
                        </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                            Savings
                        </dt>
                        <dd className="text-base font-medium text-green-600">
                            -$299.00
                        </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                            Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                            $99
                        </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                            Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                            $799
                        </dd>
                    </dl>
                </div>
                <dl className="flex items-center justify-between gap-4 border-t pt-2 ">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">
                        $8,191.00
                    </dd>
                </dl>
            </div>
            <Button asChild className="w-full">
                <Link to={"/checkout"}>Proceed to Checkout</Link>
            </Button>

            <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500"> or </span>
                <Link
                    to={"/all-products"}
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

export default OrderSummery;
