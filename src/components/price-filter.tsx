import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

interface PriceFilterProps {
    minPrice: number | undefined;
    maxPrice: number | undefined;
    handlePriceChange: (e: ChangeEvent<HTMLInputElement>, type: string) => void;
}

const PriceFilter = ({ minPrice, maxPrice, handlePriceChange }: PriceFilterProps) => {
    return (
        <div>
            <h3 className="text-lg font-semibold">Price Range</h3>
            <div className="flex items-center gap-2 mt-4">
                <Input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice ?? ""}
                    onChange={(e) => handlePriceChange(e, "min")}
                    className="w-1/2"
                />
                <Input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice ?? ""}
                    onChange={(e) => handlePriceChange(e, "max")}
                    className="w-1/2"
                />
            </div>
        </div>
    );
};

export default PriceFilter;
