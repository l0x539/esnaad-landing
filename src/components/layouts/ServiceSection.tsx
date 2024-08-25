"use client"
import DownloadBrochure from "@/components/buttons/DownloadBrochure";
import swimmingpool from "@/assets/images/Swimming Pool 1.jpg";
import Image from "next/image";
import { useRef } from "react";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { motion as m } from "framer-motion";
import FadeInWrapper from "./FadeInWrapper";

const ServiceSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "start start"]
    });

    const x = useSpring(0, {
        bounce: 0
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const fixedValue = -((1-latest)* (targetRef?.current?.clientHeight??0));
        //   setHookedYPosition(-((1-latest)* (targetRef?.current?.clientHeight??0)));
        x.set(fixedValue);
    });

    return <FadeInWrapper id="service" className="block">
        <div className="pt-0">
            <div ref={targetRef} className="h-[270vh] relative">
                <div className="h-[120vh] top-auto bottom-0 left-0 right-0 w-full absolute">
                </div>
                <div className="absolute w-full left-0 right-0 bottom-0 top-auto h-[50vh]">
                </div>
                <div className="absolute w-full left-0 right-0 bottom-0 top-auto h-[30vh]"></div>
                <div className="sticky top-0">
                    <div className="grid mx-auto auto-cols-fr grid-cols-2 gap-x-[8.63em]">
                        <div className="row-span-1 col-span-1">
                            <div className="flex pl-44 pr-24 -ml-28 h-[53rem] w-[53rem] items-center justify-center flex-col rounded-full text-bt-primary bg-primary">
                                <h2 className="my-0 leading-none text-6xl tracking-normal text-gray">Embrace Luxury Living with Wellness and Comfort</h2>
                                <div className="flex mt-16 w-full">
                                    <DownloadBrochure className="py-5" >Download brochure</DownloadBrochure>
                                </div>
                            </div>
                        </div>
                        <div className="flex overflow-hidden items-center">
                            <div className="w-[36rem]">
                                <m.div
                                style={{
                                    x
                                }}
                                className="flex items-center gap-x-5">
                                    <CompanyStep />
                                    <CompanyStep />
                                    <CompanyStep />
                                    <CompanyStep />
                                </m.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </FadeInWrapper>;
};

export default ServiceSection;

const CompanyStep = () => {
    return <div className="py-[1.25em] gap-[16px] relative flex w-[33rem] justify-between flex-none flex-col auto-col-fr">
        <div className="w-[35em] ">
            <div className="flex h-36 items-start flex-col gap-x-2 ">
                <h2 className="my-0 leading-none tracking-normal text-2xl">
                    Swimming Pool
                </h2>
                <p className="text-lg mt-6 self-start leading-normal text-silver">Relax and rejuvenate in our luxurious swimming pool areas: the Grand Infinity Pool, Serenity Pool, and Vista Pool. Each offers a unique and upscale swimming experience.</p>
            </div>
        </div>
        <div className="relative left-0 right-0 top-0 bottom-0 pt-[75%] mt-5">
            <Image loading="lazy" src={swimmingpool} className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover object-center" alt="Swimming pools" />
        </div>
    </div>;
}