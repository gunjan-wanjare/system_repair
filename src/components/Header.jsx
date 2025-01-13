import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from '../assets/system_repair_logo.png';
import { FaWhatsapp } from "react-icons/fa6";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This function will check if the current page is active
  const isActive = (path) => location.pathname === path ? "text-[#52AB98]" : "text-gray-700";

  return (
   <nav className="bg-[#92929266] shadow-md relative">
  <div className="flex justify-between items-center max-w-[1200px] h-[70px] px-4 md:px-8 mx-auto">
    {/* Logo Section */}
    <div className="flex items-center">
      <img
        className="h-16 w-20 object-contain" 
        src={Logo}
        alt="Logo"
      />
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-10">
      <Link to="/" className={`font-medium ${isActive("/")}`}>
        Home
      </Link>
      <Link to="/about" className={`font-medium ${isActive("/about")}`}>
        About
      </Link>
      <Link to="/contact" className={`font-medium ${isActive("/contact")}`}>
        Contact Us
      </Link>
      <Link to="/faqs" className={`font-medium ${isActive("/faqs")}`}>
        FAQs
      </Link>
     
    </div>
     <button className="bg-[#52AB98] text-white w-[130px] h-[35px] rounded-lg shadow hover:bg-[#428a7b] text-center mr-[5px]">
          Download App
        </button>

    {/* Mobile Menu Toggle */}
    <button
      className="md:hidden p-2 text-gray-700"
      onClick={toggleMenu}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden absolute top-[70px] left-0 right-0 bg-white shadow-lg z-50">
      <div className="flex flex-col px-4 py-4 space-y-4">
        <Link
          to="/"
          className={`font-medium ${isActive("/")}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`font-medium ${isActive("/about")}`}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`font-medium ${isActive("/contact")}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </Link>
        <Link
          to="/faqs"
          className={`font-medium ${isActive("/faqs")}`}
          onClick={() => setIsMenuOpen(false)}
        >
          FAQs
        </Link>
        <button className="bg-[#52AB98] text-white w-full h-[40px] rounded-lg shadow hover:bg-[#428a7b]">
          Download App
        </button>
      </div>
    </div>
  )}

  {/* WhatsApp Button */}
  <a
    href="https://api.whatsapp.com/send/?phone=%2B917489806724&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-4 z-50"
  >
    <FaWhatsapp className="text-green-800 h-[50px] w-[50px]" />
  </a>
</nav>

  );
};

export default Header;
