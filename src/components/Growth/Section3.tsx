import React from "react";

const Section3 = () => {
  return (
    <section className="relative w-full block box-border py-20 px-[15px] md:px-20 text-center bg-primary pattern before:w-full mb-10">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full relative min-h-[1px] box-border float-left">
            <div className="w-full px-[15px] mb-[60px]">
              <h5 className="text-3xl pb-[30px] font-semibold text-white text-center">
                Successful companies of tomorrow are scaling up their A/B
                testing efforts today. Want to learn more?
              </h5>
              <button
                className="button-animation cursor-pointer bg-white text-[13px] font-medium font-poppins tracking-[1px] border-none rounded-[25px] py-[14px] px-[28px] text-primary text-center whitespace-nowrap align-middle"
                type="submit"
              >
                Tell me more
              </button>
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

export default Section3;
