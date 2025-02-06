import React from 'react';
import "./footer.css";
import Wave from "../../img/wave.png";


const Footer = () => {
  return (
    <>
      <div className="footer" id='Footer'>
      <img src={Wave} alt="" style={{ width: "100%" ,height: "10vh"}} />
      <div className="f-content">
        <span>info@Vikas.com</span>
        <div className="f-icons">
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;

