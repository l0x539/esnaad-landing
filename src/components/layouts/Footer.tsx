import Link from "next/link";
import { FC, ReactNode } from "react";
import whiteImage from "@/assets/images/logo-white.png";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/Instagram.svg";
import youtube from "@/assets/youtube.svg";
import twitter from "@/assets/Twitter.svg";
import linkedin from "@/assets/Linkedin.svg";
import Image from "next/image";
import IconDownload from "../icons/IconDownload";
import IconPlus from "../icons/IconPlus";
import feeforeview from "@/assets/feefo-mock-review.svg"
import googlereview from "@/assets/google-mock-reveiw.png"
import certified from "@/assets/certifid-badge.svg"
import award from "@/assets/award.svg"

const Footer = () => {
  return (
    <section className="block bg-primary">
      <div className="relative h-full px-14">
        <div className="py-12">
          <div className="max-w-7xl h-full mx-auto">
            <div>
              <div className="grid gap-4 grid-cols-3 auto-cols-fr">
                <FooterColumn>
                  <Link href="#" className="w-72 max-w-full inline-block">
                    <Image loading="lazy"
                      src={whiteImage}
                      alt="Esnaad Logo footer"
                      className="max-w-full align-middle inline-block"
                      width={216}
                      height={39}
                    />
                  </Link>
                  <ul className="grid auto-cols-fr grid-rows-[auto,auto] grid-cols-2 text-silver gap-4 mt-12 mb-3 pl-0">
                    <li className="self-center">
                      <FooterLink href="#about">
                        About the project
                      </FooterLink>
                    </li>
                    <li className="self-center">
                      <FooterLink href="#service">
                        Amenities
                      </FooterLink>
                    </li>
                    <li className="self-center">
                      <FooterLink href="#plans" icon={<div className="flex justify-center items-center flex-col object-fill w-6 h-4 break-normal">
                        <IconDownload />
                      </div>}>
                        Property types
                      </FooterLink>
                    </li>
                    <li className="self-center">
                      <FooterLink href="#">
                        Location
                      </FooterLink>
                    
                    </li>
                    <li className="self-center">
                      <FooterLink href="#">
                        Gallery
                      </FooterLink>
                    </li>
                    <li className="self-center">
                      <FooterLink href="#aboutus">
                        About us
                      </FooterLink>
                    </li>
                    <li className="self-center">
                      <FooterLink href="#">
                        Economic Appeal
                      </FooterLink>
                    </li>
                  </ul>
                  <div className="pt-7"></div>
                  <div className="transition-all duration-200 text-silver">© 2024 The Spark By Esnaad</div>
                </FooterColumn>
                <FooterColumn>
                  <div className="grid grid-cols-[max-content,1fr] gap-4 auto-cols-fr">
                    <div className="flex relative mt-auto h-6 w-6 items-center justify-center flex-col top-7">
                      <IconPlus />
                    </div>
                    <div className="text-gray text-left text-4xl uppercase">Our Experts Will Help You Secure Finest Properties</div>
                  </div>
                  <div className="grid justify-center auto-cols-fr gap-y-5 p-0 gap-x-5 grid-cols-[repeat(5,auto)]">
                    <FooterSocialLink href="#" >
                      <Image loading="lazy" src={facebook} alt="Esnaad Facebook image" width={39} height={39} />
                    </FooterSocialLink>
                    <FooterSocialLink href="#" >
                      <Image loading="lazy" src={instagram} alt="Esnaad Instagram image" width={39} height={39} />
                    </FooterSocialLink>
                    <FooterSocialLink href="#" >
                      <Image loading="lazy" src={youtube} alt="Esnaad Youtube image" width={39} height={39} />
                    </FooterSocialLink>
                    <FooterSocialLink href="#" >
                      <Image loading="lazy" src={twitter} alt="Esnaad Twitter image" width={39} height={39} />
                    </FooterSocialLink>
                    <FooterSocialLink href="#" >
                      <Image loading="lazy" src={linkedin} alt="Esnaad LinkedIn image" width={39} height={39} />
                    </FooterSocialLink>
                  </div>
                </FooterColumn>
                <FooterColumn className="grid justify-between auto-cols-fr grid-cols-[3.25fr_1fr_1fr] grid-rows-[auto_auto] gap-x-4 row-span-1 col-span-1">
                  <div className="flex flex-col gap-y-8 row-span-1 col-span-1">
                    <Link href="#" target="_blank" className="inline-block max-w-full rounded-md">
                        <Image loading="lazy" src={feeforeview} alt="Esnaad Feefo review" width={217} height={55} />
                    </Link>
                    <Link href="#" target="_blank" className="inline-block max-w-full rounded-md">
                        <Image loading="lazy" src={googlereview} alt="Esnaad Google review" width={326} height={86} />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-y-8 row-span-1 col-span-1">
                    <Image loading="lazy" src={certified} alt="Esnaad Work Place certified badge" width={100} height={170} />
                  </div>
                  <div className="flex flex-col gap-y-8 row-span-1 col-span-1">
                    <Image loading="lazy" src={award} alt="Esnaad Arabian property award Real Estate" width={100} height={350} />
                  </div>
                  <div className="flex flex-col justify-end gap-y-3 row-span-1 col-span-1">
                    <p className="text-silver mt-3 leading-8 self-start text-nowrap">
                      City Walk Building #1, Al Wasl,  <br />
                      Dubai, UAE
                    </p>
                  </div>
                </FooterColumn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

const FooterColumn: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={`flex flex-col justify-between row-span-1 col-span-1 ${className}`}>
      {children}
    </div>
  );
};

const FooterLink: FC<{
  children: ReactNode;
  href: string;
  icon?: ReactNode;
  className?: string;
}> = ({
  children,
  href="#",
  className="",
  icon
}) => {
  return <Link href={href} className={`flex items-center max-w-full ${className} gap-3`}>
    <div className="transition-all duration-200 text-silver hover:text-bt-secondary">
      {children}
    </div>
    {icon}
  </Link>;
};

const FooterSocialLink: FC<{
  href: string;
  children: ReactNode
}> = ({
  href="#",
  children
}) => {
  return <div className="flex items-center justify-center flex-col">
    <Link href={href} className="transition-[filter] duration-200 inline-block hover:inline-0 hover:brightness-200">{children}</Link>
  </div>
}