import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CheckoutFormValues {
    name: string;
    email: string;
    phone: string;
    address: string;
    additional: string;
    paymentMethod: string;
}

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormValues>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ addOrder, { isSuccess, isError, error} ] = useCreateOrderMutation();

    useEffect(() => {
        if (isError) {
            toast.error('Something Went Wrong');
        } else if (isSuccess) {
            toast.success("Product Added successfully");
        }
    }, [isError, isSuccess, error]);
    const cart = useAppSelector(state=>state.cart.cart)
    const totalPriceWithOutVat = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const vatRate = 0.15;
    const vatAmount = totalPriceWithOutVat * vatRate;

    const totalPriceWithVat = totalPriceWithOutVat + vatAmount;
    const products = cart.map(product => product.id)
    
    const onSubmit: SubmitHandler<CheckoutFormValues> = async (data) => {
        console.log(data);
        toast.success("Payment Successful");
        const order = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            totalPrice: totalPriceWithVat,
            products: products
        }
        await addOrder(order)
        dispatch(clearCart());
        navigate("/thank-you");
    };

    return (
        <section className="py-8 antialiased">
            <div className="mx-auto max-w-7xl px-4 lg:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Checkout
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                        <div className="min-w-0 flex-1 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Delivery Details
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                        >
                                            Your name
                                        </label>
                                        <Input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <p className="text-red-500">Name is required</p>}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                        >
                                            Your email
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="name@email.com"
                                            {...register("email", { required: true })}
                                        />
                                        {errors.email && <p className="text-red-500">Email is required</p>}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                        >
                                            Your Phone
                                        </label>
                                        <Input
                                            type="phone"
                                            placeholder="+880 19-00000000"
                                            {...register("phone", { required: true })}
                                        />
                                        {errors.phone && <p className="text-red-500">Phone number is required</p>}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="address"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                        >
                                            Your Address
                                        </label>
                                        <Input
                                            type="text"
                                            placeholder="Enter your Address"
                                            {...register("address", { required: true })}
                                        />
                                        {errors.address && <p className="text-red-500">Address is required</p>}
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="additional"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                        >
                                            Additional Information <span className="text-slate-600 font-normal">(optional)</span>
                                        </label>
                                        <Textarea
                                            rows={5}
                                            placeholder="Type your message here."
                                            {...register("additional")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Payment
                                </h3>
                                <RadioGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="rounded-lg border p-4 px-4">
                                        <div className="flex gap-2">
                                            <RadioGroupItem
                                                value="Cash on Delivery"
                                                id="option-two"
                                                className="cursor-pointer"
                                                {...register("paymentMethod", { required: true })}
                                            />
                                            <Label
                                                htmlFor="option-two"
                                                className="cursor-pointer"
                                            >
                                                Cash on Delivery
                                            </Label>
                                        </div>
                                        <p className="mt-1 text-xs font-normal text-gray-500">
                                            +$0 payment processing fee
                                        </p>
                                    </div>
                                </RadioGroup>
                                {errors.paymentMethod && <p className="text-red-500">Payment method is required</p>}
                            </div>
                            <div className="space-y-3">
                                <Button variant={"default"} className="w-full" type="submit">
                                    Proceed to Payment
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;
