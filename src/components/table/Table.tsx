import { FC, ReactNode } from "react";
import TableHeading from "./TableHeading";
import TableTr from "./TableTr";
import FadeInWrapper from "../layouts/FadeInWrapper";

const Table: FC<{children: ReactNode; data: {
    headings: {
        title: string;
        type?: "main" | "secondary"
    }[];
}}> = ({children, data: {
    headings
}}) => {
    return (
        <div className="mx-auto h-full max-w-[80rem]">
            <div className="py-32">
                <FadeInWrapper className="">
                    <TableHeading>
                        {headings.map(({title, type}, index) => <TableTr key={index} type={type}>
                            {title}
                        </TableTr>)}
                    </TableHeading>
                </FadeInWrapper>
                <FadeInWrapper className="">
                    {children}
                </FadeInWrapper>
            </div>
        </div>
    );
};

export default Table;
