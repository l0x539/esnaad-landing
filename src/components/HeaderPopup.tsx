import IconClose from "./icons/IconClose";

const HeaderPopup = () => {
    return <div className="flex absolute items-center justify-center flex-col top-[0%] left-[0%] right-[0%] bottom-[0%]">
        <div className="relative pointer-events-auto p-10 m-auto max-w-[70rem] rounded-[1.25em] bg-white z-10 w-full bg-[length:auto,_contain] bg-repeat bg-head-modal">
            <div>
                <div className="grid gap-4 auto-cols-fr grid-areas-modal-heading">
                    <div className="leading-none text-6xl col-span-1 row-span-1 text-shade-black">Download Brochure</div>
                    <div className="mb-[15px]" style={{
                        gridArea: "form"
                    }}>
                        <form action="#" className="flex justify-between flex-col gap-[.94em]">
                            <input type="text" className="block w-full py-[8px] leading-[1.43] align-middle z-[1] relative font-medium text-base px-5 rounded-full bg-transparent text-neutral-400 border border-solid border-gray hover:border-gold h-[4.17rem]" placeholder="Full Name" />
                            <input type="email" className="block w-full py-[8px] leading-[1.43] align-middle z-[1] relative font-medium text-base px-5 rounded-full bg-transparent text-neutral-400 border border-solid border-gray hover:border-gold h-[4.17rem]" placeholder="Email" />
                            <input type="number" className="block w-full py-[8px] leading-[1.43] align-middle z-[1] relative font-medium text-base px-5 rounded-full bg-transparent text-neutral-400 border border-solid border-gray hover:border-gold h-[4.17rem]" placeholder="05 888 6666" />
                            <input type="submit" className="cursor-pointer border-0 py-[9px] px-[15px] font-semibold w-full rounded-full text-bt-primary bg-gold transition-all duration-200 mt-1 h-[4.17rem]" value="Download" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="-right-[3em] flex absolute h-[2.5em] w-[2.5em] items-center justify-center flex-col text-white top-[0%] bottom-auto left-auto pointer-events-none">
                <IconClose />
            </div>
        </div>
    </div>;
}

export default HeaderPopup;