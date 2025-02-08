import React, { useState, useRef } from "react";
import "./contact.css";
import axios from 'axios';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message')
    };

    axios.post('http://localhost:8000/send-email', data)
      .then(response => {
        setIsSubmitted(true);
        // Reset form fields
        formRef.current.reset();
        setTimeout(() => {
          setIsSubmitted(false);
          window.location.href = "#Home"; // Redirect to home page
        }, 3000); // Display thank you message for 3 seconds
      })
      .catch(error => {
        console.error('There was an error sending the email!', error);
        console.error('Error response:', error.response);
      });
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="contact-form" id="Contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span>Get in Touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        
        {/* right side form */}
        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
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
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-popup" onClick={closePopup}>
              &times;
            </span>
            <h2>Your message has been sent.</h2>
            <p>We will get back to you soon.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
