import { useScrollTo } from "@/hooks/useScrollTo";
import Link from "next/link";
import { FC, ReactNode } from "react";

const NavLink: FC<{
  href: string;
  children: ReactNode;
  className?: string;
}> = ({ href, children, className = "" }) => {
  const scrollTo = useScrollTo({
    duration: .1,
    ease: "anticipate",
    type: 'tween'
  });
  
  return (
    <div
      onClick={() => scrollTo(href)}
      className={`flex cursor-pointer items-center lg:leading-6 font-medium lg:text-sm rounded-none transition-all duration-[.35s] gap-x-2.5 p-0 mx-0 border-b-[1px] border-solid border-transparent whitespace-nowrap indent-0 tracking-bittight text-bt-secondary hover:outline-0 hover:text-silver hover:border-white ${className} min-w-16`}
    >
      {children}
    </div>
  );
};

export default NavLink;
