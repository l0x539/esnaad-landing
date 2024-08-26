import union from "@/assets/Union.svg";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import IconExport from "../icons/IconExport";
import Link from "next/link";
import DownloadBrochure from "../buttons/DownloadBrochure";
import FadeInWrapper from "./FadeInWrapper";

const HeroSection = () => {
    return <section id="hero" className="block min-h-[100vh] h-screen bg-hero bg-center bg-no-repeat bg-cover ">
        <section className="mt-24 lg:mt-0 lg:relative h-full px-12 ">
            <div className="w-full mx-auto h-full max-w-full">
                <div className="flex flex-grow pb-10 pt-[150px] lg:pt-40 h-full items-stretch justify-center flex-col  ">
                    <div className="flex  flex-col gap-y-[12rem] lg:flex-row justify-start gap-12">
                        <div className="flex flex-col w-full lg:max-w-4xl justify-between">
                            <div className="flex w-full lg:pl-16 lg:flex-col gap-y-14">
                                <div className="flex items-center">
                                    <Image loading="lazy" src={union} alt="Plus sign" className="top-14 lg:top-7 relative  w-[25px] h-[25px] lg:w-[34px] lg:h-[34px]" />
                                    <div className="leading-10 uppercase text-[5rem] lg:text-4xl text-bt-primary font-light">Luxury Residences</div>
                                </div>
                                <div className="flex items-center ml-52">
                                    <Image loading="lazy" src={union} alt="Plus sign" className="top-14 lg:top-7 relative  w-[25px] h-[25px] lg:w-[34px] lg:h-[34px]" />
                                    <div className="leading-10 uppercase  text-[5rem] lg:text-4xl text-bt-primary">Elegance</div>
                                </div>
                            </div>
                            <div className=" mt-60 lg:mt-40">
                                <h1 className="my-0 uppercase text-bt-secondary leading-none lg:leading-[4.9rem]  text-[12rem] lg:text-7xl max-w-[17ch]">Address <br/><span className="text-[3.5rem]">Mohamed Bin Rashid City</span></h1>
                            </div>
                        </div>
                        <FadeInWrapper className="flex ml-auto max-w-sm w-full items-start justify-end flex-col gap-y-6">
                            <div className="flex items-start flex-col text-bt-secondary gap-y-3">
                                <div className="uppercase text-bt-secondary text-5xl">
                                    AED 1,1M
                                </div>
                                <div className="text-[3.2rem] lg:text-sm">Starting price  (USD 299K)</div>
                            </div>
                            <div className="flex items-start flex-col text-bt-secondary gap-y-3">
                                <div className="uppercase text-bt-secondary text-[5.5rem] lg:text-5xl">
                                    20/30
                                </div>
                                <div className="text-[3.2rem] lg:text-sm">Payment Plan (20/30/20/30)</div>
                            </div>
                            <div className="flex w-1/3 lg:w-full items-center lg:items-start flex-col text-bt-secondary gap-y-3">
                                <div className="uppercase text-bt-secondary text-[5.5rem] lg:text-5xl">
                                    Q4 2025
                                </div>
                                <div className="text-[3.2rem] lg:text-sm">Handover</div>
                            </div>
                            <DownloadBrochure >
                                Download brochure
                            </DownloadBrochure>
                        </FadeInWrapper>
                    </div>
                </div>
            </div>
        </section>
    </section>
}

export default HeroSection;