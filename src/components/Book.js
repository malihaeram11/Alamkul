import { useState, useRef } from "react";
import React from "react";

const Book = () => {
  const [book, setBook] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const formRef = useRef();

  const bookDone = () => {
    if (name && phoneNumber && email) {
      setBook(true);
      alert("Thanks for booking! We will contact you soon");
      formRef.current.reset();
      setName("");
      setPhoneNumber("");
      setEmail("");
    } else {
      alert("Please fill in all the details before booking.");
    }
  };

  return (
    <div className="book sm:w-[90%] sm:h-[420px]  md:w-[60%]   lg:w-[50%] lg:h-[280px] lg:pt-4   sm:my-[120px]     lg:my-[220px] mx-auto">
      <form className="row g-3" ref={formRef}>
        <h1 className=" lg:text-xl sm:text-xl md:text-2xl md:text-center lg:text-left  ml-5 font-semibold">
          Book your <span className="text-blue-700">FREE DEMO</span> Class
        </h1>
        <p className="lg:ml-5 sm:ml-5 md:text-center lg:text-left md:text-xl lg:text-sm    iit">
          Learn from IITian
        </p>
        <div className="lg:flex lg:justify-around">
          <div className="">
            <input
              type="Name"
              className="form-control sm:w-60 md:w-[350px]    lg:w-auto sm:mx-auto"
              id="inputName10"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="phonenumber"
              className="form-control sm:w-60 md:w-[350px]  lg:w-auto sm:mt-2 lg:mt-auto sm:mx-auto"
              id="inputPhoned4"
              placeholder="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="email"
              className="form-control sm:w-60 md:w-[350px]  lg:w-auto sm:mt-2 lg:mt-auto sm:mx-auto"
              id="inputemail4"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="lg:flex lg:justify-around">
          <div className="lg:col-5 lg:relative">
            <select
              class="form-select cursor-pointer md:w-[350px]  sm:w-60 lg:w-60 sm:mx-auto"
              aria-label="Default select example"
              type="text"
              id="inputcourse"
              placeholder="Select Course"
            >
              <option selected>Select Course</option>
              <option value="1">Concept Mastering Program</option>
              <option value="2"> Pre-Foundation</option>
              <option value="3">JEE-Foundation</option>
              <option value="4">NEET-Foundation</option>
              <option value="5"> Board Course</option>
            </select>
          </div>

          <div className="lg:col-5">
            <select
              class="form-select cursor-pointer md:w-[350px]  sm:w-60 lg:w-90 sm:mx-auto"
              aria-label="Default select example"
              type="text"
              id="inputcourse"
              placeholder="Select Course"
            >
              <option selected>Select Your Class</option>
              <option value="1">8th</option>
              <option value="2"> 9th</option>
              <option value="3">10th</option>
              <option value="4">11th</option>
              <option value="5">12th</option>
              <option value="6">Other</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="booknow lg:ml-7 sm:mx-auto sm:mt-8 lg:mt-8"
          onClick={bookDone}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Book;
