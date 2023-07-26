import Macpic from "../photos/mac.png"
import React from "react";

function Organise() {
    return (
        <div className="text-center content-center pt-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 md:pt-12 md:gap-8 justify-center">
                <div className="flex justify-center">
                    <div>
                        <h4 className="md:text-4xl text-4xl  ">Fastest way to <br /> organize</h4>
                        <div className="md:pt-5 pt-2">
                            <h3 className=" md:block hidden md:text-lg md:max-w-xl md:text-black md:mx-auto ">
                                Most calendars are designed for teams. Slate is designed <br />for freelancers.
                            </h3>
                            <h3 className=" text-lg pt-1 md:hidden ">
                                Most calendars are <br/> designed for teams.
                            </h3>
                        </div>
                        <div className="md:pt-10 pt-3">
                            <button
                                className="md:px-12  md:py-3  md:text-lg  text-xs  px-6 py-2 text-white font-bold bg-blue-500 rounded-full hover:bg-blue-600"
                                onClick={() => {

                                    console.log("Try For Free button clicked!");
                                }}
                            >
                                Try For Free
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <img src={Macpic} alt="Mac" />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Organise;