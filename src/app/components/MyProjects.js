import React from "react";
import Card from "./Card";

const MyProjects = () => {
  return (
    <main>
      <div
        id="projects"
        className="min-h-[220vh] w-full md:w-[100%] lg:w-[100%] text-white"
      >
        <h1 className="font-extrabold text-5xl text-center">
          My <span className="text-purple-400">recent projects</span>
        </h1>

        <div className="flex flex-wrap justify-center p-4">
          <Card
            img="imh"
            head="AT-T-Website-Clone"
            para="This project is a comprehensive web page for AT&T Company USA, featuring an interactive navigation menu, promotional content, and detailed sections on various services like wireless plans, internet, TV, and phones, aimed at enhancing user experience and engagement."
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-2"
          />

          <Card
            img="imh4"
            head="Employee-Management-System"
            para="I developed an Employee Management System using Java and AWT, allowing users to add, update, delete, and display employee data. The system also includes a print functionality for easy printing of employee information."
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-2"
          />

          <Card
            img="hms1"
            head="Hospital management System"
            para="I created a website using HTML, CSS, and JavaScript, featuring a home page, navbar, about section, gallery, and register and login forms. While the forms are not functional, the project highlights my skills in front-end design and interactive elements."
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-2"
          />

          <Card
            img="bubble1"
            head="Bubble Game"
            para="I built a Bubble Game using HTML, CSS, and JavaScript. Players have 1 minute to hit target numbers, and each hit adds points to the score.Players must aim and shoot at bubbles with target numbers within 1 minute, and each successful hit increases their score."
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-2"
          />
        </div>
      </div>
    </main>
  );
};

export default MyProjects;
