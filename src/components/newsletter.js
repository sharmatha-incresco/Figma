import newspic from "../photos/newsletter.png"
import React, { useState } from "react";
function Newsletter()
{
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };
    return(
        <div className="text-center content-center pt-20">
            <h2 className="text-base font-bold text-black md:text-xl md:hidden mt-0 ">
            At your finger tips
        </h2>
        <h1 className="text-4xl pt-2 text-black md:hidden mt-0 ">
            Newsletter
        </h1>
        <h3 className=" md:hidden text-xl pt-5 text-black  mt-0 ">
          Most calendars are designed for teams.<br/> Slate is designed for freelancers.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 md:pt-32 md:gap-8 justify-center">
                
                <div className="flex justify-center">
                    <div>
                        <img src={newspic} alt="newsletter" />
                    </div>
                </div><div>
                <h3 className="hidden md:block md:font-bold md:text-2xl  md:pr-96 ">At your finger tips</h3>
                <h1 className="hidden md:block md:pt-4  md:text-7xl  md:pr-44 ">Lightining fast <br/>prototyping</h1>
                <h3 className="md:block font-bold  text-base md:text-2xl md:pt-12 md:pr-52 ">Subscribe to our Newsletter</h3>
                <h3 className="md:block text-base md:text-2xl md:pt-3 pt-2 md:pr-44">Available exclusivery on Figmaland</h3>
                <div className="md:pt-4 pt-3 md:pl-32 md:flex">
                   <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="md:w-96 w-96 h-12 md:h-16 px-4 py-2 mb-2 border text-black bg-gray-100 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                    />

                   <div className="md:pl-6"> 
                    <button
                        type="submit"
                        onClick={handleSubscribe}
                        className="md:w-32 w-96 h-12 md:h-16 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    >
                        Subscribe
                    </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newsletter