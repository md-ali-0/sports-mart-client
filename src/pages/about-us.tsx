import AboutUsSection from "@/components/about-us";
import ContactInformation from "@/components/contact-information";
import OurLocation from "@/components/our-location";
import OurMission from "@/components/our-mission";
import OurTeam from "@/components/our-team";


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
