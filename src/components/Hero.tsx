import React, { FC } from "react";
import Particles from "react-particles-js";
import { HeroProps } from "../utils/types";

const Hero: FC<HeroProps> = ({ title, description }) => {
  return (
    <section
      id="contact-us"
      className="bg-hero bg-no-repeat bg-center bg-cover bg-tertiary min-h-[700px] h-auto pt-20 pb-[180px] lg:h-[100vh] relative w-full block"
    >
      {/* COntent */}
      <div className="relative z-[2] w-full top-auto left-auto translate-y-0 lg:top-1/2 lg:left-0 lg:-translate-y-1/2 h-auto">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
          {/* Actual Container */}
          <div className="flex flex-wrap mx-[-15px]">
            {/* Text Container */}
            <div className="float-left w-full lg:w-1/2 relative min-h-[1px] z-10 text-left self-center">
              <div className="w-full px-[15px] box-border">
                <h2 className="text-5xl text-white text-center lg:text-left font-semibold font-sans">
                  {title}
                </h2>
                <div className="mt-4 mb-6 pb-4 font-normal">
                  <p className="text-lg lg:pr-[150px] tracking-[1px] font-poppins text-white text-center xs:text-left">
                    {description}
                  </p>
                </div>
              </div>
            </div>
            {/* Form Container */}
            <div className="w-full lg:w-1/2 mt-[10px] lg:mt-[250px] md:px-[60px] float-left relative box-border">
              <div className="w-full px-[15px] box-border">
                <form className="py-5 px-[10px] bg-white rounded-lg shadow-form">
                  {/* Form Header */}
                  <div className="box-border">
                    <div className="grow-0 shrink-0 basis-full px-[15px] mb-[25px]">
                      <h5 className="text-2xl mb-[5px] text-primary font-semibold">
                        Talk to us
                      </h5>
                      <h6 className="text-sm text-[#808080] font-medium mb-4">
                        Want more info or talk about partnerships?
                      </h6>
                    </div>
                  </div>
                  {/* Form Inputs */}
                  <div className="box-border">
                    {/* Inputs COntainer */}
                    <div className="shrink-0 grow-0 basis-full w-full px-[15px] font-poppins">
                      {/* Name */}
                      <div className="mb-4">
                        <span className="relative">
                          <input
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary"
                            type="text"
                            placeholder="NAME"
                          />
                        </span>
                      </div>
                      {/* Bussiness Name */}
                      <div className="mb-4">
                        <span className="relative">
                          <input
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary"
                            type="text"
                            placeholder="BUSINESS NAME"
                          />
                        </span>
                      </div>
                      {/* Industry */}
                      <div className="mb-4">
                        <span className="relative">
                          <input
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary"
                            type="text"
                            placeholder="INDUSTRY"
                          />
                        </span>
                      </div>
                      {/* Email */}
                      <div className="mb-4">
                        <span className="relative">
                          <input
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary"
                            type="email"
                            placeholder="EMAIL"
                          />
                        </span>
                      </div>
                      {/* Message */}
                      <div className="mb-4">
                        <span className="relative">
                          <textarea
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary overflow-auto resize-y"
                            rows={4}
                            placeholder="ANYTHING YOU'D LIKE TO KNOW MORE ABOUT?"
                          />
                        </span>
                      </div>
                    </div>
                    {/* Button COntainer */}
                    <div className="shrink-0 grow-0 basis-full w-full px-[15px]">
                      <button
                        className="button-animation cursor-pointer bg-primary text-[13px] font-medium font-poppins tracking-[1px] border-none rounded-[25px] py-[12px] px-[28px] text-white text-center whitespace-nowrap align-middle"
                        type="submit"
                      >
                        Tell me more
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Waves */}
      <div className="hidden md:block absolute max-w-[100vw] bottom-0 left-0 h-[5%] w-full bg-white z-[1] overflow-x-clip">
        <div className="bg-wave bg-repeat-x absolute top-[-100px] w-[6400px] h-[100px] animate-wave" />
        <div className="bg-wave bg-repeat-x absolute top-[-56px] w-[6400px] h-[100px] animate-wave2" />
      </div>
      {/* Particels */}
      <div className="absolute top-0 left-0 z-[1] w-full h-[calc(100%-100px)]">
        <Particles
          className="h-full"
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
    </section>
  );
};

export default Hero;
