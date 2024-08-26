"use client"
import Link from "next/link";
import IconPlus from "../icons/IconPlus";
import Image from "next/image";
import swimpool from "@/assets/images/Swimming Pool 2.jpg";
import roofview from "@/assets/images/Swimming Pool 1.jpg";
import sparkbyesnaad from "@/assets/images/sparkbyesnaad.png";
import gym from "@/assets/images/Gym 2.jpg";
import FadeInWrapper from "./FadeInWrapper";
import MapButton from "../buttons/MapButton";
import { motion as m, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end end"]
    });

    const y = useSpring(0, {
        bounce: 0,
        duration: .1,
    });

    const y2 = useSpring(0, {
        bounce: 0,
        duration: .1,
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        y2.set((latest-0.8)*500);
        y.set((-latest*800)+400);
    });

    return <section id="about" className="block">
        <div className="relative px-12 h-full">
            <FadeInWrapper className="py-32">
                <div ref={targetRef} className="w-full mx-auto h-full max-w-[100em]">
                    <div className="flex items-start gap-x-32 transform-gpu translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 transform-style-3d">
                        <div className="uppercase w-64 text-xl"> about project</div>
                    </div>

                    <div className="grid mt-16 auto-cols-[1fr] gap-y-[1em] gap-x-[6.69em] grid-areas-about grid-cols-[auto-1fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto]">
                        <div className="flex pt-28 flex-col gap-y-20 self-start row-[about-index] col-[about-index]" style={{
                            gridArea: "about-index"
                        }}>
                            <MapButton />
                            <div className="flex items-center justify-start text-dark-silver ml-40">
                                <div className="flex mt-auto w-6 h-6 items-center justify-center flex-col">
                                    <IconPlus />
                                </div>
                                <div className="leading-[.9] font-light text-8xl tracking-normal">1-2</div>
                                <div className="leading-[1.5] self-start">bedrooms <br /></div>
                            </div>
                            <div className="hidden"></div>
                        </div>
                        <div className="self-start row-[about-index] col-[about-index]" style={{
                            gridArea: "about-text"
                        }}>
                            <h2 className="my-0 text-7xl">Exclusive Residences in the Heart of MBR City </h2>
                            <p className="mt-6 leading-normal text-silver ">
                                The Spark by ESNAAD is a prestigious residential development situated in the heart of Mohamed Bin Rashid City, District 11. This modern project offers a blend of luxury and convenience, featuring a collection of meticulously designed apartments and exclusive living spaces.
                                <br />
                                <br />
                                Crafted with elegance and functionality in mind, these residences provide 1-2 bedroom options that cater to a sophisticated urban lifestyle. Residents enjoy breathtaking views of iconic landmarks, including Downtown Dubai, the Dubai Mall, and the Dubai International Financial Centre (DIFC), along with easy access to Meydan and Kite Beach.
                            </p>
                        </div>
                        <m.div
                            initial={{
                                y: 0+400
                            }}
                            style={{
                                y,
                                gridArea: "about-pic1",
                            }}
                            className="pb-9 border-b border-solid border-silver mt-64 max-w-[32rem]] will-change-transform self-start row-[about-pic1] col-[about-pic1]"
                        >
                            <div className="relative pt-[130%]">
                                <Image loading="lazy" className="inline-block align-middle max-w-full object-cover w-full absolute top-0 left-0 right-0 bottom-0 h-full" src={swimpool} alt="Rooftop Pool Image" />
                            </div>
                            <div className="leading-tight font-normal text-4xl mt-9 ">Elevate Your Living with Luxurious Rooftop Retreats</div>
                            <p className="leading-6 overflow-hidden mr-[30px] mt-[30px] text-silver hidden"></p>
                        </m.div>
                        <div className="pb-9 border-b border-solid border-silver mt-[4.38em] mb-36 will-change-transform self-start row-[about-pic2] col-[about-pic2]" style={{
                            gridArea: "about-pic2"
                        }}>
                            <div className="overflow-hidden relative pt-[75%]">
                                <Image loading="lazy" className="inline-block align-middle max-w-full object-contain w-full absolute top-0 left-0 right-0 bottom-0 h-full" src={roofview} alt="Rooftop Sitting Area Image." width={2450} height={1400} />
                            </div>
                            <div className="mt-7 text-3xl font-normal leading-tight">Unmatched Skyline Views and Exclusive Amenities</div>
                            <p className="leading-6 overflow-hidden mr-[30px] mt-[30px] text-silver hidden"></p>
                        </div>
                        <div className="block mt-36 max-w-60 row-[about-logo] col-[about-logo]" style={{
                            gridArea: "about-logo"
                        }}>
                            <Image loading="lazy" src={sparkbyesnaad} alt="The Spark by ESNAAD Logo - Luxury Residential Project in Mohamed Bin Rashid City, Dubai" className="w-80 mb-4 max-w-full inline-block h-auto" />
                            <Link href="#" className="max-w-full flex text-base pr-3 justify-between" >
                                <div>About developer</div>
                                <div className="flex ml-[4px] h-[1.4em] w-[1.4em] items-center justify-center flex-col">

                                </div>
                            </Link>
                        </div>
                        <m.div className="pb-9 border-b border-solid border-silver mt-52 ml-auto m-32 will-change-transform self-start row-[about-pic3] col-[about-pic3] w-full"
                        initial={{
                            y: -500
                        }}

                        style={{
                            y: y2,
                            gridArea: "about-pic3"
                        }}>
                            <div className="relative pt-[100%] ">
                                <Image loading="lazy" className="object-cover absolute top-0 left-0 right-0 bottom-0 max-w-[40vw] h-[100%] max-h-none align-middle inline-block" src={gym} alt="Gym Image" />
                            </div>
                            <div className="leading-[1.2] text-4xl mt-7">Wellness and Fitness at Your Doorstep</div>
                            <p className="leading-6 overflow-hidden mr-[30px] mt-[30px] text-silver hidden"></p>
                        </m.div>
                    </div>
                </div>
            </FadeInWrapper>
        </div>
    </section>
};

export default AboutSection;