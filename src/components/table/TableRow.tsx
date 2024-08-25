"use client"
import { FC, ReactNode, useState } from "react";
import IconArrow from "../icons/IconArrow";
import { motion as m } from "framer-motion";
import Row from "./Row";
import RowHeading from "./RowHeading";
import RowBody from "./RowBody";
import RowTr from "./RowTr";
import Accordion from "./Accordion";

const TableRow: FC<{children: ReactNode; titles: {
    title: string;
    subtitle: string;
    type?: "main" | "secondary"
}[]}> = ({titles, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    return <>
        <Row>
            <RowHeading onClick={toggleOpenHandler}>
                {titles.map((info, index) => <RowTr info={info} key={index} />)}
                <m.div
                initial={{
                    rotate: 0
                }}
                variants={{
                    open: {
                        rotate: 180
                    },
                    closed: {
                        rotate: 0
                    }
                }}
                animate={isOpen ? "open" : "closed"}
                whileHover={{
                    rotate: 180
                }}
                className="absolute flex w-20 h-20 items-center justify-center self-center justify-self-end">
                    <IconArrow />
                </m.div>
            </RowHeading>
            <RowBody isOpen={isOpen}>
                <Accordion>
                    {children}
                </Accordion>
            </RowBody>
        </Row>
    </>
}

export default TableRow;