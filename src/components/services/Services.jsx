import React, { useState } from "react";
import "./services.css";
import Card from "../cards/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Imogi from "../../img/h-ob-1.png";
import { motion } from "framer-motion";
import Resume from '../../documents/CV_Vikas_Rai.pdf'// Import the resume file or use a URL if hosted externally

const Services = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  // Transition
  const transition = { duration: 10, type: "spring" };

  return (
    <>
      <div className="services" id="Services">
        {/* left Side */}
        <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>

          <button style={{color:"white"}}className="button s-button" onClick={handleResumeClick}>Download CV</button>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* Right Side */}
        <div className="cards">
          <motion.img
            src={Imogi}
            alt=""
            whileInView={{ left: "50px" }}
            transition={transition}
            initial={{ Top: "70px", left: "10rem" }}
          />
          {/* first card */}

          <motion.div
            initial={{ left: "55rem", top: "7rem" }}
            whileInView={{ left: "20rem", top: "1rem"  }}
            transition={transition}
          >
            <Card
              emoji={HeartEmoji}
              heading={"Mobile App Development"}
              detail={
                "I can provide Android and ios application development I can turn your idea into reality startup with me."
              }
            />
          </motion.div>
          {/* Second card */}
          <motion.div
            initial={{ left: "10rem", top: "7rem" }}
            whileInView={{ left: "60rem", top: "1rem"  }}
            transition={transition}
          >
            <Card
              emoji={Glasses}
              heading={"Website Development"}
              detail={
                "I can provide a website design and development to make your business online to drive more customers and sales."
              }
            />
          </motion.div>

          {/* Third card */}
          <motion.div
            initial={{ top: "7rem", left: "80rem" }}
            whileInView={{ left: "40rem", top: "1rem"  }}
            transition={transition}
          >
            <Card
              emoji={Humble}
              heading={"Software Development"}
              detail={
                "I can provide custom software development for your Business, Billing, Inventory, and every type of custom software."
              }
              color="rgba(252, 166, 31, 0.45)"
            />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>

      {isResumeOpen && (
        <div className="resume-overlay" onClick={handleCloseResume}>
          <div className="resume-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-resume" onClick={handleCloseResume}>
              &times;
            </span>
            <embed src={Resume} type="application/pdf" className="embed-resume" />
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
