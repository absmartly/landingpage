import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Section6 = () => {
  return (
    <section className="relative w-full block box-border py-36 bg-blend-soft-light bg-center overflow-hidden px-[15px] md:px-20 text-center bg-primary pattern before:w-1/2 mb-10">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full md:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] mb-[60px] box-border">
              <div className="py-[50px] lg:pr-[50px] pl-0">
                <h5 className="text-xl font-semibold text-white mb-[25px] text-left leading-8">
                  Don’t want to use a third party platform that you don’t
                  control? Get an in-house solution without having to build it
                  or maintain it yourself.
                </h5>
              </div>
            </div>
          </div>
          <div className="float-left w-full md:w-1/2 relative text-left box-border self-center">
            <div className="w-full px-[15px] box-border">
              <div className="pb-[50px] lg:pr-[50px]">
                <div className="relative w-full">
                  <StaticImage
                    className="relative md:absolute md:-top-40 lg:-top-[120px] min-w-full md:min-w-[990px] max-w-full w-full align-middle border-none"
                    src="../../assets/section6.png"
                    alt="Section6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute max-w-[100vw] bottom-0 left-0 h-[5%] w-full bg-white z-[1] overflow-x-clip">
        <div className="bg-wave bg-repeat-x absolute top-[-100px] w-[6400px] h-[100px] animate-wave" />
        <div className="bg-wave bg-repeat-x absolute top-[-56px] w-[6400px] h-[80px] animate-wave2" />
      </div>
    </section>
  );
};

export default Section6;
