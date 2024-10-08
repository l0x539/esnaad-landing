"use client";
import IconExport from "../icons/IconExport";
import { FC, ReactNode, useState } from "react";
import ModalWrapper from "../ModalWrapper";
import dynamic from "next/dynamic";
const HeaderPopup = dynamic(() => import("../HeaderPopup"), {ssr: false})

const DownloadBrochure: FC<{
    className?: string;
    children: ReactNode
}> = ({ className = "", children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(true);
    };

    const closeModalHandler = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div
                onClick={openModalHandler}
                className={`${className} cursor-pointer flex justify-center items-center bg-gold rounded-full text-bt-primary gap-x-2 min-w-32 min-h-12 transition-colors duration-200 text-base px-8 py-4 hover:bg-bt-secondary hover:text-bt-hover font-medium leading-[1.4]`}
            >
                <div>{children}</div>
                <div className="flex items-center justify-center flex-col object-fill w-12 h-12 lg:w-6 lg:h-6">
                    <IconExport />
                </div>
            </div>
            <ModalWrapper isModalOpen={isOpen} closeModal={closeModalHandler}>
                <HeaderPopup />
            </ModalWrapper>
      </>
    );
};

export default DownloadBrochure;
