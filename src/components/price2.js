import React from "react";

function Price2() {
  return (
    <div className="text-center content-center bg-blue-500  border border-gray-300 rounded-xl md:w-fit w-80 h-max md:h-fit p-6 md:pl-5 md:pb-32 md:pt-8">
      <h1 className="text-20px md:font-bold font-bold text-white md:text-20px md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto pt-10 mt-0">
        STANDARD
      </h1>
      <h3 className="text-16px text-white  md:text-16px md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0">
        Organize across all<br />apps by hand
      </h3>
      <div className="text-center inline-flex text-white pt-5">
        <h1 className="text-9xl font-bold">10</h1>
        <h2 className="text-3xl font-bold"> $ per month</h2>
      </div>
      <div className="text-15px text-white">
        <ul className="space-y-7">
          <li>Pricing Features</li>
          <li>Pricing Features</li>
          <li>Pricing Features</li>
          <li>Pricing Features</li>
          <li>Pricing Features</li>
        </ul>
        <div className="pt-5">
        <button className="px-14 py-2 bg-white text-blue-500   rounded-full mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Price2;
