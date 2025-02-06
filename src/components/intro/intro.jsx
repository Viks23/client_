import React, { useState } from "react";
import "./intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import FullStack from "../../img/fullstack.jpg";
import Profile from "../../img/profile.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Android from "../../img/android.png";
import Imogi from "../../img/h-ob-1.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatinDiv from "../floatingDiv/FloatingDiv.jsx";
import { motion } from "framer-motion";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const transition = { duration: 10, type: "spring" };

  const handleHireMeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleCloseModal();
      window.location.href = "#Home"; // Redirect to home page
    }, 3000); // Display thank you message for 3 seconds
  };

  return (
    <>
      <div className="Intro" id="Intro">
        {/* left Side */}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span>Hi! I Am</span>
            <span>Vikas Rai</span>
            <span>
              A Full Stack Developer with high level of experience in Android
              and Web designing and development, producing quality work...
            </span>
          </div>

          <button style={{color:"white"}} className="button i-button" onClick={handleHireMeClick}>
            Hire me
          </button>

          {/* social icons */}
          <div className="i-icons">
            <a href="https://github.com/Viks23"><img src={Github} alt="GitHub" /></a>
            <a href="https://in.linkedin.com/in/vikas-rai-565bb51b7"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="https://github.com/Viks23"><img src={Instagram} alt="Instagram" /></a>
          </div>
        </div>
        {/* Right Side */}
        <div className="i-right">
          <img src={Vector1} alt="Vector1" />
          <img src={Vector2} alt="Vector2" />
          <img
            src={Profile}
            alt="Profile"
            style={{ width: "250px", height: "250px", marginTop: "100px" }}
          />
          <motion.img
            initial={{ left: "-46%" }}
            whileInView={{ left: "14%" }}
            transition={transition}
            src={glassesimoji}
            alt="Glasses Emoji"
          />
          <img src={Imogi} alt="Imogi" style={{ marginTop: "70px" }} />

          <motion.div
            initial={{ top: "-4%", left: "80%" }}
            whileInView={{ left: "-10%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={crown} text1="Web" text2="Developer" />
          </motion.div>

          <motion.div
            initial={{ left: "-32rem", top: "18rem" }}
            whileInView={{ left: "-10%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={Android} text1="Android" text2="Developer" />
          </motion.div>

          <motion.div
            className="floating-div"
            initial={{ left: "22rem", top: "11rem" }}
            whileInView={{ left: "-10%" }}
            transition={transition}
          >
            <FloatinDiv img={FullStack} text1="Full Stack" text2="Developer" />
          </motion.div>
          <motion.div
            initial={{ top: "78%", left: "20rem" }}
            whileInView={{ left: "-10%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
          </motion.div>
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            {!isSubmitted ? (
              <>
                <h2>Hire Me</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="user_name"
                    className="user"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    className="user"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    name="message"
                    className="user"
                    placeholder="Message"
                    required
                  />
                  <button className="c-button" type="submit">
                    Send
                  </button>
                </form>
              </>
            ) : (
              <h2>Thank You! We will get back to you soon.</h2>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Intro;
