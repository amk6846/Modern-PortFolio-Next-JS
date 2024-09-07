import React from "react";
import { Magicbutton } from "./Magicbutton";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Last = () => {
  return (
    <main>
      <div id="contact" className="flex flex-col nokia:h-[80vh] items-center justify-center w-screen h-screen p-4">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold text-center">
          Ready to take your digital <br />{" "}
          <span className="">presence to the next level?</span>
        </h1>

        <p className="text-gray-400 mt-4 md:mt-6 font-semibold text-center">
          Reach out to me today and let's discuss how I can help you achieve
          your goals
        </p>

        <a href="https://github.com/amk6846">
          <Magicbutton title="Let's get in touch" />
        </a>
      </div>
      
      <div className="flex flex-col md:flex-row h-24 w-screen items-center justify-between px-4 py-2 ">
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h1 className="text-white font-normal text-sm md:text-base">Copyright© 2024</h1>
        </div>
        <div className="flex w-full md:w-1/2 justify-center md:justify-end space-x-2 mt-2 md:mt-0">
          <a href="https://github.com/amk6846">
            <div className="p-2 bg-gray-900 rounded-xl border-2 border-gray-800">
              <FaGithub size={"24px"} color="white" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/abdul-majid-a9a7a3a1/">
            <div className="p-2 bg-gray-900 rounded-xl border-2 border-gray-800">
              <CiLinkedin size={"24px"} color="white" />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Last;
