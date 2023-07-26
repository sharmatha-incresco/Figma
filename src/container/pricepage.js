import React from "react";
import Price1 from "../components/price1";
import Price2 from "../components/price2";
import Price3 from "../components/price3";

function Pricepage() {
  return (
    <div className="text-center bg-slate-800 w-screen content-center pt-20">
      <h1 className="text-4xl text-white md:text-6xl md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0">
        Pricing
      </h1>
      <div className="md:pt-5 pt-2">
        <h3 className="md:block hidden md:text-lg md:max-w-xl md:text-white md:mx-auto">
          Most calendars are designed for teams.<br /> Slate is designed for freelancers.
        </h3>
        <h3 className="text-base pt-1 text-white md:hidden">
          Most calendars are <br /> designed for teams.
        </h3>
      </div>

      <div className="md:flex md:justify-center md:gap-8 px-4 md:pl-56 md:px-7 md:pt-20 pb-20">
        <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          <div className="pt-10">
          <Price1 />
          </div>
          <Price2 />
          <div className="pt-10">
          <Price3 />
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col justify-center mt-4 space-y-4">
        <div className="pl-8 mb-2">
          <Price1 />
        </div>
        <div className="pl-8 mb-2">
          <Price2 />
        </div>
        <div className="pl-8 mb-2 pb-20">
          <Price3 />
        </div>
      </div>
    </div>
  );
}

export default Pricepage;
