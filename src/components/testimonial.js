import ibmlogo from "../photos/ibmlogo.png";
import client1 from "../photos/client1.png";
import client2 from "../photos/client2.png";
function Testimoni() {
    return (
      
        <div className="text-center content-center pt-20">
          <h1 className="text-4xl text-black md:text-6xl md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0 ">
             Testimonials
          </h1>
          <div className="text-center flex justify-center content-center pt-3">
          <img src={ibmlogo} alt="ibm" />
          </div>
          <h3 className=" hidden md:block text-xl pt-6 text-black  mt-0 ">
          Most calendars are designed for teams. Slate is designed for freelancers <br className="hidden md:block"  />who want simple way to plan their schedule.
        </h3>
        <h3 className=" md:hidden text-base pt-6 text-black  mt-0 ">
          Most calendars are designed for teams.<br/> Slate is designed for freelancers who want a <br/> simple way to plan their schedule.
        </h3>
       
      <div className="hidden md:flex justify-center content-center pt-10">
        <img src={client1} alt="ibm" />
      </div>

      
      <div className="md:hidden flex justify-center text-center pt-7">

      <img src={client2} alt="ibm" />
      </div>
      <div className="text-center pb-16 content-center ">
      <div className="mt-2 pt-4 md:pt-20 md:mt-8">
          <button
            className="md:px-12  md:py-3  md:text-lg  text-xs  px-6 py-2 text-white font-bold bg-blue-500 rounded-full hover:bg-blue-600"
            onClick={() => {
              
              console.log("Try For Free button clicked!");
            }}
          >
            More Testimonials
          </button>
        </div>
        </div>
          </div>
    )}
export default Testimoni