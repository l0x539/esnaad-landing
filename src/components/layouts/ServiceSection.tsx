"use client"
import DownloadBrochure from "@/components/buttons/DownloadBrochure";
import swimmingpool from "@/assets/images/Swimming Pool 1.jpg";
import gym from "@/assets/images/Gym 1.jpg";
import sauna from "@/assets/images/SAUNA 03.jpg";
import lobby from "@/assets/images/Lobby 2.jpg";
import apartment from "@/assets/images/Living Room.jpg";
import Image from "next/image";
import { FC, ReactNode, useRef } from "react";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { motion as m } from "framer-motion";
import FadeInWrapper from "./FadeInWrapper";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
            <div ref={targetRef} className="h-[348vh] relative">
                <div className="h-[155vh] top-auto bottom-0 left-0 right-0 w-full absolute">
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
                                    <CompanyStep title="Swimming Pool" image={swimmingpool} >
                                        Relax and rejuvenate in our luxurious swimming pool areas: the Grand Infinity Pool, Serenity Pool, and Vista Pool. Each offers a unique and upscale swimming experience.
                                    </CompanyStep>
                                    <CompanyStep title="Gym" image={gym} >
                                        Our state-of-the-art gym is equipped with everything you need to maintain your fitness routine. Get your heart pumping with our cardio machines or challenge yourself with our free weights.
                                    </CompanyStep>
                                    <CompanyStep title="Sauna and Steam Room" image={sauna} >
                                        Melt away stress and tension in our luxurious sauna and steam room. The perfect place to relax and rejuvenate after a long day.
                                    </CompanyStep>
                                    <CompanyStep title="Entrance Lobby" image={lobby} >
                                        Make a grand entrance into our stunningly designed entrance lobby. The perfect place to welcome guests or relax and unwind.
                                    </CompanyStep>
                                    <CompanyStep title="Comfy Apartment" image={apartment} >
                                        Spacious and open-plan living rooms with large windows, modern finishes, and flexible furniture arrangements.
                                    </CompanyStep>
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

const CompanyStep: FC<{
    title: string;
    children: ReactNode;
    image: StaticImport;
}> = ({title, children, image}) => {
    return <div className="py-[1.25em] gap-[16px] relative flex w-[33rem] justify-between flex-none flex-col auto-col-fr">
        <div className="w-[35em] ">
            <div className="flex h-36 items-start flex-col gap-x-2 ">
                <h2 className="my-0 leading-none tracking-normal text-2xl">
                    {title}
                </h2>
                <p className="text-lg mt-6 self-start leading-normal text-silver">
                    {children}
                </p>
            </div>
        </div>
        <div className="relative left-0 right-0 top-0 bottom-0 pt-[75%] mt-5">
            <Image loading="lazy" src={image} className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover object-center" alt="Swimming pools" />
        </div>
    </div>;
}