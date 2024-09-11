import React from "react";

const Banner = () => {
  return (
    <section className="px-20 w-full ">
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-lg p-20 mb-20">
        <h2 className="text-[40px] font-bold text-white text-center">
          Embrace the Future of Cash <br /> Application Today
        </h2>
        <div className="flex gap-6 justify-center mt-10">
          <button
            className={
              "text-black font-semibold px-5 text-base leading-4 p-3 rounded-xl bg-secondary"
            }
          >
            Schedule a Demo
          </button>
          <button
            className={`text-secondary font-semibold px-5 text-base border-[2px] border-secondary leading-4 p-3 rounded-xl bg-transparent`}
          >
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
