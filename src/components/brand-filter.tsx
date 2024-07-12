import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FC } from "react";

interface BrandFilterProps {
    brand: string | undefined;
    handleBrandChange: (checked: boolean | string, value: string) => void
}

const BrandFilter : FC<BrandFilterProps> = ({brand, handleBrandChange}) => {
    return (
        <div>
            <h3 className="text-base font-semibold mb-2">Brand</h3>
            <div className="grid gap-2">
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "nike"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "nike")
                        }
                    />
                    Nike
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "adidas"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "adidas")
                        }
                    />
                    Adidas
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "under-armour"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "under-armour")
                        }
                    />
                    Under Armour
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "puma"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "puma")
                        }
                    />
                    Puma
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "reebok"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "reebok")
                        }
                    />
                    Reebok
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "wilson"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "wilson")
                        }
                    />
                    Wilson
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "columbia"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "columbia")
                        }
                    />
                    Columbia
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "schwinn"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "schwinn")
                        }
                    />
                    Schwinn
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={brand === "mizuno"}
                        onCheckedChange={(checked) =>
                            handleBrandChange(checked, "mizuno")
                        }
                    />
                    Mizuno
                </Label>
            </div>
        </div>
    );
};

export default BrandFilter;
