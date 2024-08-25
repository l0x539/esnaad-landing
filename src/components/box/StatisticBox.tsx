import React, { ReactNode } from "react";

function StatisticBox({
  icon,
  title,
  desc,
  unit,
  isDark = false
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  unit?: string;
  isDark?: boolean
}) {
  return (
    <div className={`${isDark ? "bg-black-2 text-white" : "bg-transparent text-black border border-light-grey"} w-1/3 lg:w-auto  rounded-lg p-8 lg:p-5 flex-grow min-h-[33rem] lg:min-h-[20rem] flex flex-col justify-between`}>
      <div>
        {icon}
      </div>
      <div>
        <div className="">
          <p className="text-[9rem] lg:text-7xl lg:font-medium mb-4 relative w-fit">{title}
          {unit && <span className="absolute top-0 left-full text-2xl lg:text-sm">{unit}</span>}</p>
          
        </div>
        <span className="text-light-grey  text-3xl lg:text-[.88rem]">{desc}</span>
      </div>
    </div>
  );
}

export default StatisticBox;
