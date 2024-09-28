import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col flex-wrap px-6 rounded-lg md:flex-row bg-primary md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col items-center gap-3 text-sm font-light text-white md:flex-row">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p className="w-[35vw]">
            Simply browse through out extensive list of trusted doctors,
            <br className="hidden sm:block" /> schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 px-8 py-3 m-auto text-sm text-gray-600 transition-all duration-300 bg-white rounded-full md:m-0 hover:scale-105"
          href="#speciality"
        >
          Book Appointment <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* Right Side */}
      <div className="relative md:w-1/2">
        <img
          className="bottom-0 w-full h-auto rounded-lg md:absolute"
          src={assets.header_img}
          alt="Header Image"
        />
      </div>
    </div>
  );
};

export default Header;
