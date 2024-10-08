import React from "react";
import brand1 from "../assets/testimonials/brand1.png";
import brand2 from "../assets/testimonials/brand2.png";
import brand3 from "../assets/testimonials/brand3.png";
import quotes from "../assets/testimonials/quotes.png";

const brandLogos = [
  {
    logo: brand1,
  },
  {
    logo: brand2,
  },
  {
    logo: brand3,
  },
];
const Testimonials = () => {
  return (
    <section className="px-20 w-full">
      {/* brands */}
      <div className="flex justify-center lg:flex-nowrap flex-wrap items-center p-6 lg:p-12">
        {brandLogos.map((logo, i) => (
          <img
            key={i}
            alt="logo"
            className={`object-cover h-[35px] w-auto mx-20 lg:p-0 m-4 `}
            src={logo.logo}
          />
        ))}
      </div>
      {/* review */}
      <div className=" mb-5 lg:mb-10">
        <div className="flex justify-center items-end">
          <span className="border border-[#57534E] w-36 lg:w-44"></span>
          <img
            src={quotes}
            alt="quotes"
            className="lg:h-[50px] h-[40px] w-[50px] lg:w-[60px] mx-4 lg:mx-6"
          />
          <span className="border border-[#57534E] w-36 lg:w-44"></span>
        </div>
        <blockquote className="lg:p-8 p-6 text-center font-semibold leading-8 text-lg lg:text-[21px]">
          "Growfin’s Cash Application has helped us streamline the entire cash
          application <br /> process with less manual intervention & timely
          posting of payments. We were able <br /> to achieve one of our key
          objectives within months of going live."
        </blockquote>
        <p className="text-center text-lg">
          <span className="font-semibold">– Rohit Namboodiri</span>, AR Manager,
          Locus
        </p>
        <div className="flex justify-center gap-2 my-4 lg:my-8 items-center">
          <span className="lg:h-[16px] h-[10px] w-[10px] lg:w-[16px] bg-[#93C5FD] rounded-full"></span>
          <span className="lg:h-[16px] h-[10px] w-[10px] lg:w-[16px] bg-[#DBEAFE] rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
