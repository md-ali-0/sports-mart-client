import AboutUsSection from "@/components/pages/about-us/about-us";
import ContactInformation from "@/components/pages/about-us/contact-information";
import OurLocation from "@/components/pages/about-us/our-location";
import OurMission from "@/components/pages/about-us/our-mission";
import OurTeam from "@/components/pages/about-us/our-team";

export default function AboutUs() {
    return (
        <>
            {/* Information about the company */}
            <AboutUsSection />

            {/* Mission and vision statements */}
            <OurMission />

            {/* Contact information */}
            <ContactInformation />

            {/* Our Team Section */}
            <OurTeam />

            {/* Our Store Location Information */}
            <OurLocation />
        </>
    );
}
