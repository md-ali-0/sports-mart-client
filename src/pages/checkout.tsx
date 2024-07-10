import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent } from "react";
import { toast } from "sonner";

const Checkout = () => {
    const onSubmit = (e: FormEvent<HTMLElement>)=>{
        e.preventDefault()
        toast.success('Payment Successful')
    }
    return (
        <section className="py-8 antialiased">
            <div className="mx-auto max-w-7xl px-4 lg:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Checkout
                </h2>
                <form onSubmit={onSubmit}>
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                        <div className="min-w-0 flex-1 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Delivery Details
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="your_name"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                        >
                                            Your name
                                        </label>
                                        <Input
                                            type="text"
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="your_email"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                        >
                                            Your email
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="name@email.com"
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 flex items-center gap-2">
                                            <label
                                                htmlFor="select-country-input-3"
                                                className="block text-sm font-medium text-gray-900"
                                            >
                                                Country
                                            </label>
                                        </div>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Country" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="United States">
                                                    United States
                                                </SelectItem>
                                                <SelectItem value="Australia">
                                                    Australia
                                                </SelectItem>
                                                <SelectItem value="France">
                                                    France
                                                </SelectItem>
                                                <SelectItem value="Spain">
                                                    Spain
                                                </SelectItem>
                                                <SelectItem value="United Kingdom">
                                                    United Kingdom
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <div className="mb-2 flex items-center gap-2">
                                            <label
                                                htmlFor="select-city-input-3"
                                                className="block text-sm font-medium text-gray-900"
                                            >
                                                City
                                            </label>
                                        </div>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select City" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="San Francisco">
                                                    San Francisco
                                                </SelectItem>
                                                <SelectItem value="New York">
                                                    New York
                                                </SelectItem>
                                                <SelectItem value="Los Angeles">
                                                    Los Angeles
                                                </SelectItem>
                                                <SelectItem value="Chicago">
                                                    Chicago
                                                </SelectItem>
                                                <SelectItem value="Houston">
                                                    Houston
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-gray-900"
                                        >
                                            Additional Information
                                        </label>
                                        <Textarea
                                            rows={5}
                                            placeholder="Type your message here."
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
                                <RadioGroup
                                    defaultValue="option-one"
                                    className="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div className="rounded-lg border  p-4 px-4">
                                        <div className="flex gap-2">
                                            <RadioGroupItem
                                                value="option-one"
                                                id="option-one"
                                                className="cursor-pointer"
                                            />
                                            <Label htmlFor="option-one" className="cursor-pointer">
                                                Credit Card
                                            </Label>
                                        </div>
                                        <p className="mt-1 text-xs font-normal text-gray-500">
                                            Pay with your credit card
                                        </p>
                                    </div>
                                    <div className="rounded-lg border  p-4 px-4">
                                        <div className="flex gap-2">
                                            <RadioGroupItem
                                                value="option-two"
                                                id="option-two"
                                                className="cursor-pointer"
                                            />
                                            <Label htmlFor="option-two" className="cursor-pointer">
                                                Payment on delivery
                                            </Label>
                                        </div>
                                        <p className="mt-1 text-xs font-normal text-gray-500">
                                            +$15 payment processing fee
                                        </p>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="space-y-3">
                                <Button variant={"default"} className="w-full">
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
