import React from "react";
import { TbPhoneCalling } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { GiDominoMask } from "react-icons/gi";
import {
  FaLocationDot,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const ContactUS = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Heading Section with Animations */}
      <div className="hidden sm:flex flex-col sm:flex-row sm:space-x-96 mt-[-80px] pb-3 text-center sm:text-left">
  <h1 className="text-[#52AB98] font-bold text-2xl transition-transform transform hover:scale-110">
    Contact US
  </h1>
  <h1 className="text-[#52AB98] font-bold text-2xl transition-transform transform hover:scale-110">
    Our Location
  </h1>
</div>


        {/* Main Contact Section */}
        <div
          id="contact-section"
          className="flex flex-col sm:flex-row items-center justify-center bg-white rounded-xl p-4 space-y-4 sm:space-x-4 max-w-6xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          {/* Contact Information Section */}
          <div className="bg-[#52AB98] rounded-lg flex flex-col justify-between h-[500px] w-full sm:w-[450px] p-6 shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out ">
            <h1 className="text-white font-semibold text-xl mb-4">Contact Information</h1>
            <p className="mb-6 text-white opacity-80">
              Say something to start a live chat!
            </p>

            <div className="flex items-center space-x-2 mb-4 transition-transform transform hover:scale-110">
              <TbPhoneCalling className="text-lg text-white " />
              <h2 className="text-base font-medium text-white hover:text-black">
                +91 1236547890
              </h2>
            </div>

            <div className="flex items-center space-x-2 mb-4 transition-transform transform hover:scale-110">
              <MdEmail className="text-lg text-white hover:text-black" />
              <h2 className="text-base font-medium text-white hover:text-black">
                demo@gmail.com
              </h2>
            </div>

            <div className="flex items-start space-x-2 mb-6 transition-transform transform hover:scale-110">
              <FaLocationDot className="text-lg text-white hover:text-black" />
              <h2 className="text-base font-medium text-white hover:text-black">
                132 Dartmouth Street Boston,
                <br />
                Massachusetts 02156 United States
              </h2>
            </div>

            <div className="flex space-x-4">
              <FaWhatsapp className="text-white text-2xl rounded-lg hover:text-black transition-all duration-300 ease-in-out" />
              <FaSquareXTwitter className="text-white text-2xl rounded-lg hover:text-black transition-all duration-300 ease-in-out" />
              <FaSquareInstagram className="text-white text-2xl rounded-lg hover:text-black transition-all duration-300 ease-in-out" />
              <GiDominoMask className="text-white text-2xl rounded-lg hover:text-black transition-all duration-300 ease-in-out" />
            </div>
          </div>

          {/* Map Section with Smooth Scroll */}
          <div className="bg-white rounded-lg flex items-center justify-center h-[500px] w-full sm:w-[500px] shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <iframe
              className="rounded-lg h-full w-full transition-transform transform hover:scale-105"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25251.1816197802!2d75.8323883690458!3d22.685416679105323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5713dd242d%3A0x5214d3bcc2929db9!2sSystem%20Repair%20World%20%7C%20Computer%20Repair%7C%20Laptop%20Repair%20In%20Indore!5e0!3m2!1sen!2sin!4v1732043384368!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
