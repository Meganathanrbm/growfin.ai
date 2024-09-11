import React from "react";
import about from "../assets/about/about.png";
import image1 from "../assets/about/image1.png";
import image2 from "../assets/about/image2.png";
import image3 from "../assets/about/image3.png";
import image4 from "../assets/about/image4.png";

const listdetails = [
  {
    icon: image1,
    percentage: "95",
    description: "Increase in same-day invoice posting ",
  },
  {
    icon: image2,
    percentage: "70",
    description: "Reduction in posting delays and errors ",
  },
  {
    icon: image3,
    percentage: "75",
    description: "Increase in automation for manual Cash Application",
  },
  {
    icon: image4,
    percentage: "100",
    description: "Improvement in customer communication & experience",
  },
];

const About = () => {
  return (
    <section className="px-20 w-full pt-8 pb-2">
      {/* header */}
      <div className="p-4 flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold bg-gradient-to-b from-blue-600 to-blue-900 bg-clip-text text-transparent">
          What our Early Customers
        </h2>
        <h2 className="text-[40px] font-bold bg-gradient-to-b from-blue-950 to-blue-950 bg-clip-text text-transparent">
          have Already Achieved
        </h2>
      </div>
      {/* content */}
      <div className="flex justify-center gap-12">
        {/* image */}
        <div className="m">
          <img
            src={about}
            className="object-contain max-w-[500px]"
            alt="about"
          />
        </div>
        {/* list */}
        <div className="flex flex-col justify-center">
          {listdetails.map((it, i) => (
            <div
              key={i}
              className={`flex items-center gap-6 p-2 py-6  ${
                i !== 3 && "border-b-2 border-[#57534E]"
              }`}
            >
              <img src={it.icon} className="h-[45px] w-[45px]" alt="" />
              <span className="font-bold text-[35px] w-24">
                {it.percentage}%
              </span>
              <span className="max-w-[270px] text-base">{it.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
