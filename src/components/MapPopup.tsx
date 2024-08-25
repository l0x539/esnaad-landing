import Image from "next/image";
import IconClose from "./icons/IconClose";
import map from "@/assets/images/MAP2.webp"

const MapPopup = () => {
    return (<div className="flex absolute items-center justify-center flex-col top-[0%] left-[0%] right-[0%] bottom-[0%]">
            <div className="relative p-10 m-auto max-w-[70rem] rounded-[1.25em] bg-white z-10 w-full bg-[length:auto,_contain] bg-repeat bg-head-modal">
                <div>
                    <Image loading="lazy" src={map} alt="Map of all Spark by Esnaad near Dubai locations." />
                </div>
                <div className="-right-[3em] flex absolute h-[2.5em] w-[2.5em] items-center justify-center flex-col text-white top-[0%] bottom-auto left-auto pointer-events-none">
                    <IconClose />
                </div>
            </div>
        </div>
    );
};

export default MapPopup;
