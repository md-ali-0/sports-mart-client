import logo from "@/assets/images/logo.png";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { LuMenu, LuSearch, LuShoppingBag, LuX } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartProduct = useAppSelector(state=>state.cart.cart)
    return (
        <>
            <header className="container flex bg-white border-b py-4 sm:px-8 px-6 min-h-[80px] tracking-wide relative z-50">
                <div className="flex flex-wrap justify-between items-center lg:gap-y-2 gap-4 w-full">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="w-28 sm:w-36" />
                    </Link>
                    <div
                        style={{ display: `${isOpen ? "flex" : "none"}` }}
                        className="lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-1.5"
                        >
                            <LuX size={25} />
                        </button>
                        <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                            <li className="mb-6 hidden max-lg:block">
                                <Link to={"/"} onClick={() => setIsOpen(false)}>
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="w-28 sm:w-36"
                                    />
                                </Link>
                            </li>
                            <li className="max-lg:border-b max-lg:py-3 px-3">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="max-lg:border-b max-lg:py-3 px-3">
                                <NavLink
                                    to="/all-products"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    All Products
                                </NavLink>
                            </li>
                            <li className="max-lg:border-b max-lg:py-3 px-3">
                                <NavLink
                                    to="/manage-products"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Manage Products
                                </NavLink>
                            </li>
                            <li className="max-lg:border-b max-lg:py-3 px-3">
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-x-6 gap-y-4">
                        <div className="flex border focus-within:border-gray-300 rounded-full px-3.5 py-2.5 overflow-hidden max-w-52 max-lg:hidden">
                            <input
                                type="text"
                                placeholder="Search something..."
                                className="w-full text-sm bg-transparent outline-none pr-2"
                            />
                            <LuSearch
                                className="cursor-pointer"
                                color="gray"
                                size={20}
                            />
                        </div>
                        <div className="flex items-center space-x-5">
                            {/* <Link to={'/wish-list'} className="relative">
                                <LuHeart size={25} />
                                <span className="absolute -right-1.5  -top-0.5 rounded-full bg-black px-1 py-0 text-xs text-white">
                                    0
                                </span>
                            </Link> */}
                            <Link to={'/cart'} className="relative">
                                <LuShoppingBag size={25} />
                                <span className="absolute -right-1.5  -top-0.5 rounded-full bg-black px-1 py-0 text-xs text-white">
                                    {cartProduct.length}
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="lg:hidden"
                            >
                                <LuMenu size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
