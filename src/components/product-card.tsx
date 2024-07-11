// import {
//     Rating,
//     Star
// } from "@smastrom/react-rating";
import { LuStar } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const ProductCard = ({ product }) => {
    return (
        <div className="rounded-lg overflow-hidden border p-2.5">
            <img
                src="https://picsum.photos/400"
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-48 rounded-xl object-cover"
            />
            <div className="py-2.5 px-2">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                    <div className="flex items-center gap-1 text-primary">
                        <LuStar className="w-5 h-5" />
                        {/* <Rating
                            value={4}
                            halfFillMode="box"
                            itemStyles={{
                                itemShapes: Star,
                                activeFillColor: "#18181B",
                                inactiveFillColor: '#6E6E77',
                            }}
                            style={{width: "120px"}}
                            readOnly
                        /> */}
                        <span>{product.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-muted-foreground text-sm ml-2">
                        ({product.category})
                    </span>
                </div>
                <div className="flex justify-between items-center py-1">
                    <span className="bg-muted text-gray-800 rounded-md px-1.5 py-0.5">
                        {product.brand}
                    </span>
                    <span>Stock: {"52"}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    Experience the ultimate audio immersion with our premium
                    wireless headphones.
                </p>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold">
                        ${product.price.toFixed(2)}
                    </span>
                    <Button size="sm" asChild>
                        <Link to={"/product-details"}>View Details</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
