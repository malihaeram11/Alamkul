import React from "react";
import gButton from "../assets/gbutton.png";

const Last = () => {
  function changeClick() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=co.tarly.almkul";
  }
  return (
    <div className="last h-[160px]">
      <div className="lg:flex lg:justify-around">
        <div className="lg:mt-12 sm:p-2">
          <p className="sm:text-sm  md:text-lg  sm:text-center lg:text-xl font-semibold">
            NO NEED TO WORRY, OUR HIGHLY SKILLED FACULTY
          </p>
          <p className="lg:text-lg sm:text-center lg:text-left">
            is available to address your doubts promptly.
          </p>
        </div>

        <img
          src={gButton}
          alt=""
          className="cursor-pointer sm:w-1/2 md:w-[150px] sm:mx-auto lg:mx-0 lg:w-[200px] sm:mt-5 lg:mt-10"
          onClick={changeClick}
        />
      </div>
    </div>
  );
};

export default Last;
