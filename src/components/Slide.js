import React, { useState } from "react";
import Achieve from "../assets/potential/achieve.png";
import Success from "../assets/potential/success.png";
import Empower from "../assets/potential/empower.png";
import Transform from "../assets/potential/transform.png";
import Inspire from "../assets/potential/inspire.png";
import Dream from "../assets/potential/dream.png";
import Thrive from "../assets/potential/thrive.png";
import Elite from "../assets/potential/elite.png";
import Futuristic from "../assets/potential/futuristic.png";
import Blank from "../assets/potential/blank.png";

const Slide = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    console.log("Touch start event");
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    console.log("Touch end event");
    setIsPaused(false);
  };

  return (
    <div>
      <div className="bg-blue-100 lg:w-2/5 lg:mx-auto lg:rounded-md lg:mt-40 lg:p-2 mt-20 p-3 w-2/3  mx-auto rounded-lg">
        <p
          className=" sm:text-xs md:text-lg md:font-semibold  text-center lg:font-semibold lg:flex lg:justify-center lg:text-xl"
          style={{ color: "#005598" }}
        >
          Unlock Your Potential with 15+ Motivating Words from
        </p>
        <p
          className="lg:font-semibold text-center lg:flex lg:justify-center lg:text-xl md:text-xl   font-bold mt-2"
          style={{ color: "#005598" }}
        >
          Alamkul IIT Institute!
        </p>
      </div>

      <div
        className={`marquee-container ${isHovered ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex vertical-marquee">
          <div className="flex mt-20 ml-10">
            <img src={Achieve} alt="" className="w-13 h-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Achieve</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Success} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Success</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Empower} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Empower</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Transform} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Transform</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Inspire} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Inspire</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Dream} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Dream</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Thrive} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Thrive</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Elite} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Elite</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Futuristic} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Futuristic</p>
          </div>
          <div className="flex mt-20 ml-10">
            <img src={Empower} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Empower</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Transform} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Transform</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Inspire} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Inspire</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Dream} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Dream</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Thrive} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Thrive</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Elite} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Elite</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Futuristic} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Futuristic</p>
          </div>
          <div className="flex mt-20 ml-10">
            <img src={Empower} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Empower</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Transform} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Transform</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Inspire} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Inspire</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Dream} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Dream</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Thrive} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Thrive</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Elite} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Elite</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Futuristic} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Futuristic</p>
          </div>
          <div className="flex mt-20 ml-10">
            <img src={Empower} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Empower</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Transform} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Transform</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Inspire} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Inspire</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Dream} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Dream</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Thrive} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Thrive</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Elite} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Elite</p>
          </div>

          <div className="flex mt-20 ml-10">
            <img src={Futuristic} alt="" className="w-13 h-20 ml-20" />

            <p className="font-semibold text-2xl p-3 ml-1">Futuristic</p>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Slide;
