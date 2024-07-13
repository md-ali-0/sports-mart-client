import BrandFilter from "@/components/brand-filter";
import CategoryFilter from "@/components/category-filter";
import Loading from "@/components/loading";
import Pagination from "@/components/pagination-all-products";
import ProductCard from "@/components/product-card";
import RatingFilter from "@/components/rating-filter";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { IProduct } from "@/interface/IProduct";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { ChangeEvent, useEffect, useState } from "react";
import { LuFilter, LuListOrdered, LuSearch } from "react-icons/lu";
import { useSearchParams } from 'react-router-dom';
import { toast } from "sonner";

const AllProducts = () => {
    const [searchParams] = useSearchParams();

    const categoryParams = searchParams.get('category');

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [category, setCategory] = useState<string | undefined>(categoryParams || undefined);
    const [brand, setBrand] = useState<string | undefined>(undefined);
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [rating, setRating] = useState<number | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const [sort, setSort] = useState<string | undefined>(undefined);

    const query = {
        searchTerm,
        limit: productsPerPage,
        sort,
        page: currentPage,
        category,
        brand,
        rating,
    };
    const { data, isError, isLoading, isSuccess, error } =
        useGetAllProductsQuery(query, { pollingInterval: 30000 });

    useEffect(() => {
        if (isError) {
            toast.error("Something Went Wrong");
        }
    }, [isError, isSuccess, error]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const handleFilterChange = (checked: boolean | string, value: string) => {
        if (checked) {
            setCategory(value);
        } else setCategory(undefined);
    };
    const handleBrandChange = (checked: boolean | string, value: string) => {
        if (checked) {
            setBrand(value);
        } else setBrand(undefined);
    };

    const handleRatingChange = (value: number) => {
        if (value > 0) {
            setRating(value);
        } else setRating(undefined);
    };

    const handleClearFilters = () => {
        setSearchTerm("");
        setCategory(undefined);
        setBrand(undefined);
        setRating(undefined);
        setSort(undefined);
        setCurrentPage(1);
    };

    if (isLoading) {
        return <Loading/>
    }

    const totalPages = Math.ceil(data.data.length / productsPerPage);

    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">All Products</h1>
                <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
                    <div className="relative w-40 md:w-auto">
                        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="pl-10 pr-4 py-2 rounded-md"
                        />
                    </div>
                    <Button
                        onClick={() => setShowFilter(!showFilter)}
                        variant="outline"
                        className="md:hidden shrink-0"
                    >
                        <LuFilter className="w-4 h-4 md:mr-2" />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="shrink-0">
                                <LuListOrdered className="w-4 h-4 md:mr-2" />
                                <span className="hidden sm:block">Sort by</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[200px]">
                            <DropdownMenuRadioGroup
                                value={sort}
                                onValueChange={setSort}
                            >
                                <DropdownMenuRadioItem value="-price">
                                    Price: Low to High
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="price">
                                    Price: High to Low
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div
                    className="md:col-span-4 lg:col-span-3 rounded-lg border p-6 md:!block"
                    style={{ display: `${showFilter ? "block" : "none"}` }}
                >
                    <h2 className="text-xl font-semibold mb-4">Filters</h2>
                    <div className="grid gap-6">
                        <CategoryFilter
                            category={category}
                            handleFilterChange={handleFilterChange}
                        />
                        <BrandFilter
                            brand={brand}
                            handleBrandChange={handleBrandChange}
                        />
                        <RatingFilter
                            rating={rating}
                            handleRatingChange={handleRatingChange}
                        />

                        <div className="flex justify-end gap-2">
                            <Button
                                variant="outline"
                                onClick={handleClearFilters}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-8 lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {data?.data.map((product: IProduct) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
                <div className="md:col-span-12">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
