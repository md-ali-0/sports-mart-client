import { FC } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface RatingFilterProps {
    rating: number | undefined;
    handleRatingChange: (value: number) => void
}

const RatingFilter : FC<RatingFilterProps> = ({rating, handleRatingChange}) => {
    return (
        <div>
            <h3 className="text-base font-semibold mb-2">Rating</h3>
            <Select
                value={String(rating)}
                onValueChange={(value) => handleRatingChange(Number(value))}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={String(undefined)}>
                        Any rating
                    </SelectItem>
                    <SelectItem value="4">4 stars and above</SelectItem>
                    <SelectItem value="3">3 stars and above</SelectItem>
                    <SelectItem value="2">2 stars and above</SelectItem>
                    <SelectItem value="1">1 star and above</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default RatingFilter;
