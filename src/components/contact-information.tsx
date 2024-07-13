import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInformation = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            Contact Us
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We'd love to hear from you! Whether you have
                            questions, feedback, or need assistance, please
                            reach out to us at:
                        </p>
                        <div className="flex flex-col items-center space-y-6">
                            <div className="flex items-center justify-center gap-2 md:gap-4">
                                <Mail className="text-muted-foreground" size={20} />
                                <p className="text-sm md:text-xl text-muted-foreground">
                                    Email: support@sportsmart.com
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 md:gap-4">
                                <Phone className="text-muted-foreground" size={20} />
                                <p className="text-sm md:text-xl text-muted-foreground">
                                    Phone: +1 (800) 123-4567
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 md:gap-4">
                                <MapPin className="text-muted-foreground" size={20} />
                                <p className="text-sm md:text-xl text-muted-foreground">
                                    Address: 123 Sports Mart Lane, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInformation;
