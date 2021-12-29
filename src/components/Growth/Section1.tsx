import React from "react";

const Section1 = () => {
  return (
    <section className="relative block w-full min-h-[300px] pt-[60px] lg:pt-[80px] bg-[#f7f7f7] overflow-x-hidden">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full text-left">
            <div className="w-full px-[15px] box-border">
              <div className="block">
                <div className="relative mb-[60px] text-center text-primary">
                  <div className="absolute z-[1] -top-6 md:-top-[2.2rem] lg:-top-[60px] left-0 w-full text-center font-bold uppercase text-[50px] md:text-[70px] lg:text-[100px] opacity-10">
                    Growth
                  </div>
                  <h3 className="relative z-[2] w-full text-center text-[40px] font-bold mb-[0.8rem]">
                    Unlimited potential for growth
                  </h3>
                  <p className="relative text-[17px] font-normal text-[#444444] w-full max-w-[580px] mx-auto pt-[10px] text-center">
                    Run thousands of simultaneous A/B tests across your entire
                    infrastructure with reliable results. A/B Smartly helps you1
                    plan to avoid experiment interactions and detects
                    interactions for you when they happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
