import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CartProduct = () => {
    return (
        <div className="rounded-lg border  p-4 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                    <img
                        className="h-20 w-20 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt="imac image"
                    />
                    <img
                        className="hidden h-20 w-20 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt="imac image"
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
                            defaultValue={1}
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
                            $1,499
                        </p>
                    </div>
                </div>
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline"
                    >
                        PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
                        M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU,
                        Keyboard layout INT
                    </a>
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:hover:text-white"
                        >
                            <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                />
                            </svg>
                            Add to Favorites
                        </button>
                        <Button
                            variant={"outline"}
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                            <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                />
                            </svg>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
