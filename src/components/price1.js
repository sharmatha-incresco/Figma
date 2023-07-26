import React from "react";

function Price1() {
  return (
    <div className="text-center content-center bg-white  border border-gray-300 rounded-xl w-fit pt-8 h-fit p-6">
      <h1 className="text-20px md:font-bold font-bold text-black md:text-20px md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0">
        FREE
      </h1>
      <h3 className="text-16px text-black md:text-16px md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0">
        Organize across all<br />apps by hand
      </h3>
      <div className="text-center inline-flex pt-5">
        <h1 className="text-9xl font-bold">0</h1>
        <h2 className="text-3xl font-bold"> $ per month</h2>
      </div>
      <div className="text-15px">
        <ul className="space-y-5">
          <li>Pricing Features</li>
          <li>Pricing Features</li>
          <li>Pricing Features</li>
          <li>Pricing Features</li>
          <li>Pricing Features</li>
        </ul>
        <div className="pt-5">
        <button className="px-14 py-2 text-white bg-blue-500  rounded-full mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Price1;
