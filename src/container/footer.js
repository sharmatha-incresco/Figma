import TwitterLogo from '../photos/twitter.png';
import FacebookLogo from '../photos/facebook.png';
import LinkedInLogo from '../photos/linkedin.png';
import Mapblock from "../photos/block.png";
import Phoneblock from "../photos/phoneblock.png";

function Footer() {
  return (
    <div className="bg-slate-800 text-white pb-20 pt-20">
      <div className="md:px-80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Pages</h3>
            <p className="mb-4">Home</p>
            <p className="mb-4">Product</p>
            <p className="mb-4">Pricing</p>
            <p className="mb-4">About</p>
            <p className="mb-4">Contacts</p>
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Tomothy</h3>
            <p className="mb-4">Eleanor Edwards</p>
            <p className="mb-4">Ted Robertson</p>
            <p className="mb-4">Annette Russell</p>
            <p className="mb-4">Jennie Mckinney</p>
            <p className="mb-4">Gloria Richards</p>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Jane Black</h3>
            <p className="mb-4">Philip Jones</p>
            <p className="mb-4">Product</p>
            <p className="mb-4">Colleen Russell</p>
            <p className="mb-4">Marvin Hawkins</p>
            <p className="mb-4">Bruce Simmons</p>
          </div>

          <div className="text-left content-end"> 
            <div className="flex justify-center">
              <div className=''>
                <img src={Mapblock} alt="Icon1" className="w-fit h-fit mx-auto mb-4" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className=''>
                <img src={Phoneblock} alt="Icon2" className="w-fit h-fit mx-auto mb-4" />
              </div>
            </div>
            <div className="flex justify-start items-center pl-3 pr-4 space-x-3">
              <img src={TwitterLogo} alt="Twitter" className="h-8 w-8" />
              <img src={FacebookLogo} alt="Facebook" className="h-8 w-8" />
              <img src={LinkedInLogo} alt="LinkedIn" className="h-10 w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;