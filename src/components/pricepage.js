// Pricepage.js
import React from "react";
import Price1 from "./price1";
import Price2 from "./price2";
import Price3 from "./price3";

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
      <div className="md:grid md:grid-cols-3 grid-cols-1 justify-between flex md:gap-8 px-4 md:pl-56 md:px-7 md:pt-20 pb-20">
        <div className="md:block hidden md:mt-24">
          <Price1 />
        </div>
        <div className="md:block hidden md:mt-5">
          <Price2 />
        </div>
        <div className="md:block hidden md:mt-24">
          <Price3 />
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
