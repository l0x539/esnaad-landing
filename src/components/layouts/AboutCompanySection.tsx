import React from "react";
import IconStat from "../icons/IconStat";
import IconHouse from "../icons/IconHouse";
import IconRocket from "../icons/IconRocket";
import IconPerson from "../icons/IconPerson";
import StatisticBox from "../box/StatisticBox";
import FadeInWrapper from "./FadeInWrapper";

function AboutCompanySection() {
  const arr = [
    {
      title: "A Visionary Force in Urban Development",
      desc: "Esnaad, a leading real estate developer, is a dynamic subsidiary of Aura Holdings. Under the visionary leadership of CEO Ashraf Elbendari, Esnaad has rapidly established itself as a creator of exceptional living spaces.",
    },
    {
      title: "A Legacy of Enduring Excellence",
      desc: "Esnaad has successfully completed numerous projects, attracting a diverse clientele. The company is expanding its operations in Dubai to contribute to the city's growth.",
    },
  ];

  const statistics = [
    {
      id: "1",
      title: "20 years",
      desc: "Working with real estate since 2004",
      icon: <IconStat />,
    },
    {
      id: "2",
      title: "1.2",
      unit: "thousands",
      desc: "GCC region and Europe & MENA",
      icon: <IconHouse />,
    },
    {
      id: "3",
      title: "Tax",
      desc: "Tax-friendly environment & stable currency",
      unit: "Advantages",
      icon: <IconRocket />,
      isDark: true
    },
    {
      id: "4",
      title: "ROI",
      desc: "For business and family",
      unit: ">6%",
      icon: <IconPerson />,
    },
  ];
  return (
    <section id="aboutus">
      {/* container */}
      <div className="px-[6.26rem] relative">
        {/* row 1 */}
        <FadeInWrapper className="flex flex-col lg:flex-row">
          {/* col 1 */}
          <div className=" uppercase text-[2.5rem] lg:text-[1.25rem] w-full lg:w-1/3 ">
            About the company:
          </div>
          {/* col 3 */}
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-4 lg:border-t lg:border-t-light-grey pt-[1.25rem]">
            <Offer offre={arr[0]} />
            <div className="hidden lg:block h-full w-[1px] bg-light-grey"></div>
            <Offer offre={arr[1]} />
          </div>
        </FadeInWrapper>

        {/* row 2 */}
        <FadeInWrapper className="flex gap-6 mt-16 flex-wrap">
          {statistics.map((stat) => (
            <StatisticBox
              key={stat.id}
              icon={stat.icon}
              title={stat.title}
              desc={stat.desc}
              unit={stat.unit}
              isDark={stat.isDark}
            />
          ))}
        </FadeInWrapper>
      </div>
    </section>
  );
}

export default AboutCompanySection;

const Offer: React.FC<{ offre: { title: string; desc: string } }> = ({
  offre: { title, desc },
}) => {
  return (
    <div className="lg:w-1/2  pb-6 lg:pb-0 pt-12 lg:pt-[1.25rem] border-t border-t-light-grey lg:border-0">
      <h2 className=' text-6xl lg:text-[2rem] font-light leading-[1.2]'>{title}</h2>
      <p className="text-silver leading-normal text-4xl lg:text-[1.13rem] mt-[1.56rem]">
        {desc}
      </p>
    </div>
  );
};
