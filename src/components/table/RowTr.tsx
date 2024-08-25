import { FC, ReactNode } from "react";

const RowTr: FC<{info: {
    title: string;
    subtitle: string;
    type?: "main" | "secondary"
}}> = ({info: {
    type="main",
    subtitle,
    title
}}) => {
    return <div className="flex items-start row-span-1 col-span-1">
        <div className={`uppercase mt-2 ${type === "secondary" ? "text-4xl" : "text-7xl"}`}>
            {title}
        </div>
        <div className="text-gray text-xs">
            {subtitle}
            <br />
        </div>
    </div>;
};

export default RowTr;