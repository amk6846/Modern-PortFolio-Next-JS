"use client";
import React, { useEffect, useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { PinContainer } from "./ui/Pin";

const Card = ({ img, head, para }) => {
  const [isClient , setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  }, []);

  return (
    <div className="border-2  text-white bg-dark border-gray-800 transition-transform duration-500 hover:[transform:rotateX(45deg)] lg:w-1/3 md:w-1/2 sm:w-full mt-12 lg:ml-40 md:ml-20 sm:ml-0 p-3 rounded-3xl relative">
      <div className="image relative">
        <img
          src={`/images/${img}.jpg`}
          alt={head}
          width="450"
          height="120"
          className="rounded-t-3xl w-full"
        />
        <div className="absolute top-0 right-2 z-10">
          {isClient && <PinContainer 
          title="Github"
          href="https://github.com/amk6846"
          />}
        </div>

      </div>
      <div className="mt-4 font-bold text-3xl">{head}</div>
      <div className="mt-4 w-full font-semibold text-gray-400">{para}</div>
      <div className="flex mt-8">
        <div className=" bg-slate-800 p-1 rounded-full border-2 border-black-500">
          <RiNextjsFill size={"40px"} color="white" />
        </div>
        <div className="ml-[-8px] bg-slate-800 p-1 rounded-full border-2 border-black-600">
          <FaCss3  size={"40px"} color="white" />
        </div>
        <div className="ml-[-8px] bg-slate-800 p-1 rounded-full border-2 border-black-600">
          <DiMongodb size={"40px"} color="white" />
        </div>
        <div className="ml-[-8px] bg-slate-800 p-1 rounded-full border-2 border-black-600">
          <IoLogoJavascript size={"40px"} color="white" />
        </div>
        <div className="ml-[-8px] bg-slate-800 p-1 rounded-full border-2 border-black-600">
          <FaJava size={"40px"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
