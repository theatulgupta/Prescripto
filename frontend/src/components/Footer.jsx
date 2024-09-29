import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="w-40 mb-5" src={assets.logo} alt="Logo" />
          <p className="w-full leading-6 text-gray-600 md:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repudiandae ratione
            earum, praesentium ipsa error qui repellat illum. Voluptas officia doloremque quam
            placeat? Quae, libero.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9616000016</li>
            <li>john_doe@mail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright &copy;
          {new Date().getFullYear()} Prescripto. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
