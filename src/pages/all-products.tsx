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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { IProduct } from "@/interface/IProduct";
import { ChangeEvent, useMemo, useState } from "react";
import { LuFilter, LuListOrdered, LuSearch } from "react-icons/lu";

interface Filters {
    category: string[];
    brand: string[];
    rating: number;
}

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [filters, setFilters] = useState<Filters>({
        category: [],
        brand: [],
        rating: 0,
    });
    const [sortOrder, setSortOrder] = useState<string>("priceAsc");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 6;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const products: IProduct[] = [
        {
            _id: "",
            name: "Basketball Hoop",
            category: "Basketball",
            price: 299.99,
            brand: "Spalding",
            rating: 3.8,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Running Shoes",
            category: "Running",
            price: 79.99,
            brand: "Nike",
            rating: 5,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Football Helmet",
            category: "Football",
            price: 149.99,
            brand: "Riddell",
            rating: 4,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Yoga Mat",
            category: "Yoga",
            price: 39.99,
            brand: "Manduka",
            rating: 3.7,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Tennis Racket",
            category: "Tennis",
            price: 99.99,
            brand: "Wilson",
            rating: 3.9,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Cycling Bike",
            category: "Cycling",
            price: 599.99,
            brand: "Schwinn",
            rating: 4.6,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Golf Club",
            category: "Golf",
            price: 149.99,
            brand: "Callaway",
            rating: 4.1,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Boxing Gloves",
            category: "Boxing",
            price: 49.99,
            brand: "Everlast",
            rating: 4.4,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Hiking Backpack",
            category: "Hiking",
            price: 89.99,
            brand: "Osprey",
            rating: 4.3,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
        {
            _id: "",
            name: "Swimming Goggles",
            category: "Swimming",
            price: 19.99,
            brand: "Speedo",
            rating: 4.6,
            image: "/placeholder.svg",
            description: "",
            stock: 0
        },
    ];

    const filteredProducts = useMemo(() => {
        let filtered = products;
        if (searchTerm) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (filters.category.length > 0) {
            filtered = filtered.filter((product) =>
                filters.category.includes(product.category)
            );
        }
        if (filters.brand.length > 0) {
            filtered = filtered.filter((product) =>
                filters.brand.includes(product.brand)
            );
        }
        if (filters.rating > 0) {
            filtered = filtered.filter(
                (product) => Number(product.rating) >= Number(filters.rating)
            );
        }
        if (sortOrder === "priceAsc") {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "priceDesc") {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }
        return filtered;
    }, [searchTerm, filters, sortOrder, products]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFilterChange = (
        type: keyof Filters,
        value: Filters[keyof Filters]
    ) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [type]: value,
        }));
        setCurrentPage(1);
    };

    // const handleSortChange = (value: string) => {
    //     setSortOrder(value);
    // };

    const handleClearFilters = () => {
        setFilters({
            category: [],
            brand: [],
            rating: 0,
        });
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * productsPerPage;
        return filteredProducts.slice(startIndex, startIndex + productsPerPage);
    }, [filteredProducts, currentPage, productsPerPage]);

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
                                <DropdownMenuRadioItem value="priceAsc">
                                    Price: Low to High
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="priceDesc">
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
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox
                                        checked={filters.category.includes(
                                            "Basketball"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "category",
                                                checked
                                                    ? [
                                                          ...filters.category,
                                                          "Basketball",
                                                      ]
                                                    : filters.category.filter(
                                                          (c) =>
                                                              c !== "Basketball"
                                                      )
                                            )
                                        }
                                    />
                                    Basketball
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox
                                        checked={filters.category.includes(
                                            "Running"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "category",
                                                checked
                                                    ? [
                                                          ...filters.category,
                                                          "Running",
                                                      ]
                                                    : filters.category.filter(
                                                          (c) => c !== "Running"
                                                      )
                                            )
                                        }
                                    />
                                    Running
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox
                                        checked={filters.category.includes(
                                            "Football"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "category",
                                                checked
                                                    ? [
                                                          ...filters.category,
                                                          "Football",
                                                      ]
                                                    : filters.category.filter(
                                                          (c) =>
                                                              c !== "Football"
                                                      )
                                            )
                                        }
                                    />
                                    Football
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox
                                        checked={filters.category.includes(
                                            "Yoga"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "category",
                                                checked
                                                    ? [
                                                          ...filters.category,
                                                          "Yoga",
                                                      ]
                                                    : filters.category.filter(
                                                          (c) => c !== "Yoga"
                                                      )
                                            )
                                        }
                                    />
                                    Yoga
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox
                                        checked={filters.category.includes(
                                            "Tennis"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "category",
                                                checked
                                                    ? [
                                                          ...filters.category,
                                                          "Tennis",
                                                      ]
                                                    : filters.category.filter(
                                                          (c) => c !== "Tennis"
                                                      )
                                            )
                                        }
                                    />
                                    Tennis
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox
                                        checked={filters.category.includes(
                                            "Cycling"
                                        )}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange(
                                                "category",
                                                checked
                                                    ? [
                                                          ...filters.category,
                                                          "Cycling",
                                                      ]
                                                    : filters.category.filter(
                                                          (c) => c !== "Cycling"
                                                      )
                                            )
                                        }
                                    />
                                    Cycling
                                </Label>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold mb-2">
                                Brand
                            </h3>
                            <div className="grid gap-2">
                                <Label className="flex items-center gap-2 font-normal">
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
                                <Label className="flex items-center gap-2 font-normal">
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
                                <Label className="flex items-center gap-2 font-normal">
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
                                <Label className="flex items-center gap-2 font-normal">
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
                                <Label className="flex items-center gap-2 font-normal">
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
                                <Label className="flex items-center gap-2 font-normal">
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
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold mb-2">
                                Rating
                            </h3>
                            <Select
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
                            </Select>
                        </div>
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
                        {paginatedProducts.map((product) => (
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
