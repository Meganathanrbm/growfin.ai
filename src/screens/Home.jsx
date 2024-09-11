import React from "react";
import Nav from "./Nav";
import home from "../assets/home/home.png";
import Buttons from "../components/Buttons";

const Home = () => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-900 h-auto overflow-hidden w-full px-20">
      <Nav />
      <section className="flex py-14 lg:flex-row flex-col gap-12 ">
        {/* left */}
        <div className="flex justify-center flex-col">
          <h1 className="text-white font-bold text-[45px]  lg:text-[55px] leading-[70px]">
            Real-Time <br /> Cash Application <br /> Software
          </h1>
          <p className="text-[#FFFFFF]  mt-6 mb-16 text-lg  max-w-[445px]">
            Radically minimize manual intervention and achieve same-day closure
            with Growfin’s ML-powered Cash Application that delivers accurate,
            touchless posting.
          </p>
          <div className="flex lg:flex-row flex-col gap-4 lg:gap-6">
            <button
              className={
                "text-black font-semibold px-5 text-base leading-4 p-3  rounded-xl bg-secondary"
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
        {/* right-image */}
        <div className="lg:ml-[10%] flex justify-center">
          <img
            className="object-contain h-[480px] w-auto"
            src={home}
            alt="home"
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
