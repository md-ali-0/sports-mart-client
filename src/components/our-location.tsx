const OurLocation = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            Our Store Location
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Visit Our Store
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Come and visit us at our physical store located at:
                        </p>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Address: 123 Sports Mart Lane, Sportstown, USA
                            <br />
                            Opening Hours: Mon - Fri: 9 AM - 6 PM, Sat: 10 AM -
                            4 PM, Sun: Closed
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurLocation;
