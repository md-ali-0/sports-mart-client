import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FC } from "react";

interface CategoryFilterProps {
    category: string | undefined | null;
    handleFilterChange: (checked: boolean | string, value: string) => void
}

const CategoryFilter : FC<CategoryFilterProps> = ({category, handleFilterChange}) => {
    return (
        <div>
            <h3 className="text-base font-semibold mb-2">Category</h3>
            <div className="grid gap-2">
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={category === "basketball"}
                        onCheckedChange={(checked) =>
                            handleFilterChange(checked, "basketball")
                        }
                    />
                    Basketball
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={category === "fitness"}
                        onCheckedChange={(checked) =>
                            handleFilterChange(checked, "fitness")
                        }
                    />
                    Fitness
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={category === "golf"}
                        onCheckedChange={(checked) =>
                            handleFilterChange(checked, "golf")
                        }
                    />
                    Golf
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={category === "yoga"}
                        onCheckedChange={(checked) =>
                            handleFilterChange(checked, "yoga")
                        }
                    />
                    Yoga
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={category === "football"}
                        onCheckedChange={(checked) =>
                            handleFilterChange(checked, "football")
                        }
                    />
                    Football
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={category === "tennis"}
                        onCheckedChange={(checked) =>
                            handleFilterChange(checked, "tennis")
                        }
                    />
                    Tennis
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={category === "swimming"}
                        onCheckedChange={(checked) =>
                            handleFilterChange(checked, "swimming")
                        }
                    />
                    Swimming
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer text-[14px] font-normal">
                    <Checkbox
                        checked={category === "hiking"}
                        onCheckedChange={(checked) =>
                            handleFilterChange(checked, "hiking")
                        }
                    />
                    Hiking
                </Label>
            </div>
        </div>
    );
};

export default CategoryFilter;
