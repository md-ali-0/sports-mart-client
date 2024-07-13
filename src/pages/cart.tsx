import CartProduct from "@/components/cart-product";
import OrderSummery from "@/components/order-summery";
import { useAppSelector } from "@/redux/hooks";

const Cart = () => {
    const cartProducts = useAppSelector((state) => state.cart.cart);
    return (
        <section className="py-8 antialiased">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Cart
                </h2>
                {cartProducts.length > 0 ? (
                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {cartProducts.map((product) => (
                                    <CartProduct product={product} />
                                ))}
                            </div>
                        </div>
                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <OrderSummery />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center py-10">
                        <h3 className="text-xl">No Product Found in Cart</h3>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
