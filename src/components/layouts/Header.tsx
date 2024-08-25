"use client";
import Image from "next/image";
import Link from "next/link";
import whiteImage from "@/assets/images/logo-white.png";
import NavLink from "../navigation/NavLink";
import PrimaryButton from "../buttons/PrimaryButton";
import IconDownload from "../icons/IconDownload";
import SecondaryButton from "../buttons/SecondaryButton";
import DropDown from "../buttons/DropDown";
import { RxHamburgerMenu } from "react-icons/rx";
import useNavSidebar from "@/hooks/useNavSidebar";

const Header = () => {
  const { isSideMenuOpen, toggleSideMenu } = useNavSidebar();

  return (
    <div className="fixed flex items-center top-0 left-0 right-0 bottom-auto z-40 px-16 py-8 bg-primary text-bt-secondary min-h-[80px] lg:min-h-20">
      <div className="flex mx-auto justify-space-between items-center w-full h-full ">
        <Link href={"#hero"} className="inline-block max-w-full">
          <Image loading="lazy" src={whiteImage} width={190} height={34} alt="ESNAAD Real Estate Development Logo - Luxury Homes in Dubai" />
        </Link>
        <div className="flex justify-end items-center w-full gap-x-7">
          <nav className="static xl:block float-right w-full hidden h-10">
            <div className="flex justify-end w-full h-full">
              <div className="flex justify-end gap-x-7">
                <NavLink href="#about" className="relative text-left align-top">
                  About the project
                </NavLink>
                <NavLink href="#plans" className="max-w-full">
                  <div>Property types</div>
                  <div className="flex justify-center items-center flex-col object-fill w-6 h-4 break-normal">
                    <IconDownload />
                  </div>
                </NavLink>
                <NavLink href="#aboutus" className="relative text-left align-top">
                  Gallery
                </NavLink>
                <NavLink href="#service" className="relative text-left align-top">
                  Amenities
                </NavLink>
                <NavLink href="#contact" className="relative text-left align-top">
                  Economic Appeal
                </NavLink>
                <NavLink href="#contact" className="relative text-left align-top">
                  Contact US
                </NavLink>
                <NavLink href="#aboutus" className="relative text-left align-top">
                  About us
                </NavLink>
              </div>
              <div className=""></div>
            </div>
          </nav>
          <div className="ml-20 flex flex-none flex-wrap gap-2.5">
            <div className="hidden xl:block">
              <div className="relative flex flex-col items-start max-w-fit ">
                <PrimaryButton id="Call Us" className="before:content-phone before:absolute before:left-4 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4">
                  Call Us
                </PrimaryButton>
              </div>
            </div>
            <DropDown button={<SecondaryButton>En</SecondaryButton>}>
              <Link href="#" className="flex text-xs relative align-top text-left mx-auto whitespace-nowrap py-2.5 transition-all duration-200 px-0 w-full items-center justify-center text-bt-secondary">
                Ru
              </Link>
              <Link href="#" className="flex text-xs relative align-top text-left mx-auto whitespace-nowrap py-2.5 transition-all duration-200 px-0 w-full items-center justify-center text-bt-secondary">
                Ar
              </Link>
            </DropDown>
            <div className="inline-flex xl:hidden ml-6">
                <button id="mobile-menu" className="" onClick={toggleSideMenu}>
                  <RxHamburgerMenu className="w-24 h-24" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
