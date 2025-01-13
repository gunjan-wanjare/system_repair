import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Faqs = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const navigate = useNavigate();

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  const handleContactClick = () => {
    navigate("/contact#contact-section");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100 pb-6">
      <div className="w-full max-w-4xl px-3">
        <h1 className="text-[#428a7b] font-semibold text-3xl text-center mb-6 pt-7">
          Most Frequently Asked FAQ's
        </h1>

        <div className="space-y-6">
          {/* FAQ Question 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div
              onClick={() => toggleAnswerVisibility(1)}
              className="cursor-pointer text-[#555] font-semibold text-xl hover:text-[#52AB98] transition-all duration-300 ease-in-out"
            >
              <p>How do I fix my mobile screen?</p>
            </div>
            {visibleAnswer === 1 && (
              <div className="mt-2 text-[#555] text-base">
                <p>
                  To fix a mobile screen, you should first check if the screen
                  is physically cracked or just has display issues. If the
                  screen is cracked, it will need to be replaced. Visit a
                  professional repair shop for accurate diagnosis and
                  replacement.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Question 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div
              onClick={() => toggleAnswerVisibility(2)}
              className="cursor-pointer text-[#555] font-semibold text-xl hover:text-[#52AB98] transition-all duration-300 ease-in-out"
            >
              <p>My laptop is not turning on, what should I do?</p>
            </div>
            {visibleAnswer === 2 && (
              <div className="mt-2 text-[#555] text-base">
                <p>
                  If your laptop isn't turning on, try checking the power cable
                  and battery. If those are fine, there could be an internal
                  issue with the motherboard or power supply. It's best to take
                  it to a professional repair shop for a thorough checkup.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Question 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div
              onClick={() => toggleAnswerVisibility(3)}
              className="cursor-pointer text-[#555] font-semibold text-xl hover:text-[#52AB98] transition-all duration-300 ease-in-out"
            >
              <p>Why is my mobile battery draining so fast?</p>
            </div>
            {visibleAnswer === 3 && (
              <div className="mt-2 text-[#555] text-base">
                <p>
                  Battery drainage can occur due to various reasons such as
                  background apps, battery age, or software issues. Try closing
                  unused apps, reducing screen brightness, and updating your
                  phone's software. If the issue persists, the battery might
                  need to be replaced.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Question 4 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div
              onClick={() => toggleAnswerVisibility(4)}
              className="cursor-pointer text-[#555] font-semibold text-xl hover:text-[#52AB98] transition-all duration-300 ease-in-out"
            >
              <p>Why is my laptop overheating?</p>
            </div>
            {visibleAnswer === 4 && (
              <div className="mt-2 text-[#555] text-base">
                <p>
                  Overheating can be caused by excessive dust in the cooling
                  fan, running heavy programs, or blocked air vents. Clean your
                  laptop's cooling system, ensure proper ventilation, and close
                  unnecessary programs to prevent overheating.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Question 5 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div
              onClick={() => toggleAnswerVisibility(5)}
              className="cursor-pointer text-[#555] font-semibold text-xl hover:text-[#52AB98] transition-all duration-300 ease-in-out"
            >
              <p>What should I do if my mobile camera is not working?</p>
            </div>
            {visibleAnswer === 5 && (
              <div className="mt-2 text-[#555] text-base">
                <p>
                  If your mobile camera isn't working, try restarting your
                  phone, clearing the camera app cache, or checking for software
                  updates. If the issue persists, there could be a hardware
                  problem, and you should consult a professional technician.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Question 6 */}
          <div className="bg-white p-4 rounded-lg shadow-lg ">
            <div
              onClick={() => toggleAnswerVisibility(10)}
              className="cursor-pointer text-[#555] font-semibold text-xl hover:text-[#52AB98] transition-all duration-300 ease-in-out"
            >
              <p>Why is my laptop's Wi-Fi not connecting?</p>
            </div>
            {visibleAnswer === 10 && (
              <div className="mt-2 text-[#555] text-base">
                <p>
                  If your laptop isn't connecting to Wi-Fi, try restarting your
                  router and laptop. Check if the Wi-Fi driver is up to date and
                  if the network settings are configured correctly. You may need
                  to forget and reconnect to the Wi-Fi network.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-8 text-center bg-white rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#555]">
            Still have questions or want to know more?
          </h2>
          <p className="text-[#555] mt-4 ">
            We use only the highest quality parts and offer a wide range of
            repair services, from simple screen replacements to complex
            motherboard repairs. We also offer same-day repairs in most cases!
          </p>
          <button
            onClick={handleContactClick}
            className="bg-[#52AB98] text-white w-[230px] h-[50px] rounded-lg shadow hover:bg-[#428a7b] mx-auto mt-6"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
