import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon } from "lucide-react";

export default function Component() {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
                <div className="grid gap-4 md:gap-10 items-start">
                    <div className="hidden md:flex items-start">
                        <img
                            src="/placeholder.svg"
                            alt="Product Image"
                            width={600}
                            height={600}
                            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
                        />
                    </div>
                    <div className="md:hidden">
                        <img
                            src="/placeholder.svg"
                            alt="Product Image"
                            width={600}
                            height={600}
                            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
                        />
                    </div>
                </div>
                <div className="grid gap-4 md:gap-10 items-start">
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl lg:text-4xl">
                            Nike Elite Competition Basketball
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-0.5">
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            </div>
                            <div className="text-sm text-muted-foreground">
                                4.3 (125 reviews)
                            </div>
                        </div>
                        <div className="grid gap-4 text-sm leading-loose">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">Category:</div>
                                    <div>Basketball</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">Brand:</div>
                                    <div>Nike</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">
                                        Availability:
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className="rounded-full px-2 py-1"
                                    >
                                        In Stock
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="text-3xl font-bold">$59.99</div>
                            <div className="flex items-center gap-4">
                                <Input
                                    type="number"
                                    min="1"
                                    max="7"
                                    defaultValue="1"
                                    className="w-24"
                                />
                                <Button size="lg">Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs defaultValue="description" className="max-w-6xl mx-auto py-5">
                <TabsList className="grid grid-cols-2 md:w-[400px]">
                    <TabsTrigger
                        value="description"
                        className="relative pb-2.5 transition-colors hover:text-primary data-[state=active]:text-primary data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:bottom-0 data-[state=active]:after:h-[2px] data-[state=active]:after:bg-primary"
                    >
                        Description
                    </TabsTrigger>
                    <TabsTrigger
                        value="reviews"
                        className="relative pb-2.5 transition-colors hover:text-primary data-[state=active]:text-primary data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:bottom-0 data-[state=active]:after:h-[2px] data-[state=active]:after:bg-primary"
                    >
                        Reviews
                    </TabsTrigger>
                </TabsList>
                <div className="hidden md:block border-b"></div>
                <TabsContent value="description">
                    <div className="mt-8">
                        <h3 className="text-lg font-bold text-gray-800">
                            Product Description
                        </h3>
                        <p className="text-sm text-gray-600 mt-4">
                            Step up your footwear game with our premium men's
                            shoes. Designed for comfort and crafted with a
                            contemporary aesthetic, these versatile shoes are a
                            must-have addition to your wardrobe. The supple and
                            breathable materials ensure all-day comfort, making
                            them perfect for everyday wear.
                        </p>
                    </div>
                    <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                        <li>
                            A pair of gray shoes is a wardrobe essential due to
                            its versatility.
                        </li>
                        <li>
                            Available in a wide range of sizes, from extra small
                            to extra large, and even in tall and petite sizes.
                        </li>
                        <li>
                            Easy to maintain, they can be machine-washed and
                            dried on low heat.
                        </li>
                        <li>
                            Personalize them with your own designs, patterns, or
                            embellishments to make them uniquely yours.
                        </li>
                    </ul>
                </TabsContent>
                <TabsContent value="reviews">
                    <div className="mt-8">
                        <h3 className="text-lg font-bold text-gray-800">
                            Product Reviews
                        </h3>
                        <p className="text-sm text-gray-600 mt-4">
                            Step up your footwear game with our premium men's
                            shoes. Designed for comfort and crafted with a
                            contemporary aesthetic, these versatile shoes are a
                            must-have addition to your wardrobe. The supple and
                            breathable materials ensure all-day comfort, making
                            them perfect for everyday wear.
                        </p>
                    </div>
                    <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                        <li>
                            A pair of gray shoes is a wardrobe essential due to
                            its versatility.
                        </li>
                        <li>
                            Available in a wide range of sizes, from extra small
                            to extra large, and even in tall and petite sizes.
                        </li>
                        <li>
                            Easy to maintain, they can be machine-washed and
                            dried on low heat.
                        </li>
                        <li>
                            Personalize them with your own designs, patterns, or
                            embellishments to make them uniquely yours.
                        </li>
                    </ul>
                </TabsContent>
            </Tabs>
        </div>
    );
}
