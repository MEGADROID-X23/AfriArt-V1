import React from "react";
import "./Footer.css";
import logo from "../../Assets/afriart_logo_white_text.svg";
// import paymentIcon from "../../Assets/paymentIcon.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer_left">
            <div className="footer_logo_container">
              <Link to="/" onClick={scrollToTop}>
                            <img src={logo} alt="" />
                          </Link>
            </div>

            <p>Celebrating and promoting Nigerian arts and artists Globally</p>
            <p>Address: 80 Olowora Rd, Olowora, Lagos 105102, Lagos</p>

            <div className="footer_address">
              <strong> info@lasop.net </strong>
              <strong> +234-702 571 3326 </strong>
            </div>

            {/* <div className="social_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div> */}

            <div className="social_links">
              <a 
      href="https://www.facebook.com/lasopdotnet"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit us on Facebook"
    >
      <FaFacebookF color="white"/>
              </a>
              <a 
      href="https://twitter.com/Lasopdotnet"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Twitter"
    >
      <FaXTwitter color="white" />
              </a>
              <a 
      href="https://www.instagram.com/lasopdotnet"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View our Instagram"
    >
      <FaInstagram color="white" />
    </a>
    <a 
      href="https://wa.me/+2347025713326"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Subscribe on YouTube"
    >
      <FaWhatsapp color="white" />
    </a>
    <a 
      href="https://linkedin.com/company/lasopdotnet"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit us on Pinterest"
    >
      <FaLinkedin color="white" />
    </a>
              </div>
          </div>

          <div className="footer_content">
            <h5>Company</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/about">Career</Link>
                </li>
                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Shop</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="https://afri-art-e-gifts.vercel.app/">E-Gifts</Link>
                </li>
                {/* <li>
                  <Link to="/shop">Kid's Gallery</Link>
                </li> */}
                <li>
                  <Link to="/">Men's Gallery</Link>
                </li>
                <li>
                  <Link to="/">Women's Gallery</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Help</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/contact">Customer Service</Link>
                </li>
                <li>
                  <Link to="/loginSignUp">My Account</Link>
                </li>
                <li>
                  <Link to="/contact">Find a Store</Link>
                </li>
                <li>
                  <Link to="/terms">Legal & Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="https://afri-art-e-gifts.vercel.app/">Gift Card</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <h5>Subscribe</h5>
            <p>
              Subscribe to get updates on new artworks and featured artists
            </p>

            <form onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Join</button>
            </form>

          </div>
        </div>
        <div className="footer_bottom">
          <p>
            © {getCurrentYear()} AfriArt. All Rights Reserved | Made By the{" "}
            <a
              href="https://lasop.net/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "orange", textDecoration: "none" }}
            >
              LASOP Team
            </a>{" "}
          
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
