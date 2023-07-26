import React, { useState } from 'react';
import FigmaLogo from '../photos/figmalogo';
import TwitterLogo from '../photos/twitter.png';
import FacebookLogo from '../photos/facebook.png';
import LinkedInLogo from '../photos/linkedin.png';
import Background from '../photos/background.png';

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header
    className="bg-white h-mobile lg:h-desktop text-zinc-300"
    style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // height: '899px lg:1200px',
       // Default height for web view
    }}
  >
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="hidden md:flex">
            <a href="#home" className="px-3 py-2 hover:text-gray-300">Home</a>
            <a href="#product" className="px-3 py-2 hover:text-gray-300">Product</a>
            <a href="#pricing" className="px-3 py-2 hover:text-gray-300">Pricing</a>
            <a href="#about" className="px-3 py-2 hover:text-gray-300">About</a>
            <a href="#contact" className="px-3 py-2 hover:text-gray-300">Contact</a>
          </div>
          <div className="md:pl-48">
           
            <FigmaLogo className="mr-4 md:block" />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="flex items-center px-3 py-2 text-zinc-300 ml-auto"
            onClick={toggleMenu}
          >
            <svg fill="none" viewBox="0 0 24 24" height="3em" width="2em" {...props}>
  <path
    fill="currentColor"
    d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 010-1.99h8.01c.55 0 .995.445.995.995zM22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 110-1.99h18.01c.55 0 .995.446.995.995zM21.005 6.99a.995.995 0 000-1.99H8.995a.995.995 0 100 1.99h12.01z"
  />
</svg>
          </button>
         
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          <img src={TwitterLogo} alt="Twitter" className="h-8 w-8" />
          <img src={FacebookLogo} alt="Facebook" className="h-8 w-8" />
          <img src={LinkedInLogo} alt="LinkedIn" className="h-10 w-10" />
        </div>
        {menuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-black py-2 px-4 rounded">
            <a href="#home" className="block py-1 hover:text-gray-300">Home</a>
            <a href="#product" className="block py-1 hover:text-gray-300">Product</a>
            <a href="#pricing" className="block py-1 hover:text-gray-300">Pricing</a>
            <a href="#about" className="block py-1 hover:text-gray-300">About</a>
            <a href="#contact" className="block py-1 hover:text-gray-300">Contact</a>
          </div>
        )}
      </div>
      <div className="text-center pt-64 md:bg-center md:py-8 md:pt-16">
      <h1 className="text-5xl text-zinc-300 md:text-7xl md:font-bold md:leading-snug md:mb-4 md:max-w-2xl md:mx-auto mt-0 ">
    The best <br className='md:hidden'/>products<br className='md:block'/>start with figma
  </h1>
        <h3 className=" md:block hidden md:text-lg md:max-w-xl md:text-zinc-300 md:mx-auto ">
          Most calendars are designed for teams. Slate is designed <br />for freelancers.
        </h3>
        <h3 className=" text-xs pt-7 md:hidden ">
          Most calendars are designed for teams.
        </h3>
        <div className="mt-2 pt-40  md:pt-56 md:mt-8">
          <button
            className="md:px-12  md:py-3  md:text-lg  text-xs  px-6 py-1 text-white font-bold bg-blue-500 rounded-full hover:bg-blue-600"
            onClick={() => {
              
              console.log("Try For Free button clicked!");
            }}
          >
            Try For Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
