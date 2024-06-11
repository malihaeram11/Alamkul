import React, { useState, useEffect } from "react";
import studyOne from "../assets/studyresources/studyone.png";
import studyTwo from "../assets/studyresources/studytwo.png";
import studyThree from "../assets/studyresources/studythree.png";
import studyFour from "../assets/studyresources/studyfour.png";
import studyFive from "../assets/studyresources/studyfive.png";

const Studyresource = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function moveToNextSlide() {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  }

  useEffect(() => {
    const interval = setInterval(moveToNextSlide, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="">
      <div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ maxWidth: "1300px", margin: "0 auto" }}
        >
          <div className="carousel-inner">
            <div className="flex justify-center">
              <h1 className="text-3xl md:text-4xl    mt-20 font-bold lg:font-bold lg:text-5xl ">
                Study Resources
              </h1>
            </div>

            {[studyOne, studyTwo, studyThree, studyFour, studyFive].map(
              (study, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  } mt-3`}
                >
                  <img src={study} className="d-block w-100" alt="..." />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studyresource;
