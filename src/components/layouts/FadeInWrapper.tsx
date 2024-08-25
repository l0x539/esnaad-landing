"use client"
import { FC, PropsWithChildren, ReactNode } from "react";
import { motion as m } from "framer-motion";

const FadeInWrapper: FC<PropsWithChildren<any>> = (props) => {
    
    return <m.div
        {...props}
        initial={{
            opacity: 0,
            animationDuration: ".15s"
        }}
        whileInView={{
            opacity: 1,
        }}
        viewport={{
            once: true,
        }}
    >
        {props.children}
    </m.div>;
};

export default FadeInWrapper;