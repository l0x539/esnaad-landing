"use client"
import useNavSidebar from "@/hooks/useNavSidebar"
import { useEffect } from "react"
import { HiOutlineXMark } from "react-icons/hi2"
import { RxHamburgerMenu } from "react-icons/rx"
import NavLink from "../navigation/NavLink"
import IconDownload from "../icons/IconDownload"
import { FaArrowRight } from "react-icons/fa6"
import DownloadBrochure from "../buttons/DownloadBrochure"

function NavSidebar() {
  const { toggleSideMenu, isSideMenuOpen } = useNavSidebar()

  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.height = "auto"
      document.body.style.overflowY = "scroll"

    }

  }, [isSideMenuOpen])
  return (
    <div
      className={`block lg:hidden fixed z-50 top-0 left-0 h-screen w-screen bg-black-2 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${isSideMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full '
        }`}
    >
      {/* links */}
      <div className="mt-40 px-16">
        <div className="flex flex-col text-[4rem] leading-loose w-fit">
          <NavLink href="#about" className="relative text-left align-top">
            About the project
          </NavLink>
          <NavLink href="#plans" className="max-w-full">
            <div>Property types</div>
            <div className="flex justify-center items-center flex-col object-fill w-6 h-4 break-normal ml-7">
              <span className="bg-white rounded-3xl px-4 py-2">
                <FaArrowRight className="text-black-2 w-8 h-8" />
              </span>
            </div>
          </NavLink>
          <NavLink href="#hero" className="relative text-left align-top">
            Gallery
          </NavLink>
          <NavLink
            href="#service"
            className="relative text-left align-top"
          >
            Amenities
          </NavLink>
          <NavLink href="#hero" className="relative text-left align-top">
            Economic Appeal
          </NavLink>
          <NavLink href="#hero" className="relative text-left align-top">
            Location
          </NavLink>
          <NavLink href="#hero" className="relative text-left align-top">
            About us
          </NavLink>
        </div>
      </div>

      {/* download button */}
      <div className="absolute bottom-[20%] left-16">
        <DownloadBrochure className="!text-[3rem] !py-10 !px-20 !font-normal capitalize" >
          Download brochure
        </DownloadBrochure>
      </div>
      {/* close sidebar button */}
      <button id="close-menu-mobile" className="absolute right-12 top-12" onClick={toggleSideMenu}>
        <HiOutlineXMark className="w-20 h-20" />
      </button>
    </div>
  )
}

export default NavSidebar;