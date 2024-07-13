import logo from "@/assets/images/logo.png";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <img className="invert w-40" src={logo} alt="Sports Mart" />
                    <p className="mt-4 text-gray-300">
                        Discover Sports Mart, your go-to for top-quality
                        sporting goods. We offer a wide range of gear and
                        apparel from leading brands to help you excel in your
                        favorite sports.
                    </p>
                    <div className="mt-5 flex space-x-4">
                        <div className="border border-gray-700 rounded-full p-2">
                            <LuFacebook size={18} />
                        </div>
                        <div className="border border-gray-700 rounded-full p-2">
                            <RiTwitterXFill size={18} />
                        </div>
                        <div className="border border-gray-700 rounded-full p-2">
                            <LuInstagram size={18} />
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
                <div>
                    <h3 className="font-semibold">PRODUCTS</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link
                                to={'/all-products'}
                                className="text-gray-400 hover:text-white"
                            >
                                All Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/manage-products'}
                                className="text-gray-400 hover:text-white"
                            >
                                Manage Product
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold">IMPORTANT LINKS</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link
                                to={'/'}
                                className="text-gray-400 hover:text-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/cart'}
                                className="text-gray-400 hover:text-white"
                            >
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/about-us'}
                                className="text-gray-400 hover:text-white"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/'}
                                className="text-gray-400 hover:text-white"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <div>
                    <h3 className="font-semibold">COMPANY</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link
                                to={'/'}
                                className="text-gray-400 hover:text-white"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/'}
                                className="text-gray-400 hover:text-white"
                            >
                                Jobs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/'}
                                className="text-gray-400 hover:text-white"
                            >
                                Press
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/'}
                                className="text-gray-400 hover:text-white"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className="container mx-auto">
                <div className="border-t border-slate-800 text-center text-gray-200 mt-5 pt-6">
                    © {new Date().getFullYear()} Sports Mart. All Rights
                    Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
