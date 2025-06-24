
import React, { useState } from "react";
import { useForm } from "@formspree/react";
import "./ContactPage.css";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("myzjnavk");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
        case "whatsapp":
        setWhatsapp(value);
      case "message":
        setMessage(value);
        break;
    }
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.5433949896603!2d3.3727040510695074!3d6.636143346919725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91e03948cd71%0A0x2e0be200b973a83e!2sLagos%20School%20of%20Programming%20(LASOP)!5e0!3m2!1sen!2sng!4v1747086125777!5m2!1sen!2sng"
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
                Address: 86 Olowora Rd, Olowora, Lagos 105102,
                <br /> Nigeria
              </p>
              <p>
                info@lasop.net
                <br />
                +234-702 571 3326
              </p>
            </div>
            <div className="address">
              <h3>Center at Lekki Phase 1</h3>
              <p>
                Address: 24B Bashorun Okusanya Street, Off, Admiralty Way, Admiralty Rd, Lekki Phase 1, Lagos 106104,
                <br /> Nigeria
              </p>
              <p>
                info@lasop.net
                <br />
                +234-702 571 3326
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name *"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email address *"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="whatsapp"
                value={whatsapp}
                placeholder="WhatsApp Number *"
                onChange={handleChange}
                required
              />
              <textarea
                rows={10}
                cols={40}
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={handleChange}
              />
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
              {state.succeeded && (
                <p className="success-message">
                  Thank you for contacting us! We'll get back to you soon.
                </p>
              )}
              {state.errors?.length > 0 && (
                <p className="error-message">
                  There was an error submitting the form. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
