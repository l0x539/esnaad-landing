import { FC, ReactNode } from "react";

const Accordion: FC<{children: ReactNode;}> = ({children}) => {
    return <div className="grid gap-[16px] grid-cols-[1.25fr_1fr] auto-cols-fr">
        {children}
    </div>;
};

export default Accordion;