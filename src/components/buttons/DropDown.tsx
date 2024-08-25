"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

const DropDown: FC<{
    button: ReactNode;
    children: ReactNode;
  }> = ({ button, children }) => { // TODO: refactor
    // const options = [
    //   {
    //     name: "en",
    //     value: "En"
    //   },
    //   {
    //     name: "ru",
    //     value: "Ru"
    //   },
    //   {
    //     name: "ar",
    //     value: "Ar"
    //   },
    // ]
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      document.addEventListener(
        "mousedown",
        (e) => {
          if (e.target instanceof Node && !menuRef.current?.contains(e.target))
            setIsOpen(false);
          else if (
            e.target instanceof Node &&
            menuRef.current?.contains(e.target)
          )
            setIsOpen(true);
        },
        true
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <div className="mx-auto relative flex transition-all duration-200 font-medium p-0 min-h-11 items-center self-center justify-center rounded-full bg-transparent text-center outline-offset-0 tracking-tight">
        <div ref={menuRef}>{button}</div>
        <nav
          className={`${
            isOpen ? "visible" : "hidden"
          } absolute top-32 py-4 lg:py-0 lg:top-16 flex items-center flex-col text-bt-secondary overflow-hidden rounded-2xl bg-silver min-w-full bg-primary text-left outline outline-offset-0 outline-white/10 outline-solid outline-1 w-full`}
        >
          {children}
        </nav>
      </div>
    );
  };

  export default DropDown;