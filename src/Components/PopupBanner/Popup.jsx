import React, { useState } from "react";
import "./Popup.css";

import popupImg from "../../Assets/african tribe woman.jpeg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className={`popup-content ${fadeOut ? "fade-out" : ""}`}>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
          <div className="popup-left">
            <img src={popupImg} alt="Newsletter" />
          </div>
          <div className="popup-right">
            <h2>Sign Up to Our Newsletter</h2>
            <p>
              Greetings and welcome to AfriArt. Kindly subscribe to get updates on new artworks and featured artists.
            </p>
            <form>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">JOIN</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
