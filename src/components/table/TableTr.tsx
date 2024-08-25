import { FC, ReactNode } from "react";

const TableTr: FC<{children: ReactNode, type?: "main" | "secondary"}> = ({children, type="main"}) => {
    return <div className="flex items-start col-span-1 row-span-1">
        <div className={`text-xl w-72 uppercase ${type === "main" ? "" : "text-silver"}`}>
            {children}
        </div>
    </div>;
};

export default TableTr;