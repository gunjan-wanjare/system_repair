import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaMobileScreenButton,
} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-auto w-full bg-[#16363F] text-[#fff] pt-4">
      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8 py-4 max-w-[1200px] mx-auto border-b-2 border-[#f5f5f5] gap-8">
        {/* Popular Brands Section */}
        <div className="w-full lg:flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <FaMobileScreenButton className="text-m" />
            <h6 className="text-l">Popular Brand</h6>
          </div>
          <ul className="text-sm font-extralight grid grid-cols-2 sm:grid-cols-3 lg:block gap-2">
            <li>Apple</li>
            <li>Samsung</li>
            <li>Xiaomi</li>
            <li>Realme</li>
            <li>Oppo</li>
            <li>Huawei</li>
            <li>Infinix</li>
            <li>Nokia</li>
          </ul>
        </div>

        {/* Popular Mobile Section */}
        <div className="w-full lg:flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <FaMobileScreenButton className="text-m" />
            <h1 className="text-m">Popular Mobile</h1>
          </div>
          <ul className="text-sm font-extralight grid grid-cols-2 sm:grid-cols-3 lg:block gap-2">
            <li>iPhone 15 Pro</li>
            <li>Samsung Galaxy S22</li>
            <li>OnePlus 12R</li>
            <li>Realme C67</li>
            <li>Oppo A18</li>
            <li>Xiaomi Redmi Note 13</li>
            <li>Samsung Galaxy S23</li>
            <li>Infinix Hot 40 Pro</li>
          </ul>
        </div>

        {/* Popular Laptop Section */}
        <div className="w-full lg:flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <FaLaptopCode className="text-m" />
            <h1 className="text-l font-l">Popular Laptop</h1>
          </div>
          <ul className="text-sm font-extralight grid grid-cols-2 sm:grid-cols-3 lg:block gap-2">
            <li>Apple MacBook Air</li>
            <li>Dell XPS 13</li>
            <li>HP Spectre x360</li>
            <li>Lenovo ThinkPad X1</li>
            <li>Microsoft Surface 4</li>
            <li>Asus ROG Zephyrus</li>
            <li>Acer Predator</li>
            <li>Razer Blade 15</li>
          </ul>
        </div>

        {/* Last Section with Subscribe and Social Links */}
        <div className="w-full lg:flex-1 space-y-4">
          <h1 className="text-s font-light">
            Contact Us
            <br />
            +91 8521478965
          </h1>
          <h1 className="text-s font-light"> Email 
            <br />
            vyanwebs@gmail.com
          </h1>

          <div className="flex flex-col items-start mt-2 space-y-2">
            <h2 className="font-light">Follow Us</h2>
            <div className="flex space-x-4">
              <FaWhatsapp className="text-2xl hover:text-[#52AB98]" />
              <FaSquareFacebook className="text-2xl hover:text-[#52AB98]" />
              <FaSquareInstagram className="text-2xl hover:text-[#52AB98]" />
              <FaSquareXTwitter className="text-2xl hover:text-[#52AB98]" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Text Section */}
      <div className="flex flex-col justify-center items-center text-center font-extralight text-sm p-4">
        <p>Copyright © 2003-2024 Ltd. - All Rights Reserved.</p>
        <p className="px-4">
          Reproduction of material from any pages without permission is strictly
          prohibited.
        </p>
        <p className="flex items-center">
          Powered By VYANWEBS
        </p>
      </div>
    </div>
  );
};

export default Footer;
