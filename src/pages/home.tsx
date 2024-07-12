import ContactUs from "@/components/contact-us";
import FeaturedSection from "@/components/featured-section";
import HeroSlider from "@/components/hero-slider";

import CategorySection from "@/components/category-section";

const Home = () => {
    return (
        <main>
            <HeroSlider />
            <FeaturedSection />
            <CategorySection />
            <ContactUs />
        </main>
    );
};

export default Home;
