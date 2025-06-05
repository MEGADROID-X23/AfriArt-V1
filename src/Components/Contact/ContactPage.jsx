import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.5433949896603!2d3.3727040510695074!3d6.636143346919725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91e03948cd71%3A0x2e0be200b973a83e!2sLagos%20School%20of%20Programming%20(LASOP)!5e0!3m2!1sen!2sng!4v1747086125777!5m2!1sen!2sng"            
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="AfriArt"
          ></iframe>
        </div>
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Center at OJodu-Berger</h3>
              <p>
                Address: 80 Olowora Rd, Olowora, Lagos 105102, Lagos
                <br /> Nigeria
              </p>
              <p>
                info@lasop.net
                <br />
                +234-702 571 3326
              </p>
            </div>
            {/* <div className="address">
              <h3>Center at Ikeja</h3>
              <p>
                27,Thomas Salako Street Ogba-Ikeja, Lagos.
                <br /> Nigeria
              </p>
              <p>
                info@lasop.net
                <br />
                +234-702 571 3326
              </p>
            </div> */}
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
