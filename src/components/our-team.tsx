const OurTeam = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-slate-950 text-white px-3 py-1 text-sm">
                            Our Team
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Meet the Sports Mart Team
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our dedicated team of experts is committed to
                            delivering the best possible experience for our
                            customers.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-5">
                    <div className="grid gap-4">
                        <img
                            src="https://xsgames.co/randomusers/assets/avatars/female/49.jpg"
                            alt="Mistie Dranchak"
                            className="mx-auto aspect-square overflow-hidden rounded-full object-cover w-40"
                        />
                        <div className="text-center">
                            <h3 className="text-lg font-bold">
                                Mistie Dranchak
                            </h3>
                            <p className="text-muted-foreground">CEO</p>
                            <p className="text-sm text-muted-foreground">
                                John is the visionary behind Sports Mart, with
                                over 15 years of experience in the ecommerce
                                industry.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <img
                            src="https://xsgames.co/randomusers/assets/avatars/female/25.jpg"
                            alt="Geneva Vasiliauskas"
                            className="mx-auto aspect-square overflow-hidden rounded-full object-cover w-40"
                        />
                        <div className="text-center">
                            <h3 className="text-lg font-bold">
                                Geneva Vasiliauskas
                            </h3>
                            <p className="text-muted-foreground">COO</p>
                            <p className="text-sm text-muted-foreground">
                                Jane oversees the day-to-day operations of
                                Sports Mart, ensuring smooth and efficient
                                processes.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <img
                            src="https://xsgames.co/randomusers/assets/avatars/female/52.jpg"
                            alt="Madlyn Stotsky"
                            className="mx-auto aspect-square overflow-hidden rounded-full object-cover w-40"
                        />
                        <div className="text-center">
                            <h3 className="text-lg font-bold">
                                Madlyn Stotsky
                            </h3>
                            <p className="text-muted-foreground">CTO</p>
                            <p className="text-sm text-muted-foreground">
                                Michael leads the technology team, driving
                                innovation and ensuring the seamless integration
                                of our ecommerce platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
