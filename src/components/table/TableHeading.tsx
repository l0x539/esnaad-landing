import { FC, ReactNode } from "react";

const TableHeading: FC<{children: ReactNode;}> = ({children}) => {
    return <div className="relative grid auto-cols-fr gap-4 pb-7 grid-cols-[1.45fr_.75fr_.82fr]">
        {children}
    </div>;
}

export default TableHeading;