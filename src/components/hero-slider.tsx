/* eslint-disable @typescript-eslint/no-explicit-any */

import bannerBg from "@/assets/images/slider-bg.png";
import slider1 from '@/assets/images/slider/banner-image-1.png';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { Button } from "./ui/button";

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    }, [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>;
            let mouseOver = false;

            function clearNextTimeout() {
                clearTimeout(timeout);
            }

            function nextTimeout() {
                clearTimeout(timeout);
                if (mouseOver) return;
                timeout = setTimeout(() => {
                    slider.next();
                }, 2000);
            }

            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true;
                    clearNextTimeout();
                });
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false;
                    nextTimeout();
                });
                nextTimeout();
            });

            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
        },
    ]);

    return (
        <>
            <div className="navigation-wrapper">
                <div
                    ref={sliderRef}
                    className="keen-slider bg-[#f5e6e0]"
                    style={{ backgroundImage: `url(${bannerBg})` }}
                >
                    <div className="container keen-slider__slide slider flex-col-reverse md:flex-row py-5">
                        <div className="flex flex-col items-start gap-2 md:gap-3.5 md:w-1/2">
                            <h3 className="text-2xl md:text-4xl font-bold">
                                Get Fit with Our Fitness Gear
                            </h3>
                            <h4 className="text-lg md:text-xl">
                                Up to 40% Off on Selected Fitness Equipment
                            </h4>
                            <p className="text-sm md:text-base">
                                Elevate your home workout with top-quality
                                treadmills, dumbbells, yoga mats, and more.
                                Limited time offer!
                            </p>
                            <Button>Shop Now</Button>
                        </div>
                        <div className="md:w-1/2">
                        <img className="w-64 md:w-auto mx-auto" src={slider1} alt="" />
                        </div>
                    </div>
                    <div className="keen-slider__slide slider container py-20">
                        <div className="flex flex-col items-start gap-3.5 md:w-1/2">
                            <h3 className="text-3xl">
                                Gear Up for the Great Outdoors
                            </h3>
                            <h4 className="text-xl">
                                25% Off on All Camping and Hiking Equipment
                            </h4>
                            <p>
                                Discover the best in outdoor sports gear. From
                                tents to trekking poles, we've got you covered
                                for your next adventure.
                            </p>
                            <Button>Explore Deals</Button>
                        </div>
                        <div className="md:w-1/2"></div>
                    </div>
                    <div className="keen-slider__slide slider container">
                        <div className="flex flex-col items-start gap-3.5 md:w-1/2">
                            <h3 className="text-3xl">
                                Score Big on Team Sports Equipment
                            </h3>
                            <h4 className="text-xl">
                                Save Up to 20% on Soccer, Basketball, and More
                            </h4>
                            <p>
                                Get ready for the season with discounts on all
                                team sports gear. Perfect for athletes of all
                                levels.
                            </p>
                            <Button>Shop Team Sports</Button>
                        </div>
                        <div className="md:w-1/2"></div>
                    </div>
                </div>
            </div>
            {loaded && instanceRef.current && (
                <div className="absolute left-28 bottom-10 flex justify-center gap-4 py-2.5">
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
                                    "border hidden md:flex justify-center items-center rounded-full size-5 p-0.5" +
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
        </>
    );
};

export default HeroSlider;
