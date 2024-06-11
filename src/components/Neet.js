import React, { useState, useRef } from "react";
import NeetImage from "../assets/neet/neetimage.png";
import NeetVideo from "../assets/neet/neetvideo.png";
import Left from "../assets/board/left.png";
import Right from "../assets/board/right.png";
import Square from "../assets/board/squaretick.png";
import Circle from "../assets/board/circletick.png";
import NeetLaptop from "../assets/neet/neetlaptop.png";
import { Link } from "react-router-dom";
import gButton from "../assets/gbutton.png";
import Try from "../assets/neet/try.png";

const Board = () => {
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
  const [mathButtonColor, setMathButtonColor] = useState("#088A6C");
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
    setMathButtonColor("#088A6C");
  };

  const handleEnglishButtonClick = () => {
    // Toggle the background colors
    setParagraphOrder([1, 3, 4, 2, 5]);
    setEnglishButtonColor("#088A6C");
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
          className=" sm:w-[190px] sm:h-[130px] md:w-[320px] md:h-[280px] lg:w-[320px] lg:h-[280px]  absolute -top-10 -left-10"
          style={{
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "250px",
            backgroundColor: "#068B6B",
            opacity: 0.8,
          }}
        ></div>

        <div
          className="  sm:w-[140px] sm:h-[150px] md:w-[320px] md:h-[320px]   lg:w-[320px] lg:h-[320px]   rounded-full absolute lg:left-[-160px]  md:left-[-160px] lg:mt-5 md:mt-5   sm:left-[-70px]"
          style={{ backgroundColor: "#068B6B", opacity: 0.8 }}
        ></div>

        <div className=" relative text-center">
          <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-3xl lg:mt-5 text-black">
            Foundation Course : <span style={{ color: "#38A289" }}>NEET</span>
          </h1>
          <p className="font-bold md:text-xl lg:text-2xl mt-2">(XI | XII)</p>
        </div>

        <div className="lg:flex lg:items-start lg:pl-[190px] lg:pt-[100px]">
          <div className="text-left">
            <h1 className="lg:text-5xl sm:text-3xl sm:text-center lg:text-start sm:mt-4 lg:mt-auto sm:font-bold  lg:font-semibold">
              NEET
            </h1>
            <div className="lg:w-[600px] sm:mt-[400px] lg:mt-4">
              <p className="font-semibold lg:text-2xl sm:text-center lg:text-left sm:text-sm md:text-lg">
                Alamkul has the best preparatory courses for medical entrance
                examinations for students of class 11 and 12 and will help you
                acquire the required skills set to crack the NEET UG exam.
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
          src={NeetImage}
          alt=""
          className="lg:w-[500px] lg:absolute lg:right-0 lg:top-[32px] sm:mt-[-470px] md:mt-[-480px] sm:mx-auto  lg:mt-0 sm:w-[260px] md:w-[290px]"
        />

        <img
          src={NeetVideo}
          alt=""
          className=" sm:w-[70px] sm:mt-[-350px] md:mt-[-355px]    sm:mx-auto lg:mt-0 lg:w-[110px] lg:absolute lg:right-0 lg:top-8 lg:mr-[460px] cursor-pointer"
          onClick={videoOpen}
        />
      </div>
      <div
        className=" lg:h-[800px] mt-[26px] lg:flex lg:justify-center lg:items-center"
        style={{ backgroundColor: "#0B8367", opacity: 0.8 }}
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
            <h1 className="text-center font-bold lg:text-2xl sm:text-lg md:text-4xl lg:mt-0 md:mt-[-20px]">
              Grade XI, XII
            </h1>
            <div className="text-center">
              <p
                className="font-semibold lg:text-[21px] sm:text-[16px] md:text-4xl sm:mt-2 lg:mt-4 md:mt-12"
                style={{ color: "#0B8367" }}
              >
                Our foundation course provide one-stop learning solution which
                are aimed to strengthen the conceptual understanding.
              </p>
            </div>

            <img src={Try} className=" sm:mt-4 md:mt-12 lg:mt-9" />
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
                Elite <br />
                <span className="text-xs">7K/month/sub</span>
              </button>
              <button
                className="flex-1 bg-gray-100 p-2 text-white w-[100px] subject-button lg:text-lg sm:text-sm md:text-3xl"
                onClick={handleEnglishButtonClick}
                style={{
                  backgroundColor: englishButtonColor,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", // Add shadow here
                }}
              >
                Basic <br />
                <span className="text-xs">3K/month/sub</span>
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
                      Batch Strength: 20
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
        <img src={NeetLaptop} alt="" className="w-[900px] mx-auto mt-6" />
      </div>
      <div
        id="form-section"
        className=" lg:h-[1000px] sm:h-[850px]   grid place-items-center"
        style={{ backgroundColor: "#38A289", opacity: 0.8 }}
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
                    class="block border-2 border-black placeholder-white rounded-md px-2 lg:w-[600px] md:w-[500px]    sm:w-[300px] sm:mx-auto lg:ml-0"
                    style={{ backgroundColor: "#38A289", opacity: 0.6 }}
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
                    class="block border-2 border-black placeholder-white md:w-[500px]  rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0"
                    style={{ backgroundColor: "#38A289", opacity: 0.6 }}
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
                    class="block border-2 border-black  placeholder-white md:w-[500px] rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto   lg:ml-0"
                    style={{ backgroundColor: "#38A289", opacity: 0.6 }}
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
                    class="block border-2 border-black placeholder-white md:w-[500px]  rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0"
                    style={{ backgroundColor: "#38A289", opacity: 0.6 }}
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
                    class="block border-2 border-black placeholder-white md:w-[500px]  text-white rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0"
                    style={{ backgroundColor: "#38A289", opacity: 0.6 }}
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
                  class="block border-2 border-black placeholder-white md:w-[500px]  text-white rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0"
                  style={{ backgroundColor: "#38A289", opacity: 0.6 }}
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
                    class="block border-2 border-black  placeholder-white md:w-[500px] rounded-md px-2 lg:w-[600px] sm:w-[300px]  sm:mx-auto  lg:ml-0 h-[120px] "
                    style={{ backgroundColor: "#38A289", opacity: 0.6 }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="border-2 lg:w-[600px] sm:w-[300px] md:w-[500px]  sm:mx-auto mt-4 text-white"
                style={{ backgroundColor: "#38A289" }}
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
                What is the age criterion for appearing in NEET-UG?
              </p>
              <div
                className="lg:text-lg sm:text-sm md:text-xl overflow-hidden  text-blue-800"
                style={{
                  maxHeight: showStory ? "120px" : 0,
                  opacity: showStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                He/she has completed age of 17 years at the time of admission or
                will complete that age on or before 31 December of the year of
                his/her admission to the first year Undergraduate Medical
                Courses. The upper age limit for NEET (UG) is 25 years as on the
                date of examination with relaxation of 5 years for the
                candidates belonging to SC/ST/OBC-NCL category and PwD
                Candidates. For Candidates of General (UR)/General-EWS- born on
                or before 31.12.2003 For Candidates of SC/ST/OBC-NCL/PwD
                Category- born on or before 31.12.2003
              </div>
            </div>
            <div className="mb-4">
              <p
                className="cursor-pointer mb-2 sm:text-sm md:text-2xl lg:text-xl"
                onClick={toggleTwoStory}
                style={{
                  maxHeight: showTwoStory ? "100px" : "50px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                What is National Eligibility cum Entrance Test –UG (NEET-UG)?
              </p>
              <div
                className="lg:text-lg sm:text-sm  md:text-xl overflow-hidden text-blue-800"
                style={{
                  maxHeight: showTwoStory ? "200px" : 0,
                  opacity: showTwoStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                As per regulations framed under the Indian Medical Council
                Act-1956 as amended in 2018 and the Dentists Act-1948 as amended
                in 2018, admissions in 100% seats of MBBS/BDS will be done
                through NATIONAL ELIGIBILITY CUM ENTRANCE TEST (UG) – 2018
                (NEET-UG, 2018) in Medical/Dental Colleges run with the approval
                of Medical Council of India/Dental Council of India under the
                Union Ministry.
              </div>
            </div>
            <div className="mb-4">
              <p
                className="cursor-pointer mb-2 sm:text-sm lg:text-xl md:text-2xl"
                onClick={toggleThreeStory}
                style={{
                  maxHeight: showThreeStory ? "100px" : "50px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                Through NEET-UG against which seats admissions will be made?
              </p>
              <div
                className="lg:text-lg sm:text-sm  md:text-xl overflow-hidden text-blue-800"
                style={{
                  maxHeight: showThreeStory ? "140px" : 0,
                  opacity: showThreeStory ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                All India Quota Seats State Government Quota Seats Central
                Institutions/Universities/Deemed Universities
                State/Management/NRI Quota Seats in Private Medical / Dental
                Colleges or any Private University Central Pool Quota Seats
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

export default Board;
