import React from "react";
import Carouselone from "../assets/carousel/carou1.png";
import Carouseltwo from "../assets/carousel/carou2.png";
import Carouselthree from "../assets/carousel/carou3.png";
import Carouselfour from "../assets/carousel/carou4.png";
import Carouselfive from "../assets/carousel/carou5.png";

const Courses = () => {
  const cmpClick = () => {
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

  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Carouselone}
              class="d-block w-100"
              alt="..."
              className="cursor-pointer"
              onClick={cmpClick}
            />
          </div>
          <div class="carousel-item">
            <img
              src={Carouseltwo}
              class="d-block w-100"
              alt="..."
              className="cursor-pointer"
              onClick={prefoundationClick}
            />
          </div>
          <div class="carousel-item">
            <img
              src={Carouselthree}
              class="d-block w-100"
              alt="..."
              className="cursor-pointer"
              onClick={jeeClick}
            />
          </div>
          <div class="carousel-item">
            <img
              src={Carouselfour}
              class="d-block w-100"
              alt="..."
              className="cursor-pointer"
              onClick={neetClick}
            />
          </div>
          <div class="carousel-item">
            <img src={Carouselfive} class="d-block w-100" alt="..." onClick={boardClick}/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ backgroundColor: "black" }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ backgroundColor: "black" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Courses;
