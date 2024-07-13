import Loading from "@/components/loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import config from "@/config";
import { addProduct } from "@/redux/features/cart/cartSlice";
import { useGetSingleProductQuery } from "@/redux/features/products/productsApi";
import { useAppDispatch } from "@/redux/hooks";
import { Rating, Star } from "@smastrom/react-rating";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const SingleProduct = () => {
    const { id } = useParams();
    const { data, isError, isLoading, isSuccess, error } =
        useGetSingleProductQuery(id);

    const dispatch = useAppDispatch()

    const addToCart = async ()=>{
        const product = {
            id: data.data._id,
            name: data.data.name,
            image: data.data.image,
            quantity: 1,
            price: data.data.price,
        }
        dispatch(addProduct(product))
    }

    useEffect(() => {
        if (isError) {
            toast.error("Something Went Wrong");
        }
    }, [isError, isSuccess, error]);

    if (isLoading) {
        return <Loading />;
    }
    


    return (
        <div className="container">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start mx-auto py-6">
                <div className="grid gap-4 md:gap-10 items-start">
                    <div className="hidden md:flex items-start border rounded-lg">
                        <img
                            src={`${config.host}/${data.data.image}`}
                            alt={data.data.name}
                            className="object-fill rounded-lg overflow-hidden h-96 w-auto mx-auto"
                        />
                    </div>
                    <div className="md:hidden">
                        <img
                            src={`${config.host}/${data.data.image}`}
                            alt={data.data.name}
                            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
                        />
                    </div>
                </div>
                <div className="grid gap-4 md:gap-10 items-start">
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl lg:text-4xl">
                            {data.data.name}
                        </h1>
                        <div className="flex items-center gap-4">
                            <Rating
                                value={data.data.rating}
                                halfFillMode="box"
                                itemStyles={{
                                    itemShapes: Star,
                                    activeFillColor: "#18181B",
                                    inactiveFillColor: "#6E6E77",
                                }}
                                style={{ width: "120px" }}
                                readOnly
                            />
                            <div className="text-sm text-muted-foreground">
                                {data.data.rating} (1 reviews)
                            </div>
                        </div>
                        <div className="grid gap-4 text-sm leading-loose">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">Category:</div>
                                    <div>{data.data.category}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">Brand:</div>
                                    <div>{data.data.brand}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">
                                        Availability:
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className="rounded-full px-2 py-1"
                                    >
                                        {data.data.stock > 0
                                            ? " In Stock"
                                            : "Out of Stock"}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="text-3xl font-bold">
                                ${data.data.price}
                            </div>
                            <div className="flex items-center gap-4 md:w-1/2">
                                <Button onClick={addToCart} size="lg" className="w-full" disabled={data.data.stock <=0 }>Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <ul className="flex border-b">
                    <li className="text-gray-500 rounded-t-md font-semibold text-sm bg-muted hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
                        Description
                    </li>
                </ul>

                <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800">
                        Product Description :
                    </h3>
                    <p className="text-sm text-gray-500 mt-4">
                        {data.data.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
