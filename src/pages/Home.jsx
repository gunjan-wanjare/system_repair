import React from "react";
import Repair from "../assets/home/repairGif.gif";
import ToolKit from "../assets/home/🦆 icon _tools_.svg";
import Revert from "../assets/home/🦆 icon _Return Outline_.svg";
import Stethoscope from "../assets/home/🦆 icon _Stethoscope_.svg";
import Iphone from "../assets/home/iphone 1.png";
import Ipad from "../assets/home/Ipad 1.png";
import Android from "../assets/home/android 1.png";
import Tablet from "../assets/home/tablet 1.png";
import Laptop from "../assets/home/laptop.webp";

const Home = () => {
  return (
    <div className="px-4 md:px-6 lg:px-4 pt-16 mt-8 lg:mt-0">
      {/* Hero Section */}
  <div className="flex relative top-[10px] items-center justify-center min-h-screen lg:pt-0 lg:mt-[00px] -translate-y-20">

  <div className="w-full max-w-[1150px] p-4 bg-white shadow-lg rounded-lg lg:mt-[-140px] mt-0 min-h-[200px]">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="w-full lg:w-[576px] flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 lg:mb-16 text-[#2B6777]">
            Fast, affordable
            <br /> and reliable repairs
          </h2>
          <p className="text-gray-700 font-bold sm:text-lg lg:text-xl">
            for your mobile devices
          </p>
        </div>
        <button className="bg-[#52AB98] text-white w-[220px] h-[60px] rounded-lg shadow hover:bg-[#428a7b] mx-auto my-8 lg:my-12">
          Download App
        </button>
      </div>
      <div className="w-full lg:w-[576px] h-[300px] lg:h-[400px]">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={Repair}
          alt="Repair"
        />
      </div>
    </div>
  </div>
</div>


      {/* Feature Cards */}
      <div className="flex flex-col sm:flex-row lg:flex-row justify-center gap-8 lg:gap-24 mt-6 lg:mt-[-220px]">
        {[ 
          {
            icon: ToolKit,
            title: "Trusted Professionals",
            description:
              "Rely on our team of professional technicians. We have a vast network of experts ready to assist you.",
          },
          {
            icon: Revert,
            title: "Quick Turnaround",
            description:
              "We aim to return your device as swiftly as possible, often completing repairs in 30 minutes or less.",
          },
          {
            icon: Stethoscope,
            title: "Free Diagnostics",
            description:
              "Unsure about the issue with your device? Don't worry, we offer a complimentary diagnosis.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[320px] h-[300px] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <img
              className="h-[60px] w-[60px] object-cover rounded-lg mb-6 mx-auto"
              src={card.icon}
              alt={card.title}
            />
            <h2 className="text-[#555555] mb-3 font-bold text-xl text-center">
              {card.title}
            </h2>
            <p className="text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Repairs Section */}
      <div className="mt-16">
        <div className="text-center pb-8">
          <h1 className="text-[#2B6777] text-3xl sm:text-4xl lg:text-5xl font-bold">
            All kinds of repairs. For real.
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {[ 
            { image: Iphone, title: "iPhone", description: "Cracked screens, water damage, battery problems, and more." },
            { image: Ipad, title: "iPad", description: "Cracked screens, battery problems, and software issues." },
            { image: Android, title: "Android", description: "We can do complex repairs like motherboard replacements." },
            { image: Tablet, title: "Tablet", description: "Fast and cost-effective solutions for all kinds of tablets." },
            { image: Laptop, title: "Laptop", description: "Expert solutions for all your laptop repair needs, we've got you covered!" }
          ].map((device, index) => (
            <div
              key={index}
              className="bg-white h-[300px] w-full sm:w-[260px] shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <img
                className="h-[100px] w-[110px] object-cover rounded-lg"
                src={device.image}
                alt={device.title}
              />
              <h1 className="text-[#555555] font-bold text-lg mt-4 text-center">
                {device.title}
              </h1>
              <p className="font-light mt-2 text-center">
                {device.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex justify-center items-center py-14">
        <div className="p-6 bg-white w-full max-w-[1060px] flex flex-col justify-center items-center text-center rounded-lg">
          <h1 className="text-[#555555] font-bold text-3xl lg:text-[2rem] mb-4">
            Get Your Mobile Device Repaired Today!
          </h1>
          <p className="text-gray-600 mb-6 w-full lg:w-[80%] mx-auto ">
            We use only the highest quality parts and offer a wide range of
            repair services, from simple screen replacements to complex
            motherboard repairs. We also offer same-day repairs in most cases!
          </p>
          <button className="bg-[#52AB98] text-white w-[200px] h-[60px] rounded-lg shadow hover:bg-[#428a7b]">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
