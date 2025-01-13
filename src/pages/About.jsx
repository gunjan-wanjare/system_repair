import React from "react";
import { MdMenuBook } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa6";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="ml-4 sm:ml-[30px] md:ml-[100px] lg:ml-[430px] pt-14 mb-20 animate-fade-in">
        <h1 className="font-bold text-3xl p-1 text-gray-900">Our Values</h1>
        <h3 className="p-1 text-lg text-gray-700">What we love and stand for every day</h3>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* First Column */}
        <div className="flex flex-col gap-6 w-full sm:w-[340px] md:w-[340px] lg:w-[340px]">
          {/* Reliability Card */}
          <div className="card bg-gray-100 shadow-lg rounded-lg h-auto w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-200 group">
            <div className="p-4 space-y-3">
              <MdMenuBook className="h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <h1 className="font-semibold text-2xl text-gray-900">Reliability</h1>
              <div className="space-y-3">
                <p className="text-gray-700">We are open as a team and as a Product</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We don't put walls up unless it's necessary</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We become better when we share information</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We are open to diversity of opinion, backgrounds, and thought</p>
              </div>
            </div>
          </div>

          {/* Online Access Card */}
          <div className="card bg-blue-50 shadow-lg rounded-lg h-auto w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 group">
            <div className="p-4 space-y-3">
              <TbWorld className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <h1 className="font-semibold text-2xl text-gray-900">Online Access</h1>
              <div className="space-y-3">
                <p className="text-gray-700">We are open as a team and as a Product</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We don't put walls up unless it's necessary</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We become better when we share information</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We are open to diversity of opinion, backgrounds, and thought</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-6 w-full sm:w-[340px] md:w-[340px] lg:w-[340px] mt-[-130px] pb-9">
          {/* Professional Partners Card */}
          <div className="card bg-slate-100 shadow-lg rounded-lg h-auto w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-200 group">
            <div className="p-4 space-y-3">
              <FaAward className="h-12 w-12 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
              <h1 className="font-semibold text-2xl text-gray-900">Professional Partners</h1>
              <div className="space-y-3">
                <p className="text-gray-700">We are open as a team and as a Product</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We don't put walls up unless it's necessary</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We become better when we share information</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We are open to diversity of opinion, backgrounds, and thought</p>
              </div>
            </div>
          </div>

          {/* Fast Service Card */}
          <div className="card bg-gray-50 shadow-lg rounded-lg h-auto w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-200 group">
            <div className="p-4 space-y-3">
              <IoFlashOutline className="h-12 w-12 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
              <h1 className="font-semibold text-2xl text-gray-900">Fast Service</h1>
              <div className="space-y-3">
                <p className="text-gray-700">We are open as a team and as a Product</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We don't put walls up unless it's necessary</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We become better when we share information</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We are open to diversity of opinion, backgrounds, and thought</p>
              </div>
            </div>
          </div>

          {/* Trusted Card */}
          <div className="card bg-blue-50 shadow-lg rounded-lg h-auto w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 group">
            <div className="p-4 space-y-3">
              <FaHandHoldingHeart className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <h1 className="font-semibold text-2xl text-gray-900">Trusted</h1>
              <div className="space-y-3">
                <p className="text-gray-700">We are open as a team and as a Product</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We don't put walls up unless it's necessary</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We become better when we share information</p>
                <hr className="border-t border-gray-200" />
                <p className="text-gray-700">We are open to diversity of opinion, backgrounds, and thought</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
