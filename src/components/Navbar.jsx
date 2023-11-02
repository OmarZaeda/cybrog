import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="text-white flex justify-between items-center h-24 px-4">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">
          React.
        </h1>
        <ul className="space-x-4 hidden md:flex items-center">
          <li>
            <a
              className="hover:text-[#00df9a] transition-colors duration-500"
              href="/home">
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#00df9a] transition-colors duration-500"
              href="/company">
              Company
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#00df9a] transition-colors duration-500"
              href="/resources">
              Resources
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#00df9a] transition-colors duration-500"
              href="/about">
              About
            </a>
          </li>
          <li classname="p-4 ">
            <a
              className="hover:text-[#00df9a] transition-colors duration-500"
              href="/contact">
              Contact
            </a>
          </li>
          <button className="bg-[#00df9a] w-[150px] rounded-md font-medium mx-auto py-2 text-black hover:bg-white transition-colors duration-500">
            Get Started
          </button>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div>
          <ul
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
              REACT.
            </h1>
            <a href="">
              <li className="p-4 border-b border-gray-600 hover:border-[#00df9a] hover:text-[#00df9a] ease-in-out transition-colors duration-500">
                Home
              </li>
            </a>
            <a href="">
              <li className="p-4 border-b border-gray-600 hover:border-[#00df9a] hover:text-[#00df9a] ease-in-out transition-colors duration-500">
                Company
              </li>
            </a>
            <a href="">
              <li className="p-4 border-b border-gray-600 hover:border-[#00df9a] hover:text-[#00df9a] ease-in-out transition-colors duration-500">
                Resources
              </li>
            </a>
            <a href="">
              <li className="p-4 border-b border-gray-600 hover:border-[#00df9a] hover:text-[#00df9a] ease-in-out transition-colors duration-500">
                About
              </li>
            </a>
            <a href="">
              <li className="p-4 border-b border-gray-600 hover:border-[#00df9a] hover:text-[#00df9a] ease-in-out transition-colors duration-500">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
