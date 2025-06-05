import React from "react";
import "./Services.css";

import { FaTruck } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="serviceBox">
          <FaTruck size={50} style={{ marginBottom: "20px" }} />
          <h3>Fast And Safe Delivery</h3>
          <p>Art is carefully packed and shipped worldwide</p>
        </div>
        <div className="serviceBox">
          <FaBagShopping size={50} style={{ marginBottom: "20px" }} />
          <h3>Purchase Securely</h3>
          <p>Buyers browse and purchase with confidence</p>
        </div>
        <div className="serviceBox">
          <FaPaintbrush size={50} style={{ marginBottom: "20px" }} />
          <h3>Create and Upload</h3>
          <p>Artists showcase their work and set their prices</p>
        </div>
      </div>
    </>
  );
};

export default Services;
