import { FaStar } from 'react-icons/fa'; // Import the star icon from react-icons
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const testimonials = [
  {
    name: "Next js + tailwind",
    quote:
      "Abdul Majid excels in Next.js, delivering fast and efficient web applications with ease. His expertise in server-side rendering and static site generation is impressive, consistently resulting in high-performance solutions.",
    title: Array(5).fill(<FaStar className="text-yellow-500 mx-0.5 inline" />), // Display stars in a single line with yellow color
  },
  {
    name: "React js + tailwind",
    quote:
      "Abdul Majid excels in React, delivering dynamic and responsive user interfaces with remarkable skill. His expertise in building seamless, high-performance applications is evident in every project. His ability to solve complex problems efficiently makes him a standout developer. Working with Abdul has been a great experience, and his React skills are top-notch.",
    title: Array(5).fill(<FaStar className="text-yellow-500 mx-0.5 inline" />), // Display stars in a single line with yellow color
  },
  {
    name: "Javascript + Html + Css",
    quote:
      "Abdul Majid shows exceptional talent in HTML, CSS, and JavaScript, creating visually appealing and highly functional web designs. His meticulous attention to detail and ability to bring designs to life with clean, efficient code is impressive. Abdul's skill set ensures a polished and professional end result in every project",
    title: Array(5).fill(<FaStar className="text-yellow-500 mx-0.5 inline" />), // Display stars in a single line with yellow color
  },
];

const MCards = () => {
  return (
    <main>
      <div
        id="testimonials"
        className="p-3 mx-auto lg:h-[600px] md:h-[500px] sm:h-[400px] h-auto lg:w-[100vw] md:w-[100vw] sm:w-[100vw] w-full text-white flex flex-col items-center"
      >
        <h1 className="font-extrabold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center mb-6">
          Kind words from{" "}
          <span className="text-purple-400">Satisfied clients</span>
        </h1>
        <div className="flex flex-col items-center mt-4 w-full">
          <div className="flex flex-col items-center relative overflow-hidden w-full">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MCards;