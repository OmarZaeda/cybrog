import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            size={30}
            className="hover:text-[#00df9a] transition-colors duration-500 cursor-pointer"
          />
          <FaInstagram
            size={30}
            className="hover:text-[#00df9a] transition-colors duration-500 cursor-pointer"
          />
          <FaTwitterSquare
            size={30}
            className="hover:text-[#00df9a] transition-colors duration-500 cursor-pointer"
          />
          <FaGithubSquare
            size={30}
            className="hover:text-[#00df9a] transition-colors duration-500 cursor-pointer"
          />
          <FaDribbbleSquare
            size={30}
            className="hover:text-[#00df9a] transition-colors duration-500 cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400 mb-3">Solutions</h6>
          <ul>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Analytics
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Marketing
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Commerce
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Insights
              </li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 mb-3">Support</h6>
          <ul>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Pricing
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Documentation
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Guides
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                API Status
              </li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 mb-3">Company</h6>
          <ul>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                About
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Blog
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Jobs
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Press
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Careers
              </li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 mb-3">Legal</h6>
          <ul>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Claim
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Policy
              </li>
            </a>
            <a href="">
              <li className="py-2 text-sm hover:text-[#00df9a] transition-colors duration-500">
                Terms
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
