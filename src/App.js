import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Cmp from "./components/Cmp";
import Prefoundation from "./components/Prefoundation";
import Jee from "./components/Jee";
import Neet from "./components/Neet";
import Board from "./components/Board";
import About from "./components/About";
import Banner from "./components/Banner";
import Courses from "./components/Courses";
import Choose from "./components/Choose";
import Methodology from "./components/Methodology";
import Classes from "./components/Classes";
import Slide from "./components/Slide";
import Playstore from "./components/Playstore";
import Studyresource from "./components/Studyresource";
import Result from "./components/Results";
import Feedback from "./components/Feedback";
import Book from "./components/Book";
import Notification from "./components/Notification";
import Faq from "./components/Faq";
import Last from "./components/Last";
import Footer from "./components/Footer";



import "./index.css";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/cmp" element={<Cmp />} />
          <Route path="/prefoundation" element={<Prefoundation />} />
          <Route path="/jee" element={<Jee />} />
          <Route path="/neet" element={<Neet />} />
          <Route path="/board" element={<Board />} />
          <Route path="/book" Component={Book} />
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <div>
                <Banner />
                <Courses />
                <Choose />
                <Methodology />
                <Classes />
                <Slide />
                <Playstore />
                <Studyresource />
                <Result />
                <Feedback />
                <Book />
             
                <Notification />
                <Faq />
                <Last />
                {/* Add other components here */}
              </div>
            }
          />
        </Routes>

        <Footer />
  
      </div>
    </Router>
  );
};

export default App;
