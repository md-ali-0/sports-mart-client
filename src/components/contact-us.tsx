import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent } from "react";
import { LuLocate, LuMail, LuPhone } from "react-icons/lu";
import { toast } from "sonner";

const ContactUs = () => {
    const sendContact = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Thanks for contacting Us.");
    };
    return (
        <section className="bg-background py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center gap-2 mb-8 md:mb-12">
                    <span className="bg-muted rounded-md px-1.5 py-0.5">
                        Contact
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Contact Us
                    </h2>
                    <p className="text-muted-foreground">
                        Get in touch with us for any inquiries or feedback.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
                    <div>
                        <form className="space-y-4" onSubmit={sendContact}>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Enter your message"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Submit
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-start gap-5">
                            <LuLocate className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="text-lg font-medium">
                                    Our Address
                                </h4>
                                <p className="text-muted-foreground">
                                    123 Jhenaidah Sadar, Jhenaidah -7300
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <LuPhone className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="text-lg font-medium">Phone</h4>
                                <p className="text-muted-foreground">
                                    +880 1916-498482
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <LuMail className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="text-lg font-medium">Email</h4>
                                <p className="text-muted-foreground">
                                    support@sportsgoods.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
