/* eslint-disable @typescript-eslint/no-explicit-any */
import bannerBg from "@/assets/images/slider-bg.png";
import slider1 from "@/assets/images/slider/banner-image-1-modified.png";
import slider2 from "@/assets/images/slider/banner-image-2-modified.png";
import slider3 from "@/assets/images/slider/banner-image-3-modified.png";
import { AnimatePresence, motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { Button } from "./ui/button";

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                const mouseOver = false;

                function clearNextTimeout() {
                    clearTimeout(timeout);
                }

                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 3000);
                }

                slider.on("created", () => {
                    // slider.container.addEventListener("mouseover", () => {
                    //     mouseOver = true;
                    //     clearNextTimeout();
                    // });
                    // slider.container.addEventListener("mouseout", () => {
                    //     mouseOver = false;
                    //     nextTimeout();
                    // });
                    nextTimeout();
                });

                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    return (
        <AnimatePresence>
            <div className="navigation-wrapper">
                <div
                    ref={sliderRef}
                    className="keen-slider bg-[#f5e6e0] md:h-[550px] 2xl:h-auto 2xl:max-w-screen-2xl 2xl:mx-auto"
                    style={{ backgroundImage: `url(${bannerBg})` }}
                >
                    <div className="container keen-slider__slide slider flex-col-reverse md:flex-row py-5">
                        <div className="flex flex-col items-start gap-3 md:gap-3.5 md:w-1/2">
                            <motion.h1
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-gray-800 dark:text-gray-300 textGradient font-medium font-jost text-2xl
                                md:text-4xl lg:text-5xl text-shadow"
                            >
                                Score Big on Team Sports Equipment
                            </motion.h1>
                            <motion.h5
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 0.9, delay: 0.8 }}
                                className="text-gray-700 dark:text-gray-400 font-normal font-jost text-xl lg:text-2xl text-shadow"
                            >
                                Save Up to 20% on Soccer, Basketball, and More
                            </motion.h5>

                            <motion.p
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="text-sm md:text-base"
                            >
                                Get ready for the season with discounts on all
                                team sports gear. Perfect for athletes of all
                                levels.
                            </motion.p>
                            <motion.div
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 1, delay: 1 }}
                                className="py-2"
                            >
                                <Button>Shop Team Sports</Button>
                            </motion.div>
                        </div>
                        <motion.div
                            whileInView={{
                                opacity: [0, 1],
                                y: [20, 0],
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            className="md:w-1/2"
                        >
                            <img
                                className=" lg:w-[70%] mx-auto border-[12px] bg-white border-white object-cover rounded-3xl my-5 sm:my-0"
                                src={slider1}
                                alt=""
                            />
                        </motion.div>
                    </div>
                    <div className="container keen-slider__slide slider flex-col-reverse md:flex-row py-5">
                        <div className="flex flex-col items-start gap-3 md:gap-3.5 md:w-1/2">
                            <motion.h1
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-gray-800 dark:text-gray-300 textGradient font-medium font-jost text-2xl
                                md:text-4xl lg:text-5xl text-shadow"
                            >
                                Gear Up for the Great Outdoors
                            </motion.h1>
                            <motion.h5
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 0.9, delay: 0.8 }}
                                className="text-gray-700 dark:text-gray-400 font-normal font-jost text-xl lg:text-2xl text-shadow"
                            >
                                25% Off on All Camping and Hiking Equipment
                            </motion.h5>

                            <motion.p
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="text-sm md:text-base"
                            >
                                Discover the best in outdoor sports gear. From
                                tents to trekking poles, we've got you covered
                                for your next adventure.
                            </motion.p>
                            <motion.div
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 1, delay: 1 }}
                                className="py-2"
                            >
                                <Button>Explore Deals</Button>
                            </motion.div>
                        </div>
                        <motion.div
                            whileInView={{
                                opacity: [0, 1],
                                y: [20, 0],
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            className="md:w-1/2"
                        >
                            <img
                                className=" lg:w-[70%] mx-auto border-[12px] bg-white border-white object-cover rounded-3xl my-5 sm:my-0"
                                src={slider2}
                                alt=""
                            />
                        </motion.div>
                    </div>
                    <div className="container keen-slider__slide slider flex-col-reverse md:flex-row py-5">
                        <div className="flex flex-col items-start gap-3 md:gap-3.5 md:w-1/2">
                            <motion.h1
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-gray-800 dark:text-gray-300 textGradient font-medium font-jost text-2xl
                                md:text-4xl lg:text-5xl text-shadow"
                            >
                                Get Fit with Our Fitness Gear
                            </motion.h1>
                            <motion.h5
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 0.9, delay: 0.8 }}
                                className="text-gray-700 dark:text-gray-400 font-normal font-jost text-xl lg:text-2xl text-shadow"
                            >
                                Up to 40% Off on Selected Fitness Equipment
                            </motion.h5>

                            <motion.p
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="text-sm md:text-base"
                            >
                                Elevate your home workout with top-quality
                                treadmills, dumbbells, yoga mats, and more.
                                Limited time offer!
                            </motion.p>
                            <motion.div
                                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                                transition={{ duration: 1, delay: 1 }}
                                className="py-2"
                            >
                                <Button>Shop Now</Button>
                            </motion.div>
                        </div>
                        <motion.div
                            whileInView={{
                                opacity: [0, 1],
                                y: [20, 0],
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            className="md:w-1/2"
                        >
                            <img
                                className=" lg:w-[70%] mx-auto border-[12px] bg-white border-white object-cover rounded-3xl my-5 sm:my-0"
                                src={slider3}
                                alt=""
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            {loaded && instanceRef.current && (
                <div className="hidden lg:flex 2xl:hidden absolute left-28 bottom-10  justify-center gap-4 py-2.5">
                    {[
                        ...Array(
                            instanceRef.current.track.details.slides.length
                        ).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                                className={
                                    "border flex justify-center items-center rounded-full size-5 p-0.5" +
                                    (currentSlide === idx
                                        ? " border-black"
                                        : "")
                                }
                            >
                                <div className="bg-black rounded-full size-2"></div>
                            </button>
                        );
                    })}
                </div>
            )}
        </AnimatePresence>
    );
};

export default HeroSlider;
