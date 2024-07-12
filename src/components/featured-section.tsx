import ProductCard from "./product-card";

const FeaturedSection = () => {
    const featuredProducts = [
        {
            id: 101,
            name: "Acme Prism T-Shirt",
            category: "Clothing",
            stock: 50,
            brand: "Acme",
            rating: 4.2,
            description:
                "A stylish and comfortable t-shirt with a unique prism design.",
            price: 24.99,
            image: "/placeholder.svg",
        },
        {
            id: 201,
            name: "Gamer Gear Pro Controller",
            category: "Electronics",
            stock: 25,
            brand: "Gamer Gear",
            rating: 4.7,
            description:
                "A high-performance gaming controller with advanced features.",
            price: 59.99,
            image: "/placeholder.svg",
        },
        {
            id: 301,
            name: "Fitness Tracker Pro",
            category: "Accessories",
            stock: 75,
            brand: "Fitness Tech",
            rating: 4.5,
            description:
                "A comprehensive fitness tracker to help you reach your goals.",
            price: 79.99,
            image: "/placeholder.svg",
        },
        {
            id: 401,
            name: "Fitness Tracker Pro",
            category: "Accessories",
            stock: 75,
            brand: "Fitness Tech",
            rating: 4.5,
            description:
                "A comprehensive fitness tracker to help you reach your goals.",
            price: 79.99,
            image: "/placeholder.svg",
        },
    ];
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
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
