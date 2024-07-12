import Pagination from "@/components/pagination-all-products";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IProduct } from "@/interface/IProduct";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { ChangeEvent, useEffect, useState } from "react";
import { LuFilter, LuListOrdered, LuSearch } from "react-icons/lu";
import { toast } from "sonner";

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [category, setCategory] = useState<string>();
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const [sortOrder, setSortOrder] = useState<string>("");

    const query = {
        searchTerm,
        limit: productsPerPage,
        sort: sortOrder,
        page: currentPage,
        category,
    };
    const { data, isError, isLoading, isSuccess, error } =
        useGetAllProductsQuery(query);

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
    if (isLoading) {
        return <div>Loading...</div>;
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
                                value={sortOrder}
                                onValueChange={setSortOrder}
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
                    <h2 className="text-lg font-semibold mb-4">Filters</h2>
                    <div className="grid gap-6">
                        <div>
                            <h3 className="text-base font-semibold mb-2">
                                Category
                            </h3>
                            <div className="grid gap-2">
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={category === "basketball"}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                checked,
                                                "basketball"
                                            )
                                        }
                                    />
                                    Basketball
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={category === "fitness"}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                checked,
                                                "fitness"
                                            )
                                        }
                                    />
                                    Fitness
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={category === "golf"}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                checked,
                                                "golf"
                                            )
                                        }
                                    />
                                    Golf
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={category === "yoga"}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                checked,
                                                "yoga"
                                            )
                                        }
                                    />
                                    Yoga
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={category === "football"}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                checked,
                                                "football"
                                            )
                                        }
                                    />
                                    Football
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={category === "tennis"}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                checked,
                                                "tennis"
                                            )
                                        }
                                    />
                                    Tennis
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={category === "swimming"}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                checked,
                                                "swimming"
                                            )
                                        }
                                    />
                                    Swimming
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={category === "hiking"}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                checked,
                                                "hiking"
                                            )
                                        }
                                    />
                                    Hiking
                                </Label>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold mb-2">
                                Brand
                            </h3>
                            {/* <div className="grid gap-2">
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={filters.brand.includes(
                                            "Spalding"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "brand",
                                                checked
                                                    ? [
                                                          ...filters.brand,
                                                          "Spalding",
                                                      ]
                                                    : filters.brand.filter(
                                                          (b) =>
                                                              b !== "Spalding"
                                                      )
                                            )
                                        }
                                    />
                                    Spalding
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={filters.brand.includes("Nike")}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "brand",
                                                checked
                                                    ? [...filters.brand, "Nike"]
                                                    : filters.brand.filter(
                                                          (b) => b !== "Nike"
                                                      )
                                            )
                                        }
                                    />
                                    Nike
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={filters.brand.includes(
                                            "Riddell"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "brand",
                                                checked
                                                    ? [
                                                          ...filters.brand,
                                                          "Riddell",
                                                      ]
                                                    : filters.brand.filter(
                                                          (b) => b !== "Riddell"
                                                      )
                                            )
                                        }
                                    />
                                    Riddell
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={filters.brand.includes(
                                            "Manduka"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "brand",
                                                checked
                                                    ? [
                                                          ...filters.brand,
                                                          "Manduka",
                                                      ]
                                                    : filters.brand.filter(
                                                          (b) => b !== "Manduka"
                                                      )
                                            )
                                        }
                                    />
                                    Manduka
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={filters.brand.includes(
                                            "Wilson"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "brand",
                                                checked
                                                    ? [
                                                          ...filters.brand,
                                                          "Wilson",
                                                      ]
                                                    : filters.brand.filter(
                                                          (b) => b !== "Wilson"
                                                      )
                                            )
                                        }
                                    />
                                    Wilson
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer text-[15px] font-normal">
                                    <Checkbox
                                        checked={filters.brand.includes(
                                            "Schwinn"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "brand",
                                                checked
                                                    ? [
                                                          ...filters.brand,
                                                          "Schwinn",
                                                      ]
                                                    : filters.brand.filter(
                                                          (b) => b !== "Schwinn"
                                                      )
                                            )
                                        }
                                    />
                                    Schwinn
                                </Label>
                            </div> */}
                        </div>
                        <div>
                            <h3 className="text-base font-semibold mb-2">
                                Rating
                            </h3>
                            {/* <Select
                                value={filters.rating.toString()}
                                onValueChange={(value) =>
                                    handleFilterChange("rating", Number(value))
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select rating" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0">
                                        Any rating
                                    </SelectItem>
                                    <SelectItem value="4">
                                        4 stars and above
                                    </SelectItem>
                                    <SelectItem value="3">
                                        3 stars and above
                                    </SelectItem>
                                    <SelectItem value="2">
                                        2 stars and above
                                    </SelectItem>
                                    <SelectItem value="1">
                                        1 star and above
                                    </SelectItem>
                                </SelectContent>
                            </Select> */}
                        </div>
                        {/* <div className="flex justify-end gap-2">
                            <Button
                                variant="outline"
                                onClick={handleClearFilters}
                            >
                                Clear Filters
                            </Button>
                        </div> */}
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
