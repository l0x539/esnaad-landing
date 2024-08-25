"use client";
import Link from "next/link";
import IconPlus from "../icons/IconPlus";
import MapPopup from "../MapPopup";
import { useState } from "react";
import ModalWrapper from "../ModalWrapper";

const MapButton = () => {
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
                className="cursor-pointer max-w-full flex items-center justify-start text-silver"
            >
                <div className="flex mt-auto h-6 w-6 items-center justify-center flex-col">
                    <IconPlus />
                </div>
                <div className="leading-[.9] font-light text-8xl tracking-normal">
                    Map
                </div>
                <div className="leading-[1.5] self-start">Click Open</div>
            </div>
            <ModalWrapper isModalOpen={isOpen} closeModal={closeModalHandler}>
                <MapPopup />
            </ModalWrapper>
        </>
    );
};

export default MapButton;
