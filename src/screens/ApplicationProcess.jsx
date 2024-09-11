import React from "react";
import image1 from "../assets/applicationProcess/image.png";
import logo1 from "../assets/applicationProcess/logo1.png";

const tabs = [
  "Instant Capture",
  "Accurate Match",
  "Remittance Extraction",
  "Exceptions Handling",
  "Touchless Posting",
];
const ApplicationProcess = () => {
  return (
    <section className="px-20 w-full">
      {/* title */}
      <div className="flex py-14 lg:flex-row flex-col justify-between lg:items-end">
        <h2 className="lg:text-[40px] text-[30px] font-bold bg-gradient-to-b from-blue-600 to-black bg-clip-text text-transparent shrink-0">
          Transform Your <br /> Cash Application <br />
          Process
        </h2>
        <p className="text-start max-w-lg text-lg leading-8">
          Achieve touchless posting for 90% of payments while still retaining
          control over exceptions that need a little extra human touch.
        </p>
      </div>
      {/* sub tabs */}
      <div className="flex justify-between">
        {tabs.map((ti, i) => (
          <div
            className={`${
              i == 0
                ? "text-[#1E40AF] font-bold border-b-[4px] border-[#1E40AF]  px-8"
                : "text-black font-medium"
            }`}
          >
            {ti}
          </div>
        ))}
      </div>
      <div className="flex lg:flex-row flex-col mt-8 justify-between">
        {/* left content */}
        <div className="">
          <h5 className="font-bold text-2xl">
            Instantly Capture All <br /> Incoming Payments 
          </h5>
          <p className="max-w-xs     mt-4">
            Still logging into each of your bank accounts and wrestling with
            spreadsheets? Growfin integrates with your bank accounts to extract
            every incoming transaction in real-time. It's almost magic.
          </p>

          <div className="flex mt-8">
            <div className="border-r-2 p-2  max-w-[150px]">
              <img src={logo1} className="h-[40px] w-[40px] mb-1" alt="icon" />
              <p>Integrates with all major banks</p>
            </div>
            <div className="p-2 max-w-[150px]">
              <p className="font-bold text-[#1E40AF] text-xl mb-3">100%</p>
              <p>Identification of all transactions</p>
            </div>
          </div>
        </div>
        {/* right image */}
        <div className="">
          <img src={image1} alt="image" className="max-w-[600px]" />
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
