import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

const Coupon : FC = () => {
    return (
        <div className="space-y-4 rounded-lg border p-4 shadow-sm sm:p-6">
            <form className="space-y-4">
                <div>
                    <label
                        htmlFor="voucher"
                        className="mb-2 block text-sm font-medium text-gray-900"
                    >
                        {" "}
                        Do you have a voucher or gift card?{" "}
                    </label>
                    <Input type="text" />
                </div>
                <Button type="submit" variant={"default"} className="w-full">
                    Apply Code
                </Button>
            </form>
        </div>
    );
};

export default Coupon;
