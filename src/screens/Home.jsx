import React from "react";
import Nav from "./Nav";
import home from "../assets/home/home.png";
import Buttons from "../components/Buttons";

const Home = () => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-900 h-screen overflow-hidden w-full px-20">
      <Nav />
      <section className="flex py-14 gap-12">
        {/* left */}
        <div className="">
          <h1 className="text-white font-bold  text-[55px] leading-[70px]">
            Real-Time <br /> Cash Application <br /> Software
          </h1>
          <p className="text-[#FFFFFF]  mt-6 mb-16 text-lg  max-w-[445px]">
            Radically minimize manual intervention and achieve same-day closure
            with Growfin’s ML-powered Cash Application that delivers accurate,
            touchless posting.
          </p>
          <Buttons />
        </div>
        {/* right-image */}
        <div className="ml-[10%]">
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
