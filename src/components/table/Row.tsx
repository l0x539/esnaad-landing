import { FC, ReactNode } from "react";

const Row: FC<{children: ReactNode; onClick?: () => void}> = ({children, onClick}) => {
    return <>
    <div onClick={onClick} className="py-10 border-b-2 border-solid border-table-blue bg-transparent">
        {children}
    </div>
  </>;
}

export default Row;