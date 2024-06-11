import React, { useState } from "react";

const Faq = () => {
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

  return (
    <div className=" itemsTry sm:my-[100px] sm:text-center lg:text-left  lg:my-[200px] lg:mx-auto lg:w-[700px]">
      <div className="font-semibold text-xl ">
        <h1 className="font-semibold text-4xl mb-12">FAQ</h1>
        <div className="mb-4">
          <p
            className="cursor-pointer mb-2"
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
            className="lg:text-lg sm:text-sm  overflow-hidden text-blue-800"
            style={{
              maxHeight: showStory ? "100px" : 0,
              opacity: showStory ? 1 : 0,
              transition: "max-height 0.3s ease, opacity 0.3s ease",
            }}
          >
            Alamkul was launched in 2011, with a mission to inspire students to
            discover their latent intellect and fill the gap between scientific
            theory and common-sense.
          </div>
        </div>
        <div className="mb-4">
          <p
            className="cursor-pointer mb-2"
            onClick={toggleTwoStory}
            style={{
              maxHeight: showTwoStory ? "100px" : "30px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            What will be the batch strength and will the individual attention be
            possible?
          </p>
          <div
            className="lg:text-lg sm:text-sm overflow-hidden text-blue-800"
            style={{
              maxHeight: showTwoStory ? "100px" : 0,
              opacity: showTwoStory ? 1 : 0,
              transition: "max-height 0.3s ease, opacity 0.3s ease",
            }}
          >
            The maximum strength will be 25 students which enables individual
            attention and gives a feeling of competition amongst the students.
          </div>
        </div>
        <div className="mb-4">
          <p
            className="cursor-pointer mb-2"
            onClick={toggleThreeStory}
            style={{
              maxHeight: showThreeStory ? "100px" : "30px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            How will you track my progress and how will you help me if it is not
            satisfactory?
          </p>
          <div
            className="lg:text-lg sm:text-sm overflow-hidden text-blue-800"
            style={{
              maxHeight: showThreeStory ? "100px" : 0,
              opacity: showThreeStory ? 1 : 0,
              transition: "max-height 0.3s ease, opacity 0.3s ease",
            }}
          >
            Regular tests and assignments will be used as a tool to monitor your
            progress. These will also help us in finding the weak areas that
            need to be addressed.
          </div>
        </div>
        <div className="mb-4">
          <p
            className="cursor-pointer mb-2"
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
            className="lg:text-lg sm:text-sm  overflow-hidden text-blue-800"
            style={{
              maxHeight: showFourStory ? "100px" : 0,
              opacity: showFourStory ? 1 : 0,
              transition: "max-height 0.3s ease, opacity 0.3s ease",
            }}
          >
            Yes, Alamkul offer hybrid classes for both online as well as
            offline.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
