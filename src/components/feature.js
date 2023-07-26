import Lapvdo from '../photos/lapvdo.png'
import Refvdo from '../photos/refvdo.png'
import Icon1 from '../photos/circleicon.png';
import Icon2 from '../photos/penicon.png';
import Icon3 from '../photos/brushicon.png';
function Feature() {
    return (
        <div className="text-center content-center pt-20">
            <h1 className="text-5xl text-black md:text-6xl  md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0 ">
                Features
            </h1>
            <h3 className=" md:block hidden md:text-3xl md:max-w-xl md:text-black md:mx-auto ">
                Most calendars are designed for teams.<br /> Slate is designed for freelancers.
            </h3>
            <h3 className=" text-xl pt-2 md:hidden ">
                Most calendars are <br /> designed for teams.
            </h3>
            <div className="flex justify-center ">
                <div className=" md:hidden">
                    <img src={Lapvdo} alt="Lapvdo" />
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5 md:pt-32 md:gap-8 justify-center">
                <div className="flex justify-center">
                    <div>
                    <img src={Icon1} alt="Icon1" className="w-16 h-16 mx-auto mb-4" />
                        <h4 className="text-xl font-bold">Design with real data</h4>
                        <div className="md:pt-5 md:text-xl text-base pt-3">
                        <p>Slate helps you see how<br/> many more days you need<br/>to work to reach your<br/>financial goal.</p>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div>
                    <img src={Icon2} alt="Icon2" className="w-16 h-16 mx-auto mb-4" />
                        <h4 className="text-xl font-bold">Fastest way to<br/>take action</h4>
                        <div className="md:pt-5 md:text-xl text-base pt-3">
                        <p>Slate helps you see how<br/> many more days you need<br/>to work to reach your<br/>financial goal.</p>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div>
                    <img src={Icon3} alt="Icon3" className="w-16 h-16 mx-auto mb-4" />
                        <h4 className="text-xl font-bold">OenType features<br/>Variables fonts</h4>
                        <div className="md:pt-5 md:text-xl text-base pt-3">
                        <p>Slate helps you see how<br/> many more days you need<br/>to work to reach your<br/>financial goal.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="md:block hidden justify-center ">
                    <img src={Refvdo} alt="Refvdo" />
                </div>
            </div>
        </div>
    )
}
export default Feature;
