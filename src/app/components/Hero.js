"use client";
import React, { useEffect, useState } from "react";
import { Magicbutton } from "./Magicbutton";
import FloatingNavbar from "./FloatingNavbar";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimate(true);
  }, []); // This will ensure the animation happens when the component mounts

  return (
    <main>
      <div className="flex flex-col w-screen h-screen nokia:h-[100vh] items-center justify-center text-teal-50 px-4">
        {/* SpotLight Code */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] nokia:w-[20vw]" fill="blue" />

        {/* Navbar Code */}
        <div className="absolute top-0 w-full">
          <FloatingNavbar />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center mt-8 text-center">
          <h1
            className={`${
              animate ? "animate-slideIn" : ""
            } font-bold text-3xl md:text-4xl lg:text-5xl`}
          >
            Crafting dynamic web
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mt-2">
            experience <span className="text-purple-400">with AI.</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4">
            Hi, I'm{" "}
            <span className="text-green-300 font-bold ">Abdul Majid</span>, a
            Frontend Web Developer based in Pakistan.
          </h2>
        </div>

        {/* Button Section */}
        <div className="mt-8">
          <a href="#about">
            <Magicbutton title="Show My Work" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
