import React from "react";
import Class from "../assets/classes.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const Classes = () => {
  return (
    <div>
      <div>
        <div className="ml-10 p-4">
          <div className="flex justify-start">
            <p className=" mt-3 sm:text-xl md:text-3xl  md:mx-auto lg:mx-0 font-bold  lg:font-semibold lg:text-2xl">
              Explore Our Hybrid Courses
            </p>
          </div>
          <p className=" text-lg sm:text-xl md:text-2xl md:text-center md:font-medium lg:text-left font-bold lg:font-semibold lg:text-2xl">
            for the Best of Both Worlds
          </p>
          <p className=" mt-2 lg:text-xl lg:mt-3 lg:font-light md:text-center lg:text-left   ">
            With the best Teachers
          </p>
          <div className="lg:flex lg:justify-between">
            <img src={Class} alt="" className=" mt-5 lg:w-2/5 lg:mt-20" />
            <div
              style={{ backgroundColor: "#FFA500" }}
              className="mt-5 w-3/3 lg:w-1/3"
            >
              <motion.div
                style={{
                  backgroundColor: "white",

                  width: "90%",
                }}
                className="lg:h-25 lg:shadow-lg lg:mt-14 lg:ml-[-150px] online"
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <motion.div
                  className="p-2 lg:p-3"
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <p className="sm:font-bold sm:text-xl md:font-bold md:text-2xl   lg:font-bold lg:text-2xl">
                    Online classes
                  </p>
                  <p className="mt-2 md:text-lg  lg:text-[15.2px] lg:font-medium lg:mt-2">
                    Get ready for an exciting learning experience! By immersing
                    yourself in captivating videos and comprehensive notes
                    before our live class, you'll be equipped to actively
                    engage, ask insightful questions, and truly amplify your
                    understanding of the concepts we explore together.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  backgroundColor: "white",
                  marginLeft: "50px",
                  width: "90%",
                }}
                className="mt-5 lg:h-25 lg:shadow-lg lg:mt-14"
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <motion.div
                  className="p-2 lg:p-3"
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <p className=" sm:font-bold sm:text-xl md:font-bold md:text-2xl  lg:font-bold lg:text-2xl">
                    Offline classes
                  </p>
                  <p className="mt-2 md:text-lg  lg:text-[15.2px] lg:font-medium lg:mt-2">
                    Step into the realm of traditional education as you embrace
                    the energy of offline classes, where face-to-face
                    interactions, real-time discussions, and immediate feedback
                    fuel your learning journey. Immerse yourself in a vibrant
                    classroom setting, fostering a sense of community and
                    collaboration.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  backgroundColor: "white",

                  width: "90%",
                }}
                className="mt-5 lg:h-25 lg:shadow-lg lg:mt-14 lg:ml-[-150px]"
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <motion.div
                  className="p-2 lg:p-3"
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <p className=" sm:font-bold sm:text-xl md:font-bold md:text-2xl  lg:font-bold lg:text-2xl">
                    Hybrid classes
                  </p>
                  <p className="mt-2 md:text-lg  lg:text-[15.2px] lg:font-medium lg:mt-2">
                    Experience the best of both worlds in hybrid classes, where
                    online and offline learning converge. Seamlessly blend the
                    flexibility of online platforms with the dynamic
                    interactions of face-to-face sessions, creating a
                    well-rounded educational environment that caters to diverse
                    learning styles.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
