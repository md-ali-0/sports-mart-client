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
import { ChangeEvent, useMemo, useState } from "react";
import { LuFilter, LuListOrdered, LuSearch, LuStar } from "react-icons/lu";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    brand: string;
    rating: number;
    image: string;
}

interface Filters {
    category: string[];
    price: { min: number; max: number };
    brand: string[];
    rating: number;
}

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [filters, setFilters] = useState<Filters>({
        category: [],
        price: { min: 0, max: 1000 },
        brand: [],
        rating: 0,
    });
    const [sortOrder, setSortOrder] = useState<string>("priceAsc");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const products: Product[] = [
        {
            id: 1,
            name: "Basketball Hoop",
            category: "Basketball",
            price: 299.99,
            brand: "Spalding",
            rating: 4.8,
            image: "/placeholder.svg",
        },
        {
            id: 2,
            name: "Running Shoes",
            category: "Running",
            price: 79.99,
            brand: "Nike",
            rating: 4.5,
            image: "/placeholder.svg",
        },
        {
            id: 3,
            name: "Football Helmet",
            category: "Football",
            price: 149.99,
            brand: "Riddell",
            rating: 4.2,
            image: "/placeholder.svg",
        },
        {
            id: 4,
            name: "Yoga Mat",
            category: "Yoga",
            price: 39.99,
            brand: "Manduka",
            rating: 4.7,
            image: "/placeholder.svg",
        },
        {
            id: 5,
            name: "Tennis Racket",
            category: "Tennis",
            price: 99.99,
            brand: "Wilson",
            rating: 4.3,
            image: "/placeholder.svg",
        },
        {
            id: 6,
            name: "Cycling Bike",
            category: "Cycling",
            price: 599.99,
            brand: "Schwinn",
            rating: 4.6,
            image: "/placeholder.svg",
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
        if (filters.price.min > 0 || filters.price.max < 1000) {
            filtered = filtered.filter(
                (product) =>
                    product.price >= filters.price.min &&
                    product.price <= filters.price.max
            );
        }
        if (filters.brand.length > 0) {
            filtered = filtered.filter((product) =>
                filters.brand.includes(product.brand)
            );
        }
        if (filters.rating > 0) {
            filtered = filtered.filter(
                (product) => product.rating >= filters.rating
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
    };

    const handleFilterChange = (
        type: keyof Filters,
        value: Filters[keyof Filters]
    ) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [type]: value,
        }));
    };

    // const handleSortChange = (value: string) => {
    //     setSortOrder(value);
    // };

    const handleClearFilters = () => {
        setFilters({
            category: [],
            price: { min: 0, max: 1000 },
            brand: [],
            rating: 0,
        });
    };
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
                                Price
                            </h3>
                            <div />
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
                                    handleFilterChange(
                                        "rating",
                                        parseFloat(value)
                                    )
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
                <div className="md:col-span-8 lg:col-span-9 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="rounded-lg overflow-hidden border p-2.5"
                            >
                                <img
                                    src="/placeholder.svg"
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="py-2.5 px-2">
                                    <h3 className="text-lg font-semibold mb-2">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center mb-2">
                                        <div className="flex items-center gap-1 text-primary">
                                            <LuStar className="w-5 h-5" />
                                            <span>
                                                {product.rating.toFixed(1)}
                                            </span>
                                        </div>
                                        <span className="text-muted-foreground text-sm ml-2">
                                            ({product.category})
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <Button size="sm">Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
