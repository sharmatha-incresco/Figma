import React from "react";
import google from "../photos/google.png";
import microsoft from "../photos/microsoft.png";
import dropbox from "../photos/dropbox.png";
import uber from "../photos/uber.png";
import amazon from "../photos/amazon.png";

function Partners() {
  return (
    <>
      <div className="text-center content-center pt-20">
        <h1 className="text-4xl text-black md:text-6xl md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0">
          Partners
        </h1>
        <h3 className="text-base pt-3 md:text-3xl md:pt-8 md:max-w-xl md:text-[#374754] md:mx-auto">
          Most calendars are designed for teams.<br /> Slate is designed for freelancers.
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center mt-8">
          <div className="md:block mb-5 pl-4 text-center"> 
            <img src={google} alt="Partner 1" className="md:inline-block max-w-full h-auto" /> 
          </div>
          <div className="hidden md:block text-center">
            <img src={amazon} alt="Partner 2" className="md:inline-block max-w-full h-auto" />
          </div>
          <div className="md:block mb-5 text-center"> 
            <img src={microsoft} alt="Partner 3" className="md:inline-block max-w-full h-auto" /> 
          </div>
          <div className="hidden md:block text-center">
            <img src={uber} alt="Partner 4" className="md:inline-block max-w-full h-auto" />
          </div>
          <div className="hidden md:block text-center">
            <img src={dropbox} alt="Partner 5" className="md:inline-block max-w-full h-auto" />
          </div>
          <div className="hidden md:block text-center">
            <img src={google} alt="Partner 6" className="md:inline-block max-w-full h-auto" />
          </div>
          <div className="hidden md:block text-center">
            <img src={uber} alt="Partner 7" className="md:inline-block max-w-full h-auto" />
          </div>
          <div className="md:block mb-5 pl-4 text-center"> 
            <img src={amazon} alt="Partner 8" className="md:inline-block max-w-full h-auto" /> 
          </div>
        </div>
      </div>
      <div className="text-center content-center">
        <div className="mt-2 pt-4 md:pt-20 md:mt-8">
          <button
            className="md:px-12 md:py-3 md:text-lg text-xs px-6 py-1 text-white font-bold bg-blue-500 rounded-full hover:bg-blue-600"
            onClick={() => {
              console.log("Try For Free button clicked!");
            }}
          >
            Try For Free
          </button>
        </div>
      </div>
    </>
  );
}

export default Partners;
