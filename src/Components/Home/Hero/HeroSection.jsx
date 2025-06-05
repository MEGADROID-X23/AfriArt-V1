import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./HeroSection.css";
import { Model } from "../../Model/Model";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [tshirtColor, setTshirtColor] = useState("");

  const changeColor = (color) => {
    setTshirtColor(color);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="heroMain">
        <div className="sectionleft">
          {/* <p>New Masterpiece</p> */}
          <h1>Welcome to AfriArt</h1>
          <span>Discover Authentic African Art & Culture by exploring a curated collection of contemporary and traditional African artworks from talented artists across the nation.</span>
          <span>Explore the concept of 3D painting by interacting with the T-shirt and color palette.</span>
        </div>
        <div className="sectionright">
          <Canvas
            className="canvasModel"
            camera={{ position: [0, 5, 15], fov: 50 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={2.5}
              color={"white"}
            />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minAzimuthAngle={-Infinity}
              maxAzimuthAngle={Infinity}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />

            <Model color={tshirtColor} />
          </Canvas>
          <div className="heroColorBtn">
            <button
              onClick={() => changeColor("red")}
              style={{ backgroundColor: "red" }}
            ></button>
            <button
              onClick={() => changeColor("orange")}
              style={{ backgroundColor: "orange" }}
            ></button>
            <button
              onClick={() => changeColor("yellow")}
              style={{ backgroundColor: "yellow" }}
            ></button>
            <button
              onClick={() => changeColor("green")}
              style={{ backgroundColor: "green" }}
            ></button>
            <button
              onClick={() => changeColor("blue")}
              style={{ backgroundColor: "blue" }}
            ></button>
            <button
              onClick={() => changeColor("indigo")}
              style={{ backgroundColor: "indigo" }}
            ></button>
            <button
              onClick={() => changeColor("violet")}
              style={{ backgroundColor: "violet" }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
