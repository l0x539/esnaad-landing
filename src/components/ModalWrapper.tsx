"use client"
import { motion as m } from "framer-motion";
import { FC, ReactNode } from "react";

const ModalWrapper: FC<{children: ReactNode; isModalOpen: boolean; closeModal: () => void}> = ({children, isModalOpen, closeModal}) => {
    
    return (
        <div className="absolute top-0">
            <m.div
                initial={{ opacity: 0, display: "none", visibility: "hidden" }}
                variants={{
                    open: { opacity: 1, display: "block", visibility: "visible"},
                    closed: { opacity: 0, display: "none", visibility: "hidden" },
                }}
                animate={isModalOpen ? "open" : "close"}
                onClick={closeModal}
                className={`fixed z-[9999] -top-[5000px] -left-[5000px] -right-[5000px] -bottom-[5000px] backface-visibility bg-black/80`}
            ></m.div>
            <m.div
                initial={{ opacity: 0, display: "none", visibility: "hidden" }}
                variants={{
                    open: { opacity: 1, display: "block", visibility: "visible"},
                    closed: { opacity: 0, display: "none", visibility: "hidden" },
                }}
                animate={isModalOpen ? "open" : "close"}
                className={`fixed pointer-events-none z-[10000] top-0 left-0 right-0 bottom-0 overflow-hidden text-center backface-visible px-[10px] pt-[10px]`}
            >
                <div className="relative pointer-events-auto outline-0 inline-block box-border w-full mb-[10px] transform-gpu translate-x-0 translate-y-0 translate-z-0 align-middle top-[0%] left-[0%] right-[0%] bottom-[0%] h-screen z-[999] text-left p-[20px] bg-transparent max-w-[1450px]">
                    {children}
                </div>
            </m.div>
        </div>
    );
};

export default ModalWrapper;
