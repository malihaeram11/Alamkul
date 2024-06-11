import React from "react";
import footer from "../assets/footer.png";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  function facebook() {
    window.location.href = "";
  }

  function instagram() {
    window.location.href = "";
  }

  function youtube() {
    window.location.href =
      "https://www.youtube.com/channel/UCWuwPJ5U6ldV2RxHzygIi9w";
  }
  return (
    <div>
      <div className="footer lg:h-[420px]  lg:flex lg:justify-around">
        <div className="w-60 flex flex-col justify-center items-center sm:mx-auto lg:mx-0">
          <div>
            <img src={footer} alt="" className="mt-1" />
          </div>
          <div className="flex text-center mt-3 text-white">
            <p>
              Alamkul is committed to inspire students to discover their latent
              intellect and fill the gap between scientific theory and
              common-sense
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <a href="#facebook" onClick={facebook} className="text-white">
              <FaFacebook />
            </a>
            <a href="#instagram" onClick={instagram} className="text-white">
              <FaInstagram />
            </a>
            <a href="#youtube" onClick={youtube} className="text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="mt-5 text-white text-lg sm:text-center lg:text-left">
          <p className=" sm:mb-4 lg:mb-5 ">COURES</p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">CMP</p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">
            Pre-foundation
          </p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">JEE</p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">NEET</p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">
            Board Courses
          </p>
        </div>
        <div className="mt-5 text-white text-lg sm:text-center lg:text-left">
          <p className="sm:mb-4 lg:mb-5 ">COMPANY</p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">About us</p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">Contact us</p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">
            Sponsor a child
          </p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">
            Be Sponsored
          </p>
          <p className="mb-2 cursor-pointer hover:text-blue-700">Counselling</p>
        </div>
        <div className="mt-5 text-white text-lg sm:text-center lg:text-left">
          <p className="sm:mb-4 lg:mb-5 ">CONTACT</p>
          <p className="mb-2 lg:w-60 m-2 lg:m-auto">
            I3S TECHNOLOGY PVT. LTD Brigade Metropolis, Garudacharpalya,
            Bengaluru - 48, Karnataka
          </p>

          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-2">
            <FaPhone className="text-sm mt-2 lg:mt-0 lg:mr-2" />
            <p className="mb-2 cursor-pointer text-blue-700 ">8884409317</p>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-2">
            <AiOutlineMail className="text-sm mt-2 lg:mt-0 lg:mr-2" />
            <p className="mb-2 cursor-pointer text-blue-700 sm:mx-auto lg:mx-0">
              alamkul@i3stech.com
            </p>
          </div>
        </div>
      </div>
      <p className="text-white text-center bg-black p-2 ">
        &copy; 2022 Copyright
      </p>
    </div>
  );
};

export default Footer;
