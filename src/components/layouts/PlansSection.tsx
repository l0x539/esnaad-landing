import Link from "next/link";
import IconArrow from "../icons/IconArrow";
import housemap1 from "@/assets/images/plan10.webp";
import housemap2 from "@/assets/images/plan6.webp";
import Image from "next/image";
import IconExport from "../icons/IconExport";
import FadeInWrapper from "./FadeInWrapper";
import TableRow from "../table/TableRow";
import Table from "../table/Table";
import DownloadBrochure from "../buttons/DownloadBrochure";

const PlansSection = () => {
    // TODO: refactor table
    return (
        <section id="plans" className="block">
            <div className="relative px-12 h-full">
                <Table data={{
                    headings: [{
                            title: "TYPES OF REAL ESTATE"
                        },
                        {
                            title: "Starting price",
                            type: "secondary"
                        },
                        {
                            title: "Area",
                            type: "secondary"
                        }
                    ]
                }}>
                    <TableRow titles={[
                        {
                            title: "1 bedroom",
                            subtitle: "Apartment",
                        },
                        {
                            title: "1.1M",
                            subtitle: "AED",
                            type: "secondary"
                        },
                        {
                            title: "~845",
                            subtitle: "sq.ft",
                        }
                    ]}>
                        <Link
                            href="#"
                            className="inline-block max-w-full col-span-1 row-span-1"
                        >
                            <div className="relative">
                                <Image loading="lazy"
                                    src={housemap1}
                                    loading="lazy"
                                    className="max-w-full align-middle block max-h-[350px] w-full object-contain"
                                    alt="House Map for 1 Bed room"
                                />
                            </div>
                        </Link>
                        <div className="flex gap-[16px]">
                            <div className="flex items-stretch justify-end flex-col gap-y-[1.75em]">
                                <Link
                                    href="#"
                                    className="flex transition-all duration-200 font-medium text-base py-5 px-6 min-h-12 min-w-28 items-center justify-center rounded-full border border-solid border-gold text-gold tracking-tight text-center hover:text-bt-primary hover:bg-primary hover:border-bt-hover"
                                >
                                    <div>Property Inquiry</div>
                                </Link>
                            </div>
                            <div className="flex items-stretch justify-end flex-col gap-y-[1.75em]">
                                <DownloadBrochure className="flex transition-all duration-200 font-medium text-base py-5 px-6 min-h-12 min-w-64 items-center justify-center rounded-full border border-solid border-gold text-bt-primary bg-gold tracking-tight text-center hover:bg-primary">
                                    Download all Floor Plans
                                </DownloadBrochure>
                            </div>
                        </div>
                    </TableRow>

                    <TableRow titles={[
                        {
                            title: "2 bedrooms",
                            subtitle: "Apartment",
                        },
                        {
                            title: "1.38M",
                            subtitle: "AED",
                            type: "secondary"
                        },
                        {
                            title: "~1500",
                            subtitle: "sq.ft",
                        }
                    ]}>
                        <Link
                            href="#"
                            className="inline-block max-w-full col-span-1 row-span-1"
                        >
                            <div className="relative">
                                <Image loading="lazy"
                                    src={housemap2}
                                    loading="lazy"
                                    className="max-w-full align-middle block max-h-[350px] w-full object-contain"
                                    alt="House Map for 1 Bed room"
                                />
                            </div>
                        </Link>
                        <div className="flex gap-[16px]">
                            <div className="flex items-stretch justify-end flex-col gap-y-[1.75em]">
                                <Link
                                    href="#"
                                    className="flex transition-all duration-200 font-medium text-base py-5 px-6 min-h-12 min-w-28 items-center justify-center rounded-full border border-solid border-gold text-gold tracking-tight text-center hover:text-bt-primary hover:bg-primary hover:border-bt-hover"
                                >
                                    <div>Property Inquiry</div>
                                </Link>
                            </div>
                            <div className="flex items-stretch justify-end flex-col gap-y-[1.75em]">
                                <DownloadBrochure className="flex transition-all duration-200 font-medium text-base py-5 px-6 min-h-12 min-w-64 items-center justify-center rounded-full border border-solid border-gold text-bt-primary bg-gold tracking-tight text-center hover:bg-primary">
                                    Download all Floor Plans
                                </DownloadBrochure>
                            </div>
                        </div>
                    </TableRow>
                </Table>
            </div>
        </section>
    );
};

export default PlansSection;
