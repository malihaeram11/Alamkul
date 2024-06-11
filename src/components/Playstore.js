import React from "react";

import Play from "../assets/googleplay.png";
import gButton from "../assets/gbutton.png";

const Playstore = () => {
  function changeEvent() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=co.tarly.almkul";
  }

  return (
    <div className="lg:mt-40 lg:flex lg:justify-around lg:ml-40 mt-40">
      <div>
        <img src={Play} alt="" className="lg:w-11/12 sm:w-10/12" />
      </div>
      <div className="lg:mt-28">
        <p className="sm:w-400 md:w-[500px]  md:text-center lg:text-left md:text-2xl    md:mx-auto lg:mx-left    md:font-bold ml-5 lg:ml-1 lg:font-semibold   lg:w-600 font-semibold lg:text-4xl text-xl">
          To receive timely class notifications, install the Alamkul app on your
          smartphone.{" "}
        </p>
        <p
          className="ml-5 md:w-[400px] md:text-center lg:text-left sm:w-[330px] md:mx-auto lg:mx-left  md:font-bold lg:w-[330px] mt-3 lg:font-medium lg:mt-5 lg:ml-1 text-1xs lg:text-base  lg:text-[19.5px]"
          style={{ color: "#FFA500" }}
        >
          Stay connected and never miss a class with the convenience of instant
          alerts at your fingertips.
        </p>
        <div>
          <img
            src={gButton}
            alt=""
            className="w-1/2 md:w-[200px] md:mx-auto lg:mx-left lg:w-40  mt-4 lg:mt-30  ml-5 cursor-pointer lg:ml-1"
            onClick={changeEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default Playstore;
