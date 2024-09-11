import React from "react";
import image1 from "../assets/experience/image1.png";
import image2 from "../assets/experience/image2.png";
import image3 from "../assets/experience/image3.png";
import image4 from "../assets/experience/image4.png";

const list = [
  {
    logo: image1,
    title: "Automate Cash Application",
    desc: "Auto-match payments and extract remittances from even unstructured data, and achieve straight-through posting.",
  },
  {
    logo: image2,
    title: "Achieve Exceptional Accuracy",
    desc: "Ensure precise payment matching, even with partial or overpayments, to reduce posting errors and compliance nightmares.",
  },
  {
    logo: image3,
    title: "Deliver Real-time Visibility",
    desc: "Gain real-time visibility into cash flow and AR aging to optimize collection strategies and improve forecasting accuracy.",
  },
  {
    logo: image4,
    title: "Enhance Customer Experience",
    desc: "Avoid disputes, incorrect follow-ups and improve customer satisfaction with real-time, touchless cash applications.",
  },
];

const Experience = () => {
  return (
    <section className="px-20 w-full bg-[#E4FDFF]">
      {/* title */}
      <div className="flex py-14 justify-center lg:justify-between lg:flex-row flex-col  lg:items-end">
        <h2 className="lg:text-[40px] text-[30px] font-bold bg-gradient-to-b from-blue-600 to-black bg-clip-text text-transparent shrink-0">
          Experience <br /> Cash Application <br /> Perfection
        </h2>
        <p className="text-start max-w-lg text-lg leading-8">
          Achieve touchless cash application to enable faster and accurate
          financial reporting for your business and a better experience for your
          customers.
        </p>
      </div>
      {/* points */}
      <div className="pb-4 flex lg:flex-row flex-col items-center   justify-center lg:justify-between">
        {list.map((it, i) => (
          <div key={i} className="p-6 bg-white w-[305px] m-4  h-[420px]">
            <img src={it.logo} alt="icon" className="h-[55px] w-[55px] my-4" />
            <h4 className="font-bold my-6 text-xl">{it.title}</h4>
            <p className="text-lg md:line-clamp-3 xl:line-clamp-none">{it.desc}</p>
          </div>
        ))}
      </div>
      {/* buttons */}
      <div className="flex justify-center p-12 pb-14">
        <div className="flex gap-6">
          <button
            className={
              "text-white font-semibold px-5 text-base leading-4 p-3 rounded-xl bg-[#7C3AED]"
            }
          >
            Schedule a Demo
          </button>
          <button
            className={`text-[#7C3AED] font-semibold px-5 text-base border-[2px] border-[#7C3AED] leading-4 p-3 rounded-xl bg-transparent`}
          >
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
