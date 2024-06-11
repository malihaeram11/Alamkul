import React, { useState, useRef } from "react";
import CmpImage from "../assets/cmp/cmpimage.png";
import CmpVideo from "../assets/cmp/cmpvideo.png";
import Left from "../assets/cmp/left.png";
import Right from "../assets/cmp/right.png";
import Square from "../assets/cmp/squaretick.png";
import Circle from "../assets/cmp/circletick.png";
import CmpLaptop from "../assets/cmp/cmplaptop.png";
import { Link } from "react-router-dom";
import gButton from "../assets/gbutton.png";

const Cmp = () => {
  const videoOpen = () => {
    window.open("https://www.youtube.com/watch?v=HdoEMWzMQ-E", "_blank"); // Open the video link in a new tab
  };
  function changeClick() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=co.tarly.almkul";
  }

  const [showStory, setShowStory] = useState(false);
  const [showTwoStory, setShowTwoStory] = useState(false);
  const [showThreeStory, setShowThreeStory] = useState(false);
  const [englishButtonColor, setEnglishButtonColor] = useState("gray");
  const [mathButtonColor, setMathButtonColor] = useState("#CB7D01");
  const [paragraphOrder, setParagraphOrder] = useState([1, 2, 3, 4, 5]);
  const formRef = useRef();

  const toggleStory = () => {
    setShowStory((prevShowStory) => !prevShowStory);
  };

  const toggleTwoStory = () => {
    setShowTwoStory((prevShowTwoStory) => !prevShowTwoStory);
  };

  const toggleThreeStory = () => {
    setShowThreeStory((prevShowThreeStory) => !prevShowThreeStory);
  };
  const handleMathButtonClick = () => {
    // Toggle the background colors
    setParagraphOrder([1, 2, 3, 4, 5]);
    setEnglishButtonColor("gray");
    setMathButtonColor("#CB7D01");
  };

  const handleEnglishButtonClick = () => {
    // Toggle the background colors
    setParagraphOrder([1, 3, 4, 2, 5]);
    setEnglishButtonColor("#CB7D01");
    setMathButtonColor("gray");
  };
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourNumber: "",
    yourClass: "",
    yourBatch: "Select Batch",
    yourSubject: "Select an option",
    yourMessage: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const requiredFields = [
    "yourName",
    "yourEmail",
    "yourNumber",
    "yourClass",
    "yourBatch",
    "yourSubject",
    "yourMessage",
  ];

  const areRequiredFieldsFilled = () => {
    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  const scrollToField = (fieldName) => {
    const fieldPosition =
      formRef.current.querySelector(`#${fieldName}`).offsetTop - 180;
    window.scrollTo({ top: fieldPosition, behavior: "smooth" });
  };

  const submitDone = (e) => {
    e.preventDefault();

    if (!areRequiredFieldsFilled()) {
      const firstEmptyField = requiredFields.find(
        (field) => formData[field].trim() === ""
      );

      if (firstEmptyField) {
        scrollToField(firstEmptyField);
        alert("Please fill out all required details.");
        formRef.current.reset();
        return;
      }
    }

    requiredFields.forEach((field) => {
      formData[field] = ""; // Reset the field's value in the formData object
      const inputField = formRef.current.querySelector(`#${field}`);
      if (inputField) {
        inputField.value = ""; // Reset the input field's value in the DOM
      }
    });

    alert("Thanks for submitting!");
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-white relative sm:h-[720px]  lg:h-[500px]">
        <div
          className=" sm:w-[190px] sm:h-[130px] md:w-[320px] md:h-[280px]       lg:w-[320px] lg:h-[280px]  absolute -top-10 -left-10"
          style={{
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "250px",
            backgroundColor: "#D39532",
            opacity: 0.8,
          }}
        ></div>

        <div
          className="  sm:w-[140px] sm:h-[150px] md:w-[320px] md:h-[320px]   lg:w-[320px] lg:h-[320px]   rounded-full absolute lg:left-[-160px]  md:left-[-160px] lg:mt-5 md:mt-5   sm:left-[-70px]"
          style={{ backgroundColor: "#D39532", opacity: 0.8 }}
        ></div>

        <div className=" relative text-center">
          <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-3xl lg:mt-5" style={{color: "#CB7D01"}}>
            Concept Mastery Program
          </h1>
          <p className="font-bold md:text-xl lg:text-2xl mt-2">
            (VI | VII | VIII | IX)
          </p>
        </div>

        <div className="lg:flex lg:items-start lg:pl-[190px] lg:pt-[100px]">
          <div className="text-left">
            <h1 className="lg:text-5xl sm:text-3xl sm:text-center lg:text-start sm:mt-4 lg:mt-auto sm:font-bold  lg:font-semibold">
              CMP
            </h1>
            <div className="lg:w-[600px] sm:mt-[400px] lg:mt-4">
              <p className="font-semibold lg:text-2xl sm:text-center lg:text-left sm:text-sm md:text-lg">
                Concept Mastery Program (CMP) is designed for students of class
                6th, 7th, and 8th to help them with their basic foundation which
                will enable them to understand the advanced concept.
              </p>
            </div>
            <div className="flex gap-5 items-center lg:mt-5 sm:mt-9  sm:justify-center lg:justify-start">
              <div>
                <button
                  className="bg-black text-white p-3 rounded-md"
                  onClick={scrollToForm}
                >
                  ENROLL NOW
                </button>
              </div>
              <div>
                <Link to="/book">
                  <button className="bg-white text-black p-2 text-[11px] rounded-md border-2 border-black">
                    BOOK A FREE CLASS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src={CmpImage}
          alt=""
          className="lg:w-2/6 lg:absolute lg:right-0 lg:top-[74px] sm:mt-[-470px] md:mt-[-480px] sm:mx-auto  lg:mt-0 sm:w-[280px] md:w-[300px]"
        />

        <img
          src={CmpVideo}
          alt=""
          className=" sm:w-[70px] sm:mt-[-320px] md:mt-[-340px] sm:mx-auto lg:mt-0 lg:w-[110px] lg:absolute lg:right-0 lg:top-0 lg:mr-[200px] cursor-pointer"
          onClick={videoOpen}
        />
      </div>
      <div
        className=" lg:h-[800px] mt-[22px] lg:flex lg:justify-center lg:items-center"
        style={{ backgroundColor: "#CB7D01", opacity: 0.8 }}
      >
        <div
          style={{ position: "relative" }}
          className="lg:w-[600px] lg:h-[900px]  sm:transform sm:scale-70"
        >
          <img src={Left} alt="" className="scale-75 w-full h-full" />
          <div
            style={{
              position: "absolute",
              top: "50%" /* Adjust this value as needed */,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1 className="text-center font-bold lg:text-2xl sm:text-lg md:text-4xl lg:mt-0 md:mt-[-60px]">
              Grade VI, <br /> VII, VIII & IX
            </h1>
            <div className="text-center">
              <p
                className="font-semibold lg:text-[21px] sm:text-[15px] md:text-3xl sm:mt-4 lg:mt-4 md:mt-12"
                style={{ color: "#CD8003" }}
              >
                In this program, we will primarily be using Khan academy along
                with our educational apps in bringing clarity to the concept
                through visual representation, healthy competitive atmosphere,
                and by making learning fun.
              </p>
            </div>
            <div className="flex justify-evenly lg:mt-9 sm:mt-4 sm:gap-2 md:mt-20 lg:gap-0">
              <div
                className="bg-white font-semibold  p-2 lg:text-[17px] md:text-xl rounded-md border-2 text-center border-black lg:w-[130px] md:w-[150px]"
                style={{ color: "#CD8003" }}
              >
                Mathematics
              </div>
              <div
                className="bg-white font-semibold text-center  md:text-xl p-2 lg:text-[17px] rounded-md border-2 border-black lg:w-[130px] md:w-[150px]"
                style={{ color: "#CD8003" }}
              >
                English
              </div>
            </div>
            <div
              className="bg-white font-semibold p-2 md:text-xl lg:text-[23px] rounded-md border-2 lg:mt-6 md:mt-9 sm:mt-2 flex justify-center items-center mx-auto border-black lg:w-[220px] sm:w-[150px] relative"
              style={{ color: "#CD8003" }}
            >
              <span className="text-black">300 +</span> hrs{" "}
              <span className="text-xs absolute top-0 lg:left-[100px] sm:left-[42px] lg:w-[100px] sm:w-[100px]">
                intensive program
              </span>
            </div>
            <p className="lg:text-sm sm:text-xs md:text-2xl sm:text-[10px] font-semibold lg:mt-9 md:mt-9 text-center sm:mt-2">
              <span style={{ color: "#CD8003" }}>150+</span> hrs Mathematics &
              English session
            </p>
          </div>
        </div>

        <div
          style={{ position: "relative" }}
          className="lg:w-[600px] lg:h-[900px] sm:transform sm:scale-70 sm:mt-[-60px] lg:mt-0"
        >
          <img src={Right} alt="" className="scale-75 w-full h-full" />
          <div
            style={{
              position: "absolute",
              top: "45%" /* Adjust this value as needed */,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex lg:mr-[55px] md:ml-[-25px] sm:mr-[50px] sm:mt-20 md:mt-4 lg:mt-0">
              <button
                className="flex-1 p-2 text-white lg:text-lg sm:text-xs md:text-3xl"
                style={{
                  backgroundColor: mathButtonColor,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", // Add shadow here
                }}
                onClick={handleMathButtonClick}
              >
                Mathematics <br />
                <span className="text-xs">5K/month</span>
              </button>
              <button
                className="flex-1 bg-gray-100 p-2 text-white w-[100px] subject-button lg:text-lg sm:text-sm md:text-3xl"
                onClick={handleEnglishButtonClick}
                style={{
                  backgroundColor: englishButtonColor,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", // Add shadow here
                }}
              >
                English
              </button>
            </div>
            {paragraphOrder.map((index) => (
              <div>
                {index === 1 && (
                  <div className="flex lg:mt-[60px] sm:mt-9 md:mt-[100px] lg:gap-4 sm:gap-3">
                    <img
                      src={Square}
                      alt=""
                      className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] sm:w-[14px] sm:h-[14px] sm:mt-1 md:mt-2 lg:mt-0"
                    />
                    <p className="lg:text-xl sm:text-[16px] md:text-3xl   font-semibold">
                      Access to Alamkul App
                    </p>
                  </div>
                )}

                {index === 2 && (
                  <div className="flex sm:mt-9 lg:mt-9 md:mt-16 lg:gap-4 sm:gap-3">
                    <img
                      src={Circle}
                      alt=""
                      className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] sm:w-[14px] sm:h-[14px] sm:mt-1 md:mt-2 lg:mt-0"
                    />
                    <p className="lg:text-xl sm:text-[16px] md:text-3xl  font-semibold">
                      Batch Strength: 10
                    </p>
                  </div>
                )}

                {index === 3 && (
                  <div className="flex sm:mt-9 lg:mt-9 md:mt-16 lg:gap-4 sm:gap-3">
                    <img
                      src={Square}
                      alt=""
                      className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] sm:w-[14px] sm:h-[14px] sm:mt-1 md:mt-2 lg:mt-0"
                    />
                    <p className="lg:text-xl sm:text-[16px] md:text-3xl  font-semibold">
                      Highly competitive peer group
                    </p>
                  </div>
                )}

                {index === 4 && (
                  <div className="flex sm:mt-9 lg:mt-9 md:mt-16 lg:gap-4 sm:gap-3">
                    <img
                      src={Circle}
                      alt=""
                      className="lg:w-[24px] md:w-[20px] md:h-[20px] md:mt-2  lg:h-[24px] sm:w-[14px] sm:h-[14px] sm:mt-1 lg:mt-0"
                    />
                    <p className="lg:text-xl sm:text-[16px] md:text-3xl  font-semibold">
                      Individual attention
                    </p>
                  </div>
                )}

                {index === 5 && (
                  <div className="flex sm:mt-9 lg:mt-9 md:mt-16 lg:gap-4 sm:gap-3">
                    <img
                      src={Square}
                      alt=""
                      className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] md:mt-2 sm:w-[14px] sm:h-[14px] sm:mt-1 lg:mt-0"
                    />
                    <p className="lg:text-xl sm:text-[16px] md:text-3xl   font-semibold">
                      Motivational sessions
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white lg:h-[800px] ">
        <img src={CmpLaptop} alt="" className="w-[900px] mx-auto mt-6" />
      </div>
      <div
        id="form-section"
        className=" lg:h-[1000px] sm:h-[850px]   grid place-items-center"
        style={{ backgroundColor: "#CB7D01", opacity: 0.8 }}
      >
        <div className="bg-white lg:h-[800px] lg:w-[900px] md:w-[600px]     sm:h-[750px] sm:w-[330px] border-black border-2">
          <div class="flex flex-col justify-center items-center lg:h-[800px]">
            <form ref={formRef}>
              <div class="">
                <div class="mb-2 sm:ml-[5px] lg:ml-0 sm:mt-4 lg:mt-0">
                  <label for="yourName" class="block">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="yourName"
                    value={formData.yourName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    class="block border-2 border-black bg-yellow-600 bg-opacity-60 placeholder-white rounded-md px-2 lg:w-[600px] md:w-[500px]    sm:w-[300px] sm:mx-auto lg:ml-0"
                  />
                </div>
              </div>
              <div class="mt-4">
                <div class="mb-2 sm:ml-[5px]  lg:ml-0 sm:mt-4 lg:mt-0">
                  <label for="yourName" class="block">
                    Email
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    id="yourEmail"
                    value={formData.yourEmail}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    class="block border-2 border-black bg-yellow-600 bg-opacity-60 placeholder-white md:w-[500px]  rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0"
                  />
                </div>
              </div>
              <div class="mt-4">
                <div class="mb-2 sm:ml-[5px] lg:ml-0 sm:mt-4 lg:mt-0">
                  <label for="yourName" class="block">
                    Phone number
                  </label>
                </div>
                <div>
                  <input
                    type="number"
                    id="yourNumber"
                    value={formData.yourNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your number"
                    class="block border-2 border-black bg-yellow-600 bg-opacity-60 placeholder-white md:w-[500px] rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto   lg:ml-0"
                  />
                </div>
              </div>
              <div class="mt-4">
                <div class="mb-2 sm:ml-[5px] lg:ml-0 sm:mt-4 lg:mt-0">
                  <label for="yourName" class="block">
                    Class (Optional)
                  </label>
                </div>
                <div>
                  <input
                    type="number"
                    value={formData.yourClass}
                    onChange={handleInputChange}
                    id="yourClass"
                    placeholder="Enter your class"
                    class="block border-2 border-black bg-yellow-600 bg-opacity-60 placeholder-white md:w-[500px]  rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0"
                  />
                </div>
              </div>
              <div class="mt-4">
                <div class="mb-2 sm:ml-[5px]  lg:ml-0 sm:mt-4 lg:mt-0">
                  <label for="yourName" class="block">
                    Choose your batch
                  </label>
                </div>
                <div>
                  <select
                    type="text"
                    id="yourBatch"
                    value={formData.yourBatch}
                    onChange={handleInputChange}
                    placeholder="Select Batch"
                    class="block border-2 border-black bg-yellow-600 bg-opacity-60 placeholder-white md:w-[500px]  text-white rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0"
                  >
                    <option selected>Select Batch</option>
                    <option value="1">Concept Mastering Program</option>
                    <option value="2">ELITE</option>
                    <option value="3">Basic</option>
                    <option value="4">Not Sure</option>
                  </select>
                </div>
              </div>

              <div class="mt-4">
                <div class="mb-2 sm:ml-[5px]  lg:ml-0 sm:mt-4 lg:mt-0">
                  <label for="yourName" class="block">
                    Choose your preferred subject
                  </label>
                </div>
                <select
                  type="text"
                  id="yourSubject"
                  value={formData.yourSubject}
                  onChange={handleInputChange}
                  placeholder="Select Batch"
                  class="block border-2 border-black bg-yellow-600 bg-opacity-60 placeholder-white md:w-[500px]  text-white rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0"
                >
                  <option selected>Select an option</option>
                  <option value="1">Mathematics, Chemistry, Physics</option>
                  <option value="2">
                    Biology, Mathematics, Chemistry, Physics (+1100/mon)
                  </option>
                </select>
              </div>
              <div class="mt-4">
                <div class="mb-2 sm:ml-[5px]  lg:ml-0 sm:mt-4 lg:mt-0">
                  <label for="yourName" class="block">
                    Message
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={formData.yourMessage}
                    onChange={handleInputChange}
                    id="yourMessage"
                    placeholder="Enter your message here...."
                    class="block border-2 border-black bg-yellow-600 bg-opacity-60 placeholder-white md:w-[500px] rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0 h-[120px] "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="border-2 lg:w-[600px] sm:w-[300px] md:w-[500px]  sm:mx-auto mt-4 text-white"
                style={{ backgroundColor: "#CB7D01" }}
                onClick={submitDone}
              >
                Submit
              </button>
            </form>
          </div>
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
                What are the Requirements to take the LIVE classes?
              </p>
              <div
                className="lg:text-lg sm:text-sm md:text-xl overflow-hidden  text-blue-800"
                style={{
                  maxHeight: showStory ? "120px" : 0,
                  opacity: showStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                A Mobile Phone/Tablet/Laptop/Desktop of Standard Configuration
                Headphone/Microphone Active Internet Connection with min. 2mbps
                in LAN connection OR 4G Internet Connection; 2Mbps Wi-Fi
                connection.
              </div>
            </div>
            <div className="mb-4">
              <p
                className="cursor-pointer mb-2 sm:text-sm md:text-2xl lg:text-xl"
                onClick={toggleTwoStory}
                style={{
                  maxHeight: showTwoStory ? "100px" : "30px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                How to Arrange for a FREE Trial of the classes?
              </p>
              <div
                className="lg:text-lg sm:text-sm  md:text-xl overflow-hidden text-blue-800"
                style={{
                  maxHeight: showTwoStory ? "100px" : 0,
                  opacity: showTwoStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                By Booking for a FREE Demo on the Course Page.
              </div>
            </div>
            <div className="mb-4">
              <p
                className="cursor-pointer mb-2 sm:text-sm lg:text-xl md:text-2xl"
                onClick={toggleThreeStory}
                style={{
                  maxHeight: showThreeStory ? "100px" : "30px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                What will be the Lecture/Class timings?
              </p>
              <div
                className="lg:text-lg sm:text-sm  md:text-xl overflow-hidden text-blue-800"
                style={{
                  maxHeight: showThreeStory ? "140px" : 0,
                  opacity: showThreeStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                Alamkul assures the timing of the classes fall after the school
                timings as per convenience of the students. Class Schedule would
                be provided to the students to keep a track of their Classes. A
                Reminder would also be sent to ensure none of the classes are
                missed.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default Cmp;
