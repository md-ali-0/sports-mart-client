import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

const MainLayout: FC = () => {
    return (
        <main className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default MainLayout;
