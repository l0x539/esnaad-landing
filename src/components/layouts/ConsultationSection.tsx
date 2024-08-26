import Image from "next/image";
import React from "react";
import img from "@/assets/images/AGENT-IMAGE.png";
import Flag from "react-flagkit";
import { FaCaretDown } from "react-icons/fa6";
import FadeInWrapper from "./FadeInWrapper";

function ConsultationSection() {
  return (
    <section id="contact" className="">
      {/* padding global */}
      <div className="px-[3.13em]">
        {/* container */}
        <div className="max-w-[100em] mx-auto px-[3.13em]">
          {/* large padding top  */}
          <FadeInWrapper className="pt-[7.8em] pb-0">
            {" "}
            {/* grid container */}
            <div className="md:grid flex flex-col md:grid-cols-[0.75fr_1fr] gap-4  font-manrope pb-[7.8em]">
              <div className="md:col-span-1 md:row-span-1 text-[8rem] md:text-[4.2rem]  leading-none ">
                Get Consultation from sales team
              </div>
              <Image
                src={img}
                width={706}
                height={706}
                className="hidden md:block col-start-2 col-end-3 row-start-1 row-end-3 w-[34rem] mr-0 pb-0 pr-0 max-w-full align-middle rounded-full border border-silver-lux"
                alt="woman picture"
              />
              <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 self-start justify-self-end text-silver md:max-w-[18rem] mt-6  mb-0 text-[2.7rem] md:text-[1.2rem] md:leading-8 pb-0 pt-6 rounded-3xl bg-white">
                Our Specialists Provide Expert Advice on Top Luxury Real Estate Investments, Ensuring Maximum Benefits and Optimal Returns for You.
              </div>

              {/* contact form */}
              <div className="md:col-span-1 md:row-span-1 w-full md:h-[19.5em] mb-[15px]">
                <form
                  action=""
                  className="gap-x-[0.94em]  gap-y-8 md:gap-y-[0.94em] flex flex-col justify-between"
                >
                  <input
                    type="text"
                    name="lead name"
                    id="lead-name"
                    className="input-class px-20 md:px-5"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    name="lead email"
                    id="lead-email"
                    className="input-class px-20 md:px-5"
                    placeholder="Email"
                  />
                  {/* phone number input */}
                  <div className="w-full relative">
                    {/* flag icon */}
                    <button id="country" className=" absolute top-0 bottom-0 left-6 md:left-3 right-auto flex justify-center items-center  p-[1px]">
                    <Flag country="US" className=" w-9 h-9 md:w-5 md:h-5"/> {/* United States Flag */}
                    <FaCaretDown className="ml-[1px] h-5 w-5 md:w-3 md:h-3"/>
                    </button>
                    <input
                      type="text"
                      name="lead phone number"
                      id="lead-phone-number"
                      className="input-class w-full pl-24 md:pl-14"
                      placeholder="0551 34 36 37"
                    />
                  </div>
                  <button id="send consultation" type="submit" value="" className="submit-class " >
                    send request
                  </button>
                </form>
              </div>
            </div>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}

export default ConsultationSection;
