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
      title: "Your Partner in Finding, Selling, or Leasing Your Dream Property",
      desc: "Our team of experts offers comprehensive property management services and guidance on securing residency in the UAE, ensuring a seamless and rewarding experience.",
    },
    {
      title: "Personalized Consultations for Your Investment Strategy",
      desc: "Maximize the value of your property with our expert guidance. By partnering with leading banks in Dubai, we secure the best mortgage options and favorable terms for our clients.",
    },
  ];

  const statistics = [
    {
      id: "1",
      title: "15 years",
      desc: "Working with real estate since 2008",
      icon: <IconStat />,
    },
    {
      id: "2",
      title: "120",
      unit: "thousands",
      desc: "Сlients and the Real Estate market",
      icon: <IconHouse />,
    },
    {
      id: "3",
      title: "Top-5",
      desc: "Best Performing Agencies",
      unit: "2023",
      icon: <IconRocket />,
      isDark: true
    },
    {
      id: "4",
      title: "> 700",
      desc: "Who specialize in your target area",
      unit: "agents",
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
