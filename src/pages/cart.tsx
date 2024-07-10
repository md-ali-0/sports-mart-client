import CartProduct from "@/components/pages/cart/cart-product";
import Coupon from "@/components/pages/cart/coupon";
import OrderSummery from "@/components/pages/cart/order-summery";

const Cart = () => {
    return (
        <section className="py-8 antialiased">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Cart
                </h2>
                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            <CartProduct />
                        </div>
                    </div>
                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <OrderSummery />
                        <Coupon />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
