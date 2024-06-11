import React from "react";
import One from "../assets/one.png";
import Two from "../assets/two.png";
import Three from "../assets/three.png";
import First from "../assets/first.png";
import Second from "../assets/second.png";
import Third from "../assets/third.png";

const Choose = () => {
  return (
    <div
      style={{ backgroundColor: "#005598" }}
      className="w-full lg:mt-30 sm:mt-10 p-4 lg:h-[950px]"
    >
      <div className="lg:p-4 sm:p-2 flex justify-center">
        <h1 className="lg:text-4xl sm:text-2xl md:text-4xl text-white underline">
          Why Choose Alamkul
        </h1>
      </div>
      <div className="chooseme">
        <div className="lg:flex lg:justify-around lg:mt-5 lg:ml-32">
          <div
            style={{ width: "180px" }}
            className="large-screen-image sm:mx-auto md:mx-auto lg:mx-0 lg:mt-[-20px] sm:mt-4 md:mt-4"
          >
            <img src={One} alt="" className="marginsm" />
          </div>

          <div style={{ width: "60px" }} className="hidden lg:block">
            <img src={First} alt="" className="circle-screen-image " />
          </div>

          <div className="">
            <p className="text-white lg:text-2xl font-semibold text-lg text-center md:text-2xl  lg:w-80 lg:text-left">
              Individual Attention Analyze your performance and review your
              progress to further help you prepare better for competitive and
              board exams.
            </p>
          </div>
        </div>
      </div>

      <div className="choosemefirst">
        <div className="lg:flex lg:justify-around lg:mt-20 lg:ml-32">
          <div
            style={{ width: "180px" }}
            className="large-screen-image sm:mx-auto md:mx-auto lg:mx-0 lg:mt-[-20px] sm:mt-4 md:mt-4"
          >
            <img src={Two} alt="" className="marginsmfirst" />
          </div>

          <div style={{ width: "60px" }}>
            <img src={Second} alt="" className="hidden lg:block" />
          </div>

          <div className="lg:w-25">
            <p className="text-white lg:text-2xl font-semibold text-lg md:text-2xl  text-center lg:w-80 lg:text-left">
              Integrated Courses Makes sure that you shine in your school along
              with being listed as a top achiever in competitive exams.
            </p>
          </div>
        </div>
      </div>

      <div className="choosemesecond">
        <div className="lg:flex lg:justify-around lg:mt-20 lg:ml-32">
          <div
            style={{ width: "180px" }}
            className="large-screen-image sm:mx-auto md:mx-auto lg:mx-0 lg:mt-[-20px] sm:mt-4 md:mt-4"
          >
            <img src={Three} alt="" className="marginsmsecond" />
          </div>

          <div style={{ width: "60px" }}>
            <img src={Third} alt="" className="hidden lg:block" />
          </div>

          <div className="lg:w-25">
            <p className="text-white lg:text-2xl font-semibold text-lg md:text-2xl  text-center lg:w-80 lg:text-left">
              In-depth discussion of DPP The well-designed and structured Daily
              practice paper makes you grasp concept of all topics followed by
              the In-depth discussion which ensures that you learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
