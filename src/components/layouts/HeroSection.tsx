import union from "@/assets/Union.svg";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import IconExport from "../icons/IconExport";
import Link from "next/link";
import DownloadBrochure from "../buttons/DownloadBrochure";
import FadeInWrapper from "./FadeInWrapper";

const HeroSection = () => {
    return <section id="hero" className="block min-h-[100vh] h-auto bg-hero bg-hero-center bg-no-repeat bg-cover ">
        <section className="relative h-full px-12 ">
            <div className="w-full mx-auto h-full max-w-full">
                <div className="flex pb-10 pt-40 h-full items-stretch justify-center flex-col ">
                    <div className="flex justify-start gap-12">
                        <FadeInWrapper className="flex flex-col max-w-4xl justify-between ">
                            <div className="flex pl-16 flex-col gap-y-14">
                                <div className="flex items-center">
                                    <Image src={union} alt="Plus sign" className="top-7 relative w-6" width={34} height={34} />
                                    <div className="leading-10 uppercase text-4xl text-bt-primary font-light">Luxury Residences</div>
                                </div>
                                <div className="flex items-center ml-52">
                                    <Image src={union} alt="Plus sign" className="top-7 relative w-6" width={34} height={34} />
                                    <div className="leading-10 uppercase text-4xl text-bt-primary">Elegance</div>
                                </div>
                            </div>
                            <div className="mt-40">
                                <h1 className="my-0 uppercase text-bt-secondary leading-[105px] text-7xl max-w-[17ch]">Address <br/><span className="text-[3.5rem]">Mohamed Bin Rashid City</span></h1>
                            </div>
                        </FadeInWrapper>
                        <FadeInWrapper className="flex ml-auto max-w-sm w-full items-start justify-end flex-col gap-y-6">
                            <div className="flex items-start flex-col text-bt-secondary gap-y-3">
                                <div className="uppercase text-bt-secondary text-5xl">
                                    AED 1,1M
                                </div>
                                <div className="text-sm">Starting price  (USD 299K)</div>
                            </div>
                            <div className="flex items-start flex-col text-bt-secondary gap-y-3">
                                <div className="uppercase text-bt-secondary text-5xl">
                                    20/30
                                </div>
                                <div className="text-sm">Payment Plan (20/30/20/30)</div>
                            </div>
                            <div className="flex items-start flex-col text-bt-secondary gap-y-3">
                                <div className="uppercase text-bt-secondary text-5xl">
                                    Q4 2025
                                </div>
                                <div className="text-sm">Handover</div>
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