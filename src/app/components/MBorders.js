import React from "react";
import { Button } from "./ui/MovingBorders";

// Sample data for workExperience
const workExperience = [
  {
    id: 1,
    title: "Next JS Developer",
    desc: "A Next.js developer builds fast, scalable web applications with server-side rendering and static site generation using the Next.js framework.",
    thumbnail: "./images/1.png",
  },
  {
    id: 2,
    title: "Python Developer",
    desc: "I am a Python developer with a strong focus on creating efficient and scalable solutions. My expertise lies in writing clean, maintainable code for diverse applications.",
    thumbnail: "./images/3.png",
  },
  {
    id: 3,
    title: "Mongo Db Developer",
    desc: "I am a MongoDB developer specializing in building and optimizing scalable database solutions. I excel in managing complex data structures and ensuring high-performance queries.",
    thumbnail: "./images/2.png",
  },
  {
    id: 4,
    title: "Html,Css and their Frameworks",
    desc: "An HTML/CSS developer designs and styles responsive web pages using HTML and CSS, along with their frameworks, to create visually appealing and user-friendly interfaces.",
    thumbnail: "./images/4.png",
  },
  // Add more items as needed
];

const MBorders = () => {
  return (
    <main>
      <div
        id="Exp"
        className="p-8 text-white"
        style={{ height: "auto" }}
      >
        <h1 className="font-extrabold text-5xl text-center mb-10">
          My <span className="text-purple-400">work experience</span>
        </h1>

        <div className="w-full grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 12000}
              borderRadius="1.75rem"
              style={{
                background:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
              className="flex flex-col text-white dark:text-slate-500 dark:border-slate-600"
            >
              <div className="flex flex-col items-center p-3 py-6 gap-3">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-24 md:w-32"
                />
                <div className="text-center">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-slate-400 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MBorders;
