import { CiBasketball, CiFootball } from "react-icons/ci";
import { FaTableTennis } from "react-icons/fa";
import { IoIosFitness, IoMdFootball } from "react-icons/io";
import { LiaHikingSolid } from "react-icons/lia";
import { TbSwimming, TbYoga } from "react-icons/tb";
import { Link } from "react-router-dom";

const CategorySection = () => {
    return (
        <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center gap-2 mb-8 md:mb-12">
                    <span className="bg-white text-black rounded-md px-1.5 py-0.5">
                        Category
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Shop by Category
                    </h2>
                    <p className="text-muted-foreground">
                        Explore our wide range of product categories.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
                    <Link
                        to={"/all-products?category=basketball"}
                        className="group relative rounded-lg bg-card p-6 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary p-3 transition-all group-hover:bg-muted">
                                <CiBasketball className="h-8 w-8 text-primary-foreground group-hover:text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Basketball
                            </h3>
                        </div>
                    </Link>
                    <Link
                        to={"/all-products?category=fitness"}
                        className="group relative rounded-lg bg-card p-6 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary p-3 transition-all group-hover:bg-muted">
                                <IoIosFitness className="h-8 w-8 text-primary-foreground group-hover:text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Fitness
                            </h3>
                        </div>
                    </Link>
                    <Link
                        to={"/all-products?category=golf"}
                        className="group relative rounded-lg bg-card p-6 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary p-3 transition-all group-hover:bg-muted">
                                <CiFootball className="h-8 w-8 text-primary-foreground group-hover:text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Golf
                            </h3>
                        </div>
                    </Link>
                    <Link
                        to={"/all-products?category=yoga"}
                        className="group relative rounded-lg bg-card p-6 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary p-3 transition-all group-hover:bg-muted">
                                <TbYoga className="h-8 w-8 text-primary-foreground group-hover:text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Yoga
                            </h3>
                        </div>
                    </Link>
                    <Link
                        to={"/all-products?category=football"}
                        className="group relative rounded-lg bg-card p-6 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary p-3 transition-all group-hover:bg-muted">
                                <IoMdFootball className="h-8 w-8 text-primary-foreground group-hover:text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Football
                            </h3>
                        </div>
                    </Link>
                    <Link
                        to={"/all-products?category=tennis"}
                        className="group relative rounded-lg bg-card p-6 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary p-3 transition-all group-hover:bg-muted">
                                <FaTableTennis className="h-8 w-8 text-primary-foreground group-hover:text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Tennis
                            </h3>
                        </div>
                    </Link>
                    <Link
                        to={"/all-products?category=swimming"}
                        className="group relative rounded-lg bg-card p-6 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary p-3 transition-all group-hover:bg-muted">
                                <TbSwimming className="h-8 w-8 text-primary-foreground group-hover:text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Swimming
                            </h3>
                        </div>
                    </Link>
                    <Link
                        to={"/all-products?category=hiking"}
                        className="group relative rounded-lg bg-card p-6 transition-all hover:shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary p-3 transition-all group-hover:bg-muted">
                                <LiaHikingSolid className="h-8 w-8 text-primary-foreground group-hover:text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Hiking
                            </h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;