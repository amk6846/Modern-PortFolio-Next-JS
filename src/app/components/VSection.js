import React from 'react';

const VSection = () => {
  return (
    <main>
      <div id="work" className="h-[110vh] nokia:min-h-[60vh] w-full text-white">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">
            My <span className="text-purple-400">Work!</span>
          </h1>
          <video className="h-auto w-full sm:w-10/12 md:w-8/12 lg:w-7/12 mt-10 md:mt-20" src="videos/Final.mp4" autoPlay controls></video>
        </div>
      </div>
    </main>
  );
};

export default VSection;
