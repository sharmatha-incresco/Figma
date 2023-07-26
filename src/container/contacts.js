import React from "react";
import ContactForm from "../components/contactform";
import Map from "../photos/map.png";
import Phone from "../photos/phone.png";
import Mail from "../photos/mail.png";
import samplemap from "../photos/samplemap.png";
import TwitterLogo from '../photos/twitter.png';
import FacebookLogo from '../photos/facebook.png';
import LinkedInLogo from '../photos/linkedin.png';
import social from "../photos/social.png";

function Contacts() {
  return (
    <div className="text-center content-center pb-28 pt-20">
      <h1 className="text-4xl text-[#374754] md:text-6xl md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0">
        Contacts
      </h1>
      <div className="md:pt-5 pt-2">
        <h3 className="md:block hidden md:text-lg md:max-w-xl md:text-[#374754] md:mx-auto">
          Most calendars are designed for teams.<br /> Slate is designed for freelancers.
        </h3>
        <h3 className="text-base pt-1 text-[#374754] md:hidden">
          Most calendars are <br /> designed for teams.
        </h3>
      </div>

      {/* Grid for Contact Form and Remaining Part */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 md:pt-32 md:gap-5 justify-center">
        {/* Social Image (1st column in mobile view) */}
        <div className="pl-24 md:hidden h-fit justify-center">
          <img src={social} alt="Social" className="h-fit w-fit" />
        </div>
        <div className="h-fit hidden justify-center md:block">
          <ContactForm />
        </div>
        {/* Address, Phone, and Email (2nd column in mobile view) */}
        <div className="md:pr-40 md:flex-col justify-center">
          <div className="grid grid-cols-1 w-full md:flex-col md:grid-cols-3 gap-5">
            <div className="flex justify-center">
              <div>
                <img src={Map} alt="Icon1" className="w-fit h-fit mx-auto mb-4" />
                <h2 className="text-base">
                  6386 Spring St undefined Anchorage,<br />Georgia1273United States
                </h2>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <img src={Phone} alt="Icon2" className="w-fit h-fit mx-auto mb-4" />
                <h2 className="text-base">(843)555-0130</h2>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <img src={Mail} alt="Icon3" className="w-fit h-fit mx-auto mb-4" />
                <h2 className="text-base">wille.jennie@example.com</h2>
              </div>
            </div>
          </div>
          <div className="pt-6 md:block hidden">
            <img src={samplemap} alt="map" className="w-fit h-fit  mx-auto mb-4" />
          </div>
          <div className="md:block hidden h-fit justify-center">
            <img src={social} alt="Social" className="h-fit w-fit" />
          </div>
        </div>
        <div className="h-fit justify-center md:hidden py-6 px-10"> 
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
