import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

const MainLayout: FC = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
};

export default MainLayout;
