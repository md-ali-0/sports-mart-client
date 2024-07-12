import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

function BackToTop() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {showButton && (
                <div
                    className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full bg-primary p-3 text-primary-foreground shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={scrollToTop}
                >
                    <LuArrowUp className="size-5" />
                    <span className="sr-only">Back to top</span>
                </div>
            )}
        </>
    );
}

export default BackToTop