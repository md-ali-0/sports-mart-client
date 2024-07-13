import { IProduct } from "@/interface/IProduct";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { useEffect } from "react";
import { toast } from "sonner";
import ProductCard from "./product-card";
import SkeletonProductCard from "./Skeleton-product-card";

const FeaturedSection = () => {
    const query = {
        sort: '-createdAt',
    };
    const { data, isError, isLoading, isSuccess, error } = useGetAllProductsQuery(query);

    useEffect(() => {
        if (isError) {
            toast.error("Something Went Wrong");
        }
    }, [isError, isSuccess, error]);

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center gap-2 mb-8 md:mb-12">
                    <span className="bg-muted rounded-md px-1.5 py-0.5">
                        Featured
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Featured Products
                    </h2>
                    <p className="text-muted-foreground">
                        Check out our latest and greatest products.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {isLoading 
                        ? Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonProductCard key={index} />
                          ))
                        : data.data.slice(0,4).map((product: IProduct) => (
                            <ProductCard key={product._id} product={product} />
                          ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
