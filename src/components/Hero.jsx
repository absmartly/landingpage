import React from "react";
import Particles from "react-particles-js";

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-center bg-cover bg-tertiary min-h-[700px] h-screen relative w-full">
      <div className="absolute bottom-0 left-0 h-[5%] w-full bg-white z-[1]">
        <div className="bg-wave bg-repeat-x absolute top-[-100px] w-[6400px] h-[100px] animate-wave" />
        <div className="bg-wave bg-repeat-x absolute top-[-56px] w-[6400px] h-[100px] animate-wave2" />
      </div>
      <div className="absolute top-0 left-0 z-[1] w-full">
        <Particles
          height="100vh"
          params={{
            particles: {
              number: {
                value: 65,
              },
              size: {
                value: 4,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
