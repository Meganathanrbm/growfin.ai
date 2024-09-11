import React from "react";
import image1 from "../assets/cashApplication/image1.png";
import image2 from "../assets/cashApplication/image2.png";
import image3 from "../assets/cashApplication/image3.png";

const list = [
  {
    title: "Tight ERP Integration",
    desc: "Keep your books accurate and up-to-date, and the auditors at bay with  a seamless 2-way integration with your ERP.",
    img: image1,
  },
  {
    title: "Unmatched Security ",
    desc: "Stay confident and compliant with software that’s approved by the world’s most trusted certifications.",
    img: image2,
  },
  {
    title: "Wide Bank Coverage",
    desc: "Out-of-the-box connection to all your bank accounts across geographies to read payments in real-time.",
    img: image3,
  },
];
const CashApplication = () => {
  return (
    <section className="px-20 w-full">
      {/* header */}
      <div className="flex flex-col justify-center p-12 mt-16">
        <h2 className="lg:text-[40px] text-[20px] text-center font-bold bg-gradient-to-b from-blue-600 to-black bg-clip-text text-transparent shrink-0">
          Secure, Seamless, and Scalable <br /> Cash Application
        </h2>
        <p className="text-center mt-8 text-lg">
          Integrate seamlessly with all your banks and ERP, and keep your
          auditors <br /> happy with state-of-the-art compliance and security
          measures.
        </p>
      </div>
      {/* list */}

      {list.map((it, i) => (
        <div className="flex my-6">
          <h5 className="font-bold text-2xl w-[450px]">{it.title}</h5>
          <div className={` flex w-full ${i !== 2 ? "border-b-2" : ""} pb-6`}>
            <p className="text-base w-[500px] px-4 pr-20">{it.desc}</p>
            <img src={it.img} alt="brand-logo" className="w-auto h-[30px]" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CashApplication;
