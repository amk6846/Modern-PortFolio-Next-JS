import { Magicbutton } from "./Magicbutton";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { IoCopyOutline } from "react-icons/io5";

const ASection = () => {
  return (
    <main>
      <div
        id="about"
        className="flex flex-wrap w-screen lg-max:flex-col"
      >
        {/* Image Container */}
        <div className="lg-max:w-full lg-max:p-4">
          <img
            src="images/imga.PNG"
            alt="zxc"
            className="w-fit h-fit ml-10 border-2 border-gray-800 rounded-2xl mr-5 lg-max:w-full lg-max:h-auto lg-max:ml-0 lg-max:mr-0"
          />
        </div>

        {/* First Box */}
        <div className="h-auto ml-10 lg-max:ml-0 lg-max:w-full nokia:text-md ">
          <div className="box1 border-2 border-gray-800 p-8 rounded-2xl min-w-max h-44 transition-transform duration-300 hover:scale-90 lg-max:p-4 lg-max:w-full lg-max:text-center">
            <span className="text-white font-bold  text-center">
              I'm very flexible with time zone communications
            </span>
          </div>

          {/* Tech Stack Box */}
          <div className="mt-3 w-full transition-transform duration-300 hover:scale-90 lg-max:w-full lg-max:mt-4">
            <div className="flex font-normal nokia:h-[200px] text-white border-2 border-gray-800 p-8 rounded-2xl h-44 lg-max:flex-col lg-max:p-4">
              <div className="w-2/4 lg-max:w-full lg-max:text-center nokia:m-2px">
                <p className="font-extralight">I constantly try to improve</p>
                <h1 className="font-extrabold nokia:font-normal text-4xl lg-max:text-3xl">
                  My tech stack
                </h1>
              </div>
              <div className="lg-max:hidden"></div>
              <div className="w-1/4 font-bold leading-10 lg-max:w-full lg-max:flex lg-max:flex-wrap lg-max:justify-around lg-max:mt-4">
                <h2 className="bg-white text-black nokia:rounded-sm rounded-2xl m-1 text-center transition-transform duration-300 hover:scale-110">
                  Python
                </h2>
                <h2 className="bg-white text-black rounded-2xl nokia:rounded-sm m-1 text-center transition-transform duration-300 hover:scale-110">
                  C++
                </h2>
                <h2 className="bg-white text-black rounded-2xl nokia:rounded-md m-1 text-center transition-transform duration-300 hover:scale-110">
                  React js
                </h2>
              </div>
              <div className="leading-10 font-bold lg-max:w-full lg-max:flex lg-max:flex-wrap lg-max:justify-around">
                <h2 className="bg-white text-black rounded-2xl nokia:rounded-md m-1 text-center transition-transform duration-300 hover:scale-110">
                  Node js
                </h2>
                <h2 className="bg-white text-black rounded-2xl nokia:rounded-md m-1 text-center transition-transform duration-300 hover:scale-110">
                  Next js
                </h2>
                <h2 className="bg-white text-black rounded-2xl nokia:rounded-md m-1 text-center transition-transform duration-300 hover:scale-110">
                  Mongo db
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col w-[50%] pt-10 mt-8 lg-max:w-full lg-max:pt-0 lg-max:mt-4">
          <div className="h-[520px] flex flex-col  lg-max:h-auto">
            <div className="ml-10 box1 border-2 border-gray-800 p-8 rounded-2xl transition-transform duration-300 hover:scale-90 lg-max:ml-0 lg-max:w-full lg-max:p-4">
              <h1 className="text-white font-bold text-center w-fit text-3xl pt-4 lg-max:text-2xl">
                Tech enthusiast with a passion for development.
              </h1>
            </div>

            <div className="mt-10 w-[80%] ml-20 relative lg-max:mt-4 lg-max:w-full lg-max:ml-0">
              <div className="w-full  nokia:ml-2 rounded-3xl h-[250px] overflow-hidden border-2">
                <BackgroundGradientAnimation>
                  <div className="absolute left-0 top-0 z-50 border-2 border-gray-800 flex items-center justify-center text-white font-bold" />
                </BackgroundGradientAnimation>
                <div className="items absolute top-8 left-0 right-0 text-white z-10 flex flex-col items-center p-8">
                  <h1 className="font-normal text-2xl lg-max:text-xl">
                    Do you want to start a project together?
                  </h1>
                  <Magicbutton
                    title={"Copy My Email"}
                    icons={<IoCopyOutline />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center w-[50%] p-8 lg-max:w-full lg-max:mt-4">
          <div className="border-2 border-gray-800 p-6 rounded-2xl h-[450px] flex flex-col justify-center relative transition-transform duration-300 hover:scale-90 lg-max:w-full lg-max:h-auto lg-max:p-4">
            <div className="absolute top-5 lg-max:hidden  right-0 overflow-hidden pointer-events-none lg-max:top-0 lg-max:right-0">
              <img
                src="./images/b5.png"
                alt="#"
                className="w-[400px] h-auto lg-max:w-full"
              />
            </div>

            <div className="p font-extralight text-white mt-8 lg-max:mt-4">
              The Inside Scoop
            </div>
            <div className="font-extrabold nokia:font-normal text-4xl text-white mt-4 lg-max:text-3xl">
              Proven track record of implementing scalable and reliable
              solutions.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ASection;