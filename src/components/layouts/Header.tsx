"use client";
import Image from "next/image";
import Link from "next/link";
import sparkbyesnaad from "@/assets/images/THE-SPARK-PNG-LOGOSS.png";
import whiteImage from "@/assets/images/logo-white.png";
import NavLink from "../navigation/NavLink";
import PrimaryButton from "../buttons/PrimaryButton";
import IconDownload from "../icons/IconDownload";
import SecondaryButton from "../buttons/SecondaryButton";
import DropDown from "../buttons/DropDown";
import { RxHamburgerMenu } from "react-icons/rx";
import useNavSidebar from "@/hooks/useNavSidebar";
import { motion as m } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import { selectApp } from "@/store/features/app/appSlice";
import { usePathname } from "next/navigation";
import { FC } from "react";
const Header = () => {
  const { toggleSideMenu } = useNavSidebar();
  const {direction=0, dictionaries} = useAppSelector(selectApp);
  const pathname = usePathname();

  return (
    <m.div
      initial={{
        y: 0
      }}
      variants={{
        open: {
          y: 0
        },
        closed: {
          y: -150
        }
      }}
      transition={{
        ease: "easeIn",
        duration: 0.4
      }}
      animate={(direction>0) ? "closed" : "open" }
      className="fixed flex items-center top-0 left-0 right-0 bottom-auto z-40 px-16 py-8 bg-primary text-bt-secondary min-h-[80px] lg:min-h-20">
      <div className="flex mx-auto justify-space-between items-center w-full h-full ">
        <NavLink href="#hero" className="cursor-pointer inline-block max-w-full border-b-0">
          <Image loading="lazy" src={sparkbyesnaad} width={190} height={34} alt="ESNAAD Real Estate Development Logo - Luxury Homes in Dubai" />
        </NavLink>
        <div className="flex justify-end items-center w-full gap-x-7">
          <nav className="static xl:block float-right w-full hidden h-10">
            <div className="flex justify-end w-full h-full">
              <div className="flex justify-end gap-x-7">
                <NavLink href="#about" className="relative text-left align-top">
                  {dictionaries.main.header.about}
                </NavLink>
                <NavLink href="#plans" className="max-w-full">
                  <div>{dictionaries.main.header.properties}</div>
                  <div className="flex justify-center items-center flex-col object-fill w-6 h-4 break-normal">
                    <IconDownload />
                  </div>
                </NavLink>
                <NavLink href="#aboutus" className="relative text-left align-top">
                  {dictionaries.main.header.gallery}
                </NavLink>
                <NavLink href="#service" className="relative text-left align-top">
                  {dictionaries.main.header.amenities}
                </NavLink>
                <NavLink href="#contact" className="relative text-left align-top">
                  {dictionaries.main.header.contactus}
                </NavLink>
                <NavLink href="#aboutus" className="relative text-left align-top">
                  {dictionaries.main.header.aboutus}
                </NavLink>
              </div>
              <div className=""></div>
            </div>
          </nav>
          <div className="ml-8 flex flex-none flex-wrap gap-2.5">
            <div className="hidden xl:block">
              <div className="relative flex flex-col items-start max-w-fit ">
                <PrimaryButton id="call-us" className="before:content-phone before:absolute before:left-4 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4">
                  Call Us
                </PrimaryButton>
              </div>
            </div>
            <DropDown button={<SecondaryButton className="capitalize">{pathname.slice(1, 3)}</SecondaryButton>}>
              <DropDownLink lang="en" />
              <DropDownLink lang="ru" />
              <DropDownLink lang="ar" />
            </DropDown>
            <div className="inline-flex xl:hidden ml-6">
                <button id="mobile-menu" className="" onClick={toggleSideMenu}>
                  <RxHamburgerMenu className="w-24 h-24" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

const DropDownLink: FC<{lang: "ar" | "en" | "ru";}> = ({lang}) => {
  const pathname = usePathname();
  return <Link href={`/${lang}`} className={`flex text-xs text-title capitalize relative align-top text-left mx-auto whitespace-nowrap py-2.5 transition-all duration-200 px-0 w-full items-center justify-center text-bt-secondary ${!pathname.startsWith(`/${lang}`)?"block visible":"hidden"}`}>
    {lang}
  </Link>
}

export default Header;
