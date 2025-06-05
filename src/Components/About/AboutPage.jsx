import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/village.jpg";
import about2 from "../../Assets/About/Lasop.png";

import Services from "../../Components/Home/Services/Services";

// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Autoplay } from "swiper/modules";

// import brand1 from "../../Assets/Brands/brand1.png";
// import brand2 from "../../Assets/Brands/brand2.png";
// import brand3 from "../../Assets/Brands/brand3.png";
// import brand4 from "../../Assets/Brands/brand4.png";
// import brand5 from "../../Assets/Brands/brand5.png";
// import brand6 from "../../Assets/Brands/brand6.png";
// import brand7 from "../../Assets/Brands/brand7.png";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About AfriArt</h2>
        <img src={about1} alt="" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <h4>
            Our African marketplace website is an e-commerce platform that connects African businesses, artisans, and entrepreneurs with a global audience. We aim to provide a one-stop online marketplace for African-made arts and crafts.
          </h4>
          <p>
            
          </p>
          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                To empower Africans by providing digital platform that increase visibility, drive sales, and promotes African culture and innovation globally.
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
                To become the largest and most trusted online marketplace for African arts and crafts, supporting economic growth, job creation, cultural appreciation and connecting artists and buyers from around the world.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about2} alt="" />
            </div>
            <div className="textContent">
              <h5>The Company</h5>
              <p>
                Our mission is to provide every student with a platform to refine his or her skills and make a mark in the computer literate world. 
                To sharpen their skills to master new technologies and establish themselves with the goal of Bringing People and Computers Together Successfully, and to meet the augmenting needs of the technology-driven global society.
                LASOP looks forward to be a recognized Model Computer Programming Institute in the World in meeting the prevailing needs of technical manpower through qualitative, effective and resourceful training..
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      {/* <div className="companyPartners">
        <h5>Company Partners</h5>
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </>
  );
};

export default AboutPage;
