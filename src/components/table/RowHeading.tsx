import { FC, ReactNode } from "react";

const RowHeading: FC<{children: ReactNode; onClick: () => void}> = ({children, onClick}) => {
    return <div onClick={onClick} className="flex transition-colors duration-200 items-start justify-between hover:text-gold">
    <div className="grid relative auto-cols-fr grid-cols-[2fr_.75fr_1fr] flex-1 gap-4">
      {children}
    </div>
  </div>
}

export default RowHeading;