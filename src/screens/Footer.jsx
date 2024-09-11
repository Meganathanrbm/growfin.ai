import React from "react";

const Features = ["Strategize", "Collaboration ", "Tracking", "Reporting "];
const Footer = () => {
  return (
    <footer className="bg-black px-20 w-full py-16">
      <div className="">
        <div className="">
          <p className="text-[#FFFFFF] text-[15px] mb-1">Features</p>
          <div className="">
            {Features.map((item) => (
              <p className="text-[#FFFFFF] cursor-pointer text-base py-1">{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className=""></div>
    </footer>
  );
};
export default Footer;
