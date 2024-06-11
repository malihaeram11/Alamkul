import React from "react";

const Notification = () => {
  return (
    <div>
      <h1 className=" text-2xl md:text-4xl lg:text-4xl flex justify-center sm:font-bold lg:font-semibold">
        Notification Center
      </h1>
      <div className="lg:flex lg:justify-around  mt-5 lg:mt-20">
        <div className="programs p-4 m-4 lg:m-auto  lg:h-[300px] lg:w-[600px]">
          <h1 className=" sm:text-2xl   lg:text-3xl font-bold ">
            Our Courses & Programs
          </h1>
          <div className="p-2 ml-2">
            <nav>
              <ol className="text-lg font-semibold">
                <li>
                  Summer Calculus Program (IX/X/XI/XII) -{" "}
                  <a
                    href="https://alamkul.in/AD/13_scpi.html"
                    className="text-blue-700 font-bold"
                  >
                    SCP
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://alamkul.in/AD/14_scpii.html"
                    className="text-blue-700 font-bold"
                  >
                    SCP
                  </a>
                </li>
                <li>
                  Pre-Foundation IX -{" "}
                  <a
                    href="https://alamkul.in/AD/1prefoundation.html"
                    className="text-blue-700 font-bold"
                  >
                    PFP-IX
                  </a>
                </li>
                <li>
                  Pre-Foundation X -{" "}
                  <a
                    href="https://alamkul.in/AD/11_prefoundation10i.html"
                    className="text-blue-700 font-bold"
                  >
                    PFP-X{" "}
                  </a>
                  |{" "}
                  <a
                    href="https://alamkul.in/AD/12_prefoundation10ii.html"
                    className="text-blue-700 font-bold"
                  >
                    PFP-X
                  </a>
                </li>
                <li>
                  CBSE/PU/ICSE/JEE/NEET -{" "}
                  <a
                    href="https://alamkul.in/AD/6_1112cbse.html"
                    className="text-blue-700 font-bold"
                  >
                    XI
                  </a>
                </li>
                <li>
                  CBSE/PU/ICSE/JEE/NEET -{" "}
                  <a
                    href="https://alamkul.in/AD/6_1112cbse.html"
                    className="text-blue-700 font-bold"
                  >
                    XII
                  </a>
                </li>
                <li>
                  CBSE/ICSE -{" "}
                  <a
                    href="https://alamkul.in/AD/3_910cbse.html"
                    className="text-blue-700 font-bold"
                  >
                    IX
                  </a>
                </li>
                <li>
                  CBSE/ICSE -
                  <a
                    href="https://alamkul.in/AD/3_910cbse.html"
                    className="text-blue-700 font-bold"
                  >
                    X
                  </a>
                </li>
                <li>
                  Concept Mastering Program (VIII/IX) -{" "}
                  <a
                    href="https://alamkul.in/AD/7_cmp.html"
                    className="text-blue-700 font-bold"
                  >
                    CMP
                  </a>
                </li>
                <li>
                  Basic Concept Mastering Program (VIII/VII) -{" "}
                  <a
                    href="https://alamkul.in/AD/4_bcp.html"
                    className="text-blue-700 font-bold"
                  >
                    BCP
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://alamkul.in/AD/5_bcp2.html"
                    className="font-bold text-blue-700"
                  >
                    BCP
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="programtwo p-3  m-4 lg:m-auto sm:mt-5 lg:mt-auto lg:h-[300px] lg:w-[600px]">
          <h1 className="sm:text-2xl   lg:text-3xl font-bold">News & Events</h1>

          <nav>
            <ul className="p-3 unordered">
              <li>...............</li>
              <li>...............</li>
              <li>...............</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Notification;
