import React from "react";
import "./experience.css";
import Imogi from "../../img/h-ob-1.png";

const Experience = () => {
  return (
    <>
      <div className="experience" id="Experience">
        {/* <div className="our-experience">
          <span>Our</span>
          <span>Experience & Achievements</span>
        </div> */}
        <img src={Imogi} alt="" />
        <div className="achievement">
          <div className="circle">+3</div>
          <span>Years</span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          <div className="circle">20+</div>
          <span>completed</span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <div className="circle">3+</div>
          <span>Companies</span>
          <span>Work</span>
        </div>
        <div className="achievement">
          <div className="circle">+3</div>
          <span>Years</span>
          <span>Experience</span>
        </div>
        <img src={Imogi} alt="" />
      </div>
    </>
  );
};

export default Experience;

