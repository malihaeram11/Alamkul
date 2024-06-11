import React, { useState } from "react";
import gButton from "../assets/gbutton.png";
import aboutFirst from "../assets/about/aboutfirst.png";
import aboutSecond from "../assets/about/aboutsecond.png";
import aboutThird from "../assets/about/aboutthird.png";
import yourImage from "../assets/your-image.png";
import myImage from "../assets/my-image.png";
import youImage from "../assets/you-image .png";
import valueOne from "../assets/values/valueone.png";
import valueTwo from "../assets/values/valuetwo.png";
import valueThree from "../assets/values/valuethree.png";
import valueFour from "../assets/values/valuefour.png";
import valueFive from "../assets/values/valuefive.png";
import valueSix from "../assets/values/valuesix.png";
import blueOne from "../assets/blue/blueOne.png";
import blueTwo from "../assets/blue/blueTwo.png";
import blueThree from "../assets/blue/blueThree.png";
import ourJourney from "../assets/our-journey.png";
import picOne from "../assets/pic-one.png";
import picTwo from "../assets/pic-two.png";
import picThree from "../assets/pic-three.png";
import aboutMe from "../assets/about-me.png";

const About = () => {
  const [showStory, setShowStory] = useState(false);
  const [showTwoStory, setShowTwoStory] = useState(false);
  const [showThreeStory, setShowThreeStory] = useState(false);
  const [showFourStory, setShowFourStory] = useState(false);

  const toggleStory = () => {
    setShowStory((prevShowStory) => !prevShowStory);
  };

  const toggleTwoStory = () => {
    setShowTwoStory((prevShowTwoStory) => !prevShowTwoStory);
  };

  const toggleThreeStory = () => {
    setShowThreeStory((prevShowThreeStory) => !prevShowThreeStory);
  };

  const toggleFourStory = () => {
    setShowFourStory((prevShowFourStory) => !prevShowFourStory);
  };

  function changeClick() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=co.tarly.almkul";
  }

  function bookPointer() {
    window.location.href = "/book";
  }

  return (
    <div>
      <div>
        <img src={aboutMe} alt="" className="cursor-pointer" />
      </div>

      <div
        style={{ backgroundColor: "#213068" }}
        className="w-full lg:mt-[-1px] sm:mt-[-1] p-4 lg:h-[950px] sm:h-[1050px] md:h-[1220px]"
      >
        <div className="lg:p-4 sm:p-2 flex justify-center">
          <h1 className="lg:text-5xl sm:text-2xl md:text-5xl text-white">
            <span className="underline underline-offset-8">What We Do</span>
          </h1>
        </div>
        <div className="lg:flex lg:justify-around lg:mt-[190px] sm:mt-[90px]">
          <div
            className="lg:h-[200px] lg:w-[400px] sm:h-[250px] sm:w-[300px] md:w-[450px] md:h-[290px] sm:mx-auto lg:mx-0"
            style={{
              backgroundColor: "#F17402",
              borderRadius: "10px",
            }}
          >
            <div>
              <img
                src={aboutFirst}
                alt=""
                className="lg:w-40 lg:h-30 mx-auto lg:mt-[-90px] sm:w-[150px] md:w-[180px] sm:mt-[-40px] sm:p-2 lg:p-0"
              />
            </div>
            <div className="text-center lg:mt-1">
              <p className="lg:mt-2 lg:text-[20px] md:text-[20px] font-semibold p-1 text-white">
                Alamkul is committed to inspire students to discover their
                latent intellect and fill the gap between scientific theory and
                common-sense.
              </p>
            </div>
          </div>

          <div
            className="lg:h-[200px] lg:w-[400px] sm:h-[250px] sm:w-[300px] md:w-[450px] md:h-[290px] sm:mt-[100px] lg:mt-0 sm:mx-auto lg:mx-0"
            style={{
              backgroundColor: "#F17402",
              borderRadius: "10px",
            }}
          >
            <div>
              <img
                src={aboutSecond}
                alt=""
                className="lg:w-40 lg:h-30 mx-auto lg:mt-[-90px] md:w-[180px] sm:w-[150px] sm:mt-[-40px] sm:p-2 lg:p-0"
              />
            </div>
            <div className="text-center lg:mt-1">
              <p className="lg:mt-2 lg:text-[20px] md:text-[20px] font-semibold p-1 text-white">
                To build a community of intellectuals who can innovate and
                explore ideas to make the world easy for everyone.
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:h-[200px] lg:w-[400px] sm:h-[250px] md:w-[450px] md:h-[290px] sm:w-[300px] sm:mt-[100px] lg:mt-0  sm:mx-auto lg:mx-0"
          style={{
            backgroundColor: "#F17402",

            borderRadius: "10px",
          }}
        >
          <div className="lg:mt-[220px]">
            <img
              src={aboutThird}
              alt=""
              className="lg:w-40 lg:h-30 md:w-[180px] mx-auto lg:mt-[-90px] sm:w-[150px] sm:mt-[-40px] sm:p-2 lg:p-0"
            />
          </div>
          <div className="text-center lg:mt-[-70px]">
            <p className="lg:mt-2 lg:text-[20px] md:text-[20px] font-semibold p-1 text-white">
              Alamkul came into existence from his desire to benefit to all the
              students by inspiring them to discover their latent intellect.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full lg:mt-[-1px] p-4 lg:h-[650px] sm:h-[930px] md:h-[920px] bg-black "
        style={{
          backgroundImage: `url(${yourImage})`,
          backgroundSize: "cover", // Adjusts image size to cover the container
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className=" ">
          <div className="lg:p-4 sm:p-2 flex justify-center lg:mt-10">
            <h1 className="lg:text-5xl sm:text-3xl md:text-5xl text-white">
              <span className="underline underline-offset-8">Our Values</span>
            </h1>
          </div>
          <div className="lg:mt-10 sm:mt-8">
            <p className="text-white lg:w-[600px] md:text-[20px] lg:text-[18px]  text-center mx-auto">
              Our core value at Alamkul Institute is to foster a culture of
              curiosity and critical thinking, empowering individuals to bridge
              the divide between knowledge and practical solutions for a better
              world.
            </p>
          </div>
          <div>
            <div className="lg:flex  lg:justify-evenly lg:mt-20 sm:mt-16">
              <div className="time w-[290px] h-[70px]  flex justify-evenly g-4 p-1 sm:mx-auto lg:mx-0">
                <div className="flex justify-center items-center">
                  <img src={valueOne} alt="" className="w-[45px]" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-white text-[22px]">On Time</p>
                </div>
              </div>

              <div className="time w-[290px] h-[70px]  flex justify-evenly g-4 p-1 sm:mt-8 lg:mt-0 sm:mx-auto lg:mx-0 ">
                <div className="flex justify-center items-center">
                  <img src={valueTwo} alt="" className="w-[45px]" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-white text-[22px]">Education for all</p>
                </div>
              </div>
              <div className="time w-[290px] h-[70px]  flex justify-evenly g-4 p-1 sm:mt-8 lg:mt-0 sm:mx-auto lg:mx-0 ">
                <div className="flex justify-center items-center">
                  <img src={valueThree} alt="" className="w-[45px]" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-white text-[22px]">Build a Community</p>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:justify-evenly lg:mt-20">
              <div className="time w-[290px] h-[70px]  flex justify-evenly g-4 p-1 sm:mt-8 lg:mt-0 sm:mx-auto lg:mx-0  ">
                <div className="flex justify-center items-center">
                  <img src={valueFour} alt="" className="w-[45px]" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-white text-[22px]">Observant</p>
                </div>
              </div>
              <div className="time w-[290px] h-[70px]  flex justify-evenly g-4 p-1 sm:mt-8 lg:mt-0 sm:mx-auto lg:mx-0 ">
                <div className="flex justify-center items-center">
                  <img src={valueFive} alt="" className="w-[45px]" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-white text-[22px]">Effective</p>
                </div>
              </div>
              <div className="time w-[290px] h-[70px]  flex justify-evenly g-4 p-1 sm:mt-8 lg:mt-0 sm:mx-auto lg:mx-0 ">
                <div className="flex justify-center items-center">
                  <img src={valueSix} alt="" className="w-[45px]" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-white text-[22px]">Do the Right Thing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#213068" }}
        className="w-full lg:mt-[-1px] p-4 lg:h-[850px] sm:h-[940px] md:h-[960px]  lg:flex lg:justify-center items-center"
      >
        <div className="lg:flex lg:gap-[105px]">
          <div
            className="founded lg:w-[300px] lg:h-[300px] sm:w-[250px] sm:h-[250px] sm:mx-auto lg:mx-0  flex flex-col justify-center items-center sm:mt-10 lg:mt-0"
            style={{ backgroundColor: "#F15D02" }}
          >
            <div>
              <img
                src={blueOne}
                alt=""
                className="lg:w-[120px] sm:w-[110px] mx-auto"
              />
            </div>
            <div>
              <p className="lg:text-[29px] sm:text-[22px] text-white font-semibold text-center">
                FOUNDED IN <br></br>2011
              </p>
            </div>
          </div>
          <div
            className="founded lg:w-[300px] lg:h-[300px] sm:w-[250px] sm:h-[250px] sm:mx-auto lg:mx-0  flex flex-col justify-center items-center sm:mt-10 lg:mt-0"
            style={{ backgroundColor: "#F15D02" }}
          >
            <div>
              <img
                src={blueTwo}
                alt=""
                className="lg:w-[120px] sm:w-[110px] mx-auto"
              />
            </div>
            <div>
              <p className="lg:text-[29px] sm:text-[22px] text-white font-semibold text-center">
                LEARN FROM<br></br>IITians
              </p>
            </div>
          </div>
          <div
            className="founded lg:w-[300px] lg:h-[300px] sm:w-[250px] sm:h-[250px] sm:mx-auto lg:mx-0  flex flex-col justify-center items-center sm:mt-10 lg:mt-0"
            style={{ backgroundColor: "#F15D02" }}
          >
            <div>
              <img
                src={blueThree}
                alt=""
                className="lg:w-[120px] sm:w-[110px] mx-auto"
              />
            </div>
            <div>
              <p className="lg:text-[29px] sm:text-[20px] text-white font-semibold text-center mt-2">
                COACHING CLASSES<br></br>FOR JEE/NEET
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full lg:mt-[-1px] p-4 lg:h-[650px] sm:h-[520px] bg-black "
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover", // Adjusts image size to cover the container
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className=" ">
          <div className="lg:p-4 sm:p-2 lg:flex lg:justify-center lg:mt-10">
            <h1 className="lg:text-5xl sm:text-xl sm:text-center  md:text-4xl text-white">
              <span className="underline underline-offset-8">
                Reach us through our website
              </span>
            </h1>
          </div>
          <div>
            <div className="flex justify-evenly lg:mt-20 sm:mt-12">
              <div className="times lg:w-[590px] lg:h-[300px] sm:h-[345px] md:w-[550px]   flex justify-evenly g-4 p-1">
                <div className="text-center mt-10">
                  <p className="text-white lg:text-[22px] sm:text-[17px] md:text-[21px]">
                    "Embark on a transformative educational journey with
                    Alamkul, where we bridge the gap between scientific theory
                    and common-sense, inspiring innovation and intellectual
                    growth for a better world."
                  </p>
                  <div className="flex  justify-evenly lg:mt-6 sm:mt-10">
                    <div>
                      <img
                        src={youImage}
                        alt=""
                        className="w-[60px] cursor-pointer"
                        onClick={bookPointer}
                      />
                    </div>
                    <div
                      className="bookNow lg:w-[160px] lg:h-[50px] sm:w-[130px] md:w-[170px]  flex justify-center items-center cursor-pointer"
                      onClick={bookPointer}
                    >
                      <p className="text-orange-600 text-center">BOOK NOW</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="lg:text-5xl sm:text-2xl md:text-4xl text-black mt-10 text-center font-semibold">
          Our Journey
        </h1>
        <img src={ourJourney} alt="" className="w-[1000px] mx-auto mt-10" />
      </div>

      <div>
        <h1 className="lg:text-5xl sm:text-2xl md:text-4xl text-black mt-10 text-center font-semibold">
          Gallery
        </h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-5 small-carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={picOne} class="d-block w-100 " alt="..." />
            </div>
            <div class="carousel-item">
              <img src={picTwo} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={picThree} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="bg-white lg:h-[500px]">
        <div className="sm:my-[100px] sm:text-center  lg:text-left  lg:my-[200px] lg:mx-auto lg:w-[500px]">
          <div className="font-semibold text-xl ">
            <h1 className="font-semibold lg:text-4xl sm:text-3xl mb-12 md:text-4xl">
              FAQ
            </h1>
            <div className="mb-4">
              <p
                className="cursor-pointer mb-2 sm:text-sm md:text-2xl lg:text-xl"
                onClick={toggleStory}
                style={{
                  maxHeight: showStory ? "100px" : "30px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                What is the story of Alamkul?
              </p>
              <div
                className="lg:text-lg sm:text-sm md:text-xl overflow-hidden  text-blue-800 sm:p-2 lg:p-0"
                style={{
                  maxHeight: showStory ? "120px" : 0,
                  opacity: showStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                Alamkul was launched in 2011 , with a mission to inspire
                students to discover their latent intellect and fill the gap
                between scientific theory and common-sense.
              </div>
            </div>
            <div className="mb-4">
              <p
                className="cursor-pointer mb-2 sm:text-sm md:text-2xl lg:text-xl"
                onClick={toggleTwoStory}
                style={{
                  maxHeight: showTwoStory ? "100px" : "60px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                What will be the batch strength and will the individual
                attention be possible?
              </p>
              <div
                className="lg:text-lg sm:text-sm  md:text-xl overflow-hidden text-blue-800 sm:p-2 lg:p-0"
                style={{
                  maxHeight: showTwoStory ? "140px" : 0,
                  opacity: showTwoStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                The maximum strength will be 25 students which enables
                individual attention and gives a feeling of competition amongst
                the students. Frequent individual doubt clearing sessions.
              </div>
            </div>
            <div className="mb-4">
              <p
                className="cursor-pointer mb-2 sm:text-sm lg:text-xl md:text-2xl"
                onClick={toggleThreeStory}
                style={{
                  maxHeight: showThreeStory ? "100px" : "60px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                How will you track my progress and how will you help me if it is
                not satisfactory?
              </p>
              <div
                className="lg:text-lg sm:text-sm  md:text-xl overflow-hidden text-blue-800 sm:p-2 lg:p-0"
                style={{
                  maxHeight: showThreeStory ? "140px" : 0,
                  opacity: showThreeStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                Regular tests and assignments will be used as a tool to monitor
                your progress. These will also help us in finding the weak areas
                that need to be addressed. By tests, we don’t believe in just
                announcing the scores, there will be follow-up doubt clearing
                and remedial classes.
              </div>
            </div>
            <div className="mb-4">
              <p
                className="cursor-pointer mb-2 sm:text-sm lg:text-xl md:text-2xl"
                onClick={toggleFourStory}
                style={{
                  maxHeight: showFourStory ? "100px" : "30px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                Does Alamkul offer offline classes at physical centers?
              </p>
              <div
                className="lg:text-lg sm:text-sm  md:text-xl overflow-hidden text-blue-800"
                style={{
                  maxHeight: showFourStory ? "140px" : 0,
                  opacity: showFourStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                Yes, Alamkul offer offline classes at physical centers.
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default About;
