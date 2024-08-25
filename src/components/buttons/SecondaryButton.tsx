import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import { FC, ReactNode } from "react";

const SecondaryButton: FC<{ children: ReactNode; className?: string; }> = ({
  children,
  className = "",
}) => {
  return (
    <div className="relative flex justify-center align-center items-center p-0 text-center tracking-tight bg-transparent rounded-full outline outline-white/10 outline-1 z-50 mx-auto min-h-10 font-medium transition-all duration-200 text-xs">
      <div
        className={`relative inline-block align-top text-left mx-auto whitespace-nowrap cursor-pointer select-none text-bt-secondary outline-none pl-4 pr-12 py-2.5 ${className}`}
      >
        <div className="">{children}</div>
        <div className="absolute flex items-center justify-center m-auto top-0 bottom-0 right-4">
          <FaAngleDown className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default SecondaryButton;
