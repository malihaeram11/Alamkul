import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { WhatsApp } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Nav = () => {
  const [drop, setDrop] = useState(false);
  const [over, setOver] = useState(false);
  const [apply, setApply] = useState(false);

  const handleClick = () => {
    window.location.href = "/cmp";
  };

  const prefoundationClick = () => {
    window.location.href = "/prefoundation";
  };

 const jeeClick = () => {
  window.location.href = "/jee";
 }
const neetClick = () => {
  window.location.href = "/neet";
}

const boardClick = () => {
  window.location.href = "/board";
}

const aboutClick = () => {
  window.location.href = "/about";
}


  const toggleMobileMenu = () => {
    setDrop((prevDrop) => !prevDrop);
  };

  const handleClickEvent = () => {
    setOver((prevOver) => !prevOver);
  };

  const clickNewEvent = () => {
    setApply((prevApply) => !prevApply);
  };

  return (
    <div className="positionI">
      <div className="slide ">
        <div>
          <div className="flex justify-around">
            <div className="sm:flex sm:mt-2 ">
              <div>
                <img
                  src={Logo}
                  alt="logo"
                  className={`lg:w-52 lg:mt-5 cursor-pointer sm:mt-0 sm:w-2/5 md:w-2/5 ${
                    drop ? "hidden" : ""
                  }`}
                />
              </div>

              <div>
                <GiHamburgerMenu
                  className={`hamburger block lg:hidden sm:mt-3 md:w-10 md:mt-6 ${
                    drop ? "hidden" : ""
                  }`}
                  onClick={toggleMobileMenu}
                />
                {drop && (
                  <nav className="block lg:hidden sm:w-full sm:h-screen bg-gray-200 fixed top-0 left-0 z-50 transition-transform duration-500  transform ease-out">
                    <ImCross
                      className="close-icon absolute top-4 right-4 cursor-pointer"
                      onClick={toggleMobileMenu}
                    />
                    <ul className="list-none pt-12">
                      <li>
                        <Link
                          to="/about"
                          className="cursor-pointer hover:text-blue-700 block py-2 px-4 font-semibold text-2xl mb-3"
                          onClick={aboutClick}
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="cursor-pointer hover:text-blue-700 block py-2 px-4 font-semibold text-2xl mb-3 dropdown-toggle relative"
                          onClick={handleClickEvent}
                        >
                          Courses
                        </Link>

                        {over && (
                          <nav className="border-new absolute bg-white w-60 mt-1 rounded-md shadow-lg ">
                            <ul>
                              <li>
                                <Link
                                  to="/cmp"
                                  className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl font-semibold mb-2"
                                  onClick={handleClick}
                                >
                                  CMP
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/prefoundation"
                                  className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl font-semibold mb-2"
                                  onClick={prefoundationClick}
                                >
                                  Pre-Foundation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/jee"
                                  className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl font-semibold mb-2"
                                  onClick={jeeClick}
                                >
                                  JEE
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/neet"
                                  className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl font-semibold mb-2"
                                  onClick={neetClick}
                                >
                                  NEET
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/board"
                                  className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl font-semibold mb-2"
                                  onClick={boardClick}
                                >
                                  Board Courses
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        )}
                      </li>
                      <li>
                        <Link
                          to=""
                          className="cursor-pointer hover:text-blue-700 block py-2 px-4 font-semibold text-2xl mb-3 dropdown-toggle "
                          onClick={clickNewEvent}
                        >
                          Sponsor
                        </Link>

                        {apply && (
                          <nav className="border-new absolute bg-white w-60 h-30 mt-1 rounded-md shadow-lgr">
                            <ul>
                              <li>
                                <Link
                                  to=""
                                  className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl font-semibold mb-2"
                                >
                                  Sponsor a child
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to=""
                                  className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl font-semibold mb-2"
                                >
                                  Be Sponsored
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        )}
                      </li>
                      <li>
                        <Link
                          to=""
                          className="cursor-pointer hover:text-blue-700 block py-2 px-4 font-semibold text-2xl mb-3 bg-gray-500 text-white  rounded-sm"
                        >
                          Schedule Free Counselling
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="cursor-pointer hover:text-blue-700 block py-2 px-4 font-semibold text-2xl mb-3 bg-gray-500 text-white  rounded-sm"
                        >
                          Aspirants, Start here
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
            </div>
            <div className="mt-4 flex navbarone hidden lg:block">
              <nav className="font-mono">
                <ul className="flex gap-9 font-semibold ">
                  <li>
                    <Link to="" className="cursor-pointer hover:text-blue-700 ">
                      <WhatsApp className="text-green-500 mr-3" />
                      Ask a query on 8884409317
                    </Link>
                  </li>
                  <li className="divider-vertical"></li>
                  <li>
                    <Link to="" className="cursor-pointer hover:text-blue-700">
                      <Phone className="text-blue-500 mr-3" />
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="divider-horizontal hidden lg:block"></div>
        </div>
        <div className="lg:flex lg:justify-end lg:mt-4  hidden lg:block">
          <div>
            <nav className="mr-28 font-mono">
              <ul className="flex gap-9 font-semibold">
                <li>
                  <Link to="/about" className="cursor-pointer hover:text-blue-700"       onClick={aboutClick}>
            
                    About us
                  </Link>
                </li>
                <li>
                  <div>
                    <Link
                      to=""
                      className="cursor-pointer hover:text-blue-700 dropdown-toggle"
                      onClick={handleClickEvent}
                    >
                      Courses
                    </Link>

                    {over && (
                      <nav className="border-new absolute ">
                        <ul>
                          <li>
                            <Link
                              to="/cmp"
                              className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl"
                              onClick={handleClick}
                            >
                              CMP
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/prefoundation"
                              className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl"
                              onClick={prefoundationClick}
                            >
                              Pre-Foundation
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/jee"
                              className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl"
                              onClick={jeeClick}
                            >
                              JEE
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/neet"
                              className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl"
                              onClick={neetClick}
                            >
                              NEET
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/board"
                              className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl"
                              onClick={boardClick}
                            >
                              Board Courses
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>
                </li>
                <li>
                  <Link
                    to=""
                    className="cursor-pointer hover:text-blue-700 dropdown-toggle"
                    onClick={clickNewEvent}
                  >
                    Sponsor
                  </Link>
                  {apply && (
                    <nav className="absolute new-border">
                      <ul>
                        <li>
                          <Link
                            to=""
                            className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl"
                          >
                            Sponsor a child
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            className="cursor-pointer block hover:bg-green-300 w-full p-1 text-xl"
                          >
                            Be Sponsored
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  )}
                </li>
                <li>
                  <Link to="" className="cursor-pointer">
                    <button
                      type="button"
                      className="btn btn-outline-dark font-semibold"
                    >
                      Schedule Free Counselling
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="" className="cursor-pointer hover:text-blue-700">
                    <button
                      type="button"
                      className="btn btn-outline-primary font-semibold"
                    >
                      Aspirants, start here
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
