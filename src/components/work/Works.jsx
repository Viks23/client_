import React, { useState } from "react";
import "./works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);

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
      window.location.href = "#Works"; // Redirect to works section
    }, 3000); // Display thank you message for 3 seconds
  };

  return (
    <>
        <div className="works" id="Works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>

          <button className="button s-button" onClick={handleHireMeClick}>Hire Me</button>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* Right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
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
                  />
                  <input
                    type="email"
                    name="user_email"
                    className="user"
                    placeholder="Email"
                  />
                  <textarea
                    name="message"
                    className="user"
                    placeholder="Message"
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

export default Works;
