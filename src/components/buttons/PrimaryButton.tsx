import Link from "next/link";
import { FC, ReactNode } from "react";

const PrimaryButton: FC<{ className?: string; children: ReactNode; id: string }> = ({
  className="",
  children,
  id
}) => {
  const primary = "bg-gold h-11 rounded-full"; // TODO: refactor

  return (
    <Link
      href={"tel:+971800376223"}
      id={id}
      className={`${primary} flex items-center whitespace-nowrap relative font-semibold text-xs py-[3px] pl-10 pr-4 cursor-pointer min-h-8 outline-0 text-bt-primary min-w-fit ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
