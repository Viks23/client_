import React, { useState } from 'react';
import './navbar.css';
import Resume from '../../documents/CV_Vikas_Rai.pdf'

const Navbar = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="n-wrapper" id='Home'>
      <div className="n-left">
        <div className="n-name">UpSkill Mafia</div> 
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul className="n-ul" style={{listStyleType:"none"}}>
            <li className="n-item"><a href="#Home" style={{textDecoration:"none"}}>Home</a></li>
            <li className="n-item"><a href="#Experience" style={{textDecoration:"none"}}>About</a></li>
            <li className="n-item"><a href="#Services" style={{textDecoration:"none"}}>Services</a></li>
            <li className="n-item"><a href="#Contact" style={{textDecoration:"none"}}>Contact</a></li>
          </ul>
        </div>
        <button className="button n-button" onClick={handleResumeClick}>Resume Download</button>
        {/* <button className="button n-button">Log In</button> */}
      </div>

      {isResumeOpen && (
        <div className="resume-overlay" onClick={handleCloseResume}>
          <div className="resume-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-resume" onClick={handleCloseResume}>
              &times;
            </span>
            <embed src={Resume} type="application/pdf" width="100%" height="600px" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
