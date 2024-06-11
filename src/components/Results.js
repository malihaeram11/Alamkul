import React from "react";
import Sree from "../assets/results/sree.png";
import Safee from "../assets/results/safeeya.png";
import Shu from "../assets/results/shubham.png";
import Ratnam from "../assets/results/ratnam.png";
import Shifa from "../assets/results/shifa.png";
import Deepan from "../assets/results/deepan.png";

const Results = () => {
  return (
    <div
      style={{ backgroundColor: "#005598" }}
      className="w-full mt-20 lg:h-[990px] sm:h-[650px] md:h-[680px]"
    >
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl flex justify-center p-3 text-white">
          Our Results
        </h1>
        <p className="flex justify-center text-sm md:text-2xl    lg:text-xl text-white p-2">
          Our hybrid approach yields compelling results,{" "}
        </p>
        <p
          className="flex justify-center text-sm md:text-2xl   lg:text-xl text-white"
          style={{ marginTop: "-10px" }}
        >
          harmonizing pedagogy and smart technology seamlessly.
        </p>
      </div>
      <div className="flex justify-around mt-20">
        <div
          style={{ backgroundColor: "#FFA500" }}
          className="rounded-xl lg:h-[250px] sm:h-[125px]   lg:w-[190px] sm:w-[95px] "
        >
          <div
            style={{ backgroundColor: "#FFFFFF", top: "-15px" }}
            className="rounded-xl mx-auto lg:h-[140px] sm:h-[70px] relative lg:w-[120px] sm:w-[60px]"
          >
            <div>
              <img
                src={Sree}
                alt=""
                className="lg:h-[140px] sm:h-[70px] lg:w-[120px] sm:w-[60px]"
              />
            </div>
          </div>
          <div className="flex row justify-center mx-auto">
            <h1 className="text-[15px] lg:text-3xl text-white font-semibold flex justify-center">
              Shreemanth
            </h1>
            <p className=" text-[11px] lg:text-xl text-white font-semibold flex justify-center">
              Qualified JEE
            </p>
            <p className="text-white text-[10px] lg:text-sm flex justify-center">
              advanced
            </p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#FFA500" }}
          className="rounded-xl lg:h-[250px] sm:h-[125px] lg:w-[190px] sm:w-[95px]"
        >
          <div
            style={{ backgroundColor: "#FFFFFF", top: "-15px" }}
            className="rounded-xl mx-auto lg:h-[140px] sm:h-[70px] relative lg:w-[120px] sm:w-[60px]"
          >
            <div>
              <img
                src={Safee}
                alt=""
                className="lg:h-[140px] sm:h-[70px] lg:w-[120px] sm:w-[60px]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[15px] lg:text-3xl text-white font-semibold flex justify-center">
              Safeeya
            </h1>
            <p className="text-[11px] lg:text-xl text-white font-semibold flex justify-center">
              Class 10
            </p>
            <p className="text-blue-700 lg:text-xl text-[10px] font-bold flex justify-center">
              96.7%
            </p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#FFA500" }}
          className="rounded-xl lg:h-[250px] sm:h-[125px] lg:w-[190px] sm:w-[95px]"
        >
          <div
            style={{ backgroundColor: "#FFFFFF", top: "-15px" }}
            className="rounded-xl mx-auto lg:h-[140px] sm:h-[70px] relative lg:w-[120px] sm:w-[60px]"
          >
            <div>
              <img
                src={Shu}
                alt=""
                className="lg:h-[140px] sm:h-[70px] lg:w-[120px] sm:w-[60px]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[15px] lg:text-3xl text-white font-semibold flex justify-center">
              Shubham
            </h1>
            <p className="text-[11px] lg:text-xl text-white font-semibold flex justify-center">
              Class 12
            </p>
            <p className="text-blue-700 lg:text-xl text-[10px] font-bold flex justify-center">
              81.4%
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-40">
        <div
          style={{ backgroundColor: "#FFA500" }}
          className="rounded-xl lg:h-[250px] sm:h-[125px] lg:w-[190px] sm:w-[95px]"
        >
          <div
            style={{ backgroundColor: "#FFFFFF", top: "-15px" }}
            className="rounded-xl mx-auto lg:h-[140px] sm:h-[70px] relative lg:w-[120px] sm:w-[60px]"
          >
            <div>
              <img
                src={Ratnam}
                alt=""
                className="lg:h-[140px] sm:h-[70px] lg:w-[120px] sm:w-[60px]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[15px] lg:text-3xl text-white font-semibold flex justify-center">
              Ratnam
            </h1>
            <p className="text-[11px] lg:text-xl text-white font-semibold flex justify-center">
              Class 12
            </p>
            <p className="text-blue-700 flex text-[10px] lg:text-xl font-bold justify-center">
              87.6%
            </p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#FFA500" }}
          className="rounded-xl lg:h-[250px] sm:h-[125px] lg:w-[190px] sm:w-[95px]"
        >
          <div
            style={{ backgroundColor: "#FFFFFF", top: "-15px" }}
            className="rounded-xl mx-auto lg:h-[140px] sm:h-[70px] relative lg:w-[120px] sm:w-[60px]"
          >
            <div>
              <img
                src={Shifa}
                alt=""
                className="lg:h-[140px] sm:h-[70px] lg:w-[120px] sm:w-[60px]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[15px] lg:text-3xl text-white font-semibold flex justify-center">
              Shifa
            </h1>
            <p className="text-[11px] lg:text-xl text-white font-semibold flex justify-center">
              Class 12
            </p>
            <p className="text-blue-700 flex lg:text-xl text-[10px] font-bold justify-center">
              94.8%
            </p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#FFA500" }}
          className="rounded-xl lg:h-[250px] sm:h-[125px] lg:w-[190px] sm:w-[95px]"
        >
          <div
            style={{ backgroundColor: "#FFFFFF", top: "-15px" }}
            className="rounded-xl mx-auto lg:h-[140px] sm:h-[70px] relative lg:w-[120px] sm:w-[60px]"
          >
            <div>
              <img
                src={Deepan}
                alt=""
                className="lg:h-[140px] sm:h-[70px] lg:w-[120px] sm:w-[60px]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[15px] lg:text-3xl text-white font-semibold flex justify-center">
              Deepan
            </h1>
            <p className="text-[11px] lg:text-xl text-white font-semibold flex justify-center">
              Class 12
            </p>
            <p className="text-blue-700 flex lg:text-xl text-[10px] font-bold  justify-center">
              97.6%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
