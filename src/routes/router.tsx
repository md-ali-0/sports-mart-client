import MainLayout from "@/components/layout/main-layout";
import AboutUs from "@/pages/about-us";
import AllProducts from "@/pages/all-products";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";
import Home from "@/pages/home";
import ManageProducts from "@/pages/manage-products";
import SingleProduct from "@/pages/single-product";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about-us",
                element: <AboutUs />,
            },
            {
                path: "/all-products",
                element: <AllProducts />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/manage-products",
                element: <ManageProducts />,
            },
            {
                path: "/product-details/:id",
                element: <SingleProduct />,
            },
        ],
    },
]);

export default router;
