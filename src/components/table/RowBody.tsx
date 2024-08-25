import { FC, ReactNode } from "react";
import { motion as m } from "framer-motion";

const RowBody: FC<{children: ReactNode; isOpen: boolean}> = ({children, isOpen}) => {
    return <m.div
    initial={{
        height: 0
    }}
    variants={{
        open: {
            height: "auto"
        },
        closed: {
            height: 0
        }
    }}
    animate={isOpen ? "open" : "closed"}
    className="mt-[10px] mr-[30px] overflow-hidden">
        {children}
    </m.div>
}

export default RowBody;