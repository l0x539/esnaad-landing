import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import { FC, ReactNode } from "react";

const SecondaryButton: FC<{ children: ReactNode; className?: string; }> = ({
  children,
  className = "",
}) => {
  return (
    <div className="relative flex justify-center align-center items-center p-0 text-center tracking-tight bg-transparent rounded-full outline outline-white/10 outline-1 z-50 mx-auto min-h-[40px] lg:min-h-10 font-medium transition-all duration-200 text-[16px]  xl:text-xs">
      <div
        className={`relative flex align-top text-left mx-auto whitespace-nowrap cursor-pointer select-none text-bt-secondary outline-none px-12 lg:px-4 py-2.5 ${className}`}
      >
        <div className="">{children}</div>
        <div className="ml-10 lg:ml-4 flex items-center justify-center m-auto">
          <FaAngleDown className="ml-10 lg:ml-4 " />
        </div>
      </div>
    </div>
  );
};

export default SecondaryButton;
