import bannerImage from '@/assets/banner/about.jpg';

const AboutUsSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            About Us
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Discover the Difference with Sports Mart
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At Sports Mart, we're passionate about providing
                            high-quality products and exceptional customer
                            service. Our mission is to make your shopping
                            experience seamless and enjoyable.
                        </p>
                    </div>
                    <img
                        src={bannerImage}
                        width="550"
                        height="350"
                        alt="About Us"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
