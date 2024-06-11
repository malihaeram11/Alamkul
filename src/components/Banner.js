import React from "react";
import Four from "../assets/img4.png";
import Fou from "../assets/imgfour.png";
import { TypeAnimation } from "react-type-animation";
import Alamkul from "../assets/alamkul.png";

const Banner = () => {
  return (
    <div className="w-full h-300">
      <div class="image-container">
        <img src={Four} alt="" className="first-image" />
        <img
          src={Fou}
          alt=""
          className="second-image   sm:w-[300px] sm:mt-[-25px] md:w-[630px] md:mt-[10px] lg:mt-auto lg:w-auto"
        />
      </div>

      <div className="bg-white mx-auto rounded-lg shadow-lg lg:w-1/2 lg:h-40  -translate-y-1/2 p-4 flex justify-between sm:w-5/6 sm:h-50">
        <div className="mt-negative-50">
          <p className="text-black lg:text-3xl font-semibold md:text-2xl lg:ml-6 ">
            <span className="text-blue-700 lg:text-4xl sm:text-lg md:text-2xl">
              <TypeAnimation
                sequence={[
                  "Highly",
                  2000,
                  "Extremely",
                  2000,
                  "Unbelievably",
                  2000,
                  "Exceedingly",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </span>
          </p>
          <p className="text-black lg:text-3xl font-semibold lg:ml-6 md:text-2xl">
            Valuable Learning Platform
          </p>
          <p className="text-slate-500 lg:ml-6 lg:mt-3 sm:mt-1 sm:text-sm md:text-lg">
            Learn from our best faculty
          </p>
        </div>
        <div>
          <img
            src={Alamkul}
            alt=""
            className="lg:mr-6 lg:w-20 sm:w-12 md:w-[80px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
