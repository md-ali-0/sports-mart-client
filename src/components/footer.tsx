import logo from "@/assets/images/logo.png";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";

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
                    <h3 className="font-semibold">PRODUCTS</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                News &amp; Stories
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Roadmap
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold">IMPORTANT LINKS</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Our Journeys
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Pricing Plans
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Roadmap
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Terms &amp; Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold">COMPANY</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Press
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
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
