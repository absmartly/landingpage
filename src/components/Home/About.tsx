import React, { FC } from "react";
import { Link } from "react-scroll";
import { AboutProps } from "../../utils/types";

const About: FC<AboutProps> = ({ title, para1, para2, para3, para4 }) => {
  return (
    <section
      id="about"
      className="pt-20 pb-[180px] xs:bg-about bg-[#3933d1] xs:bg-primary bg-no-repeat bg-position bg-blend-soft-light bg-fixed
       relative overflow-hidden w-full block pattern before:w-1/2"
    >
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full md:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] mb-[60px] box-border">
              <h4 className="text-[40px] font-work_sans font-bold mb-5 text-white">
                {title}
              </h4>
              <div className="mb-4">
                <p className="text-white font-poppins font-medium mb-4">
                  {para1}
                </p>
                <p className="text-white font-poppins font-medium mb-4">
                  {para2}
                </p>
                <p className="text-white font-poppins font-medium mb-4">
                  {para3}
                </p>
                <p className="text-white font-poppins font-medium mb-4">
                  {para4}
                </p>
                <p className="text-white font-poppins font-medium mb-4">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="contact-us"
                    className="underline"
                  >
                    Contact us today
                  </Link>
                </p>
              </div>
              <Link
                to="/"
                className="button-animation cursor-pointer bg-white text-[13px] font-medium font-poppins tracking-[1px] border-none rounded-[25px] py-3 px-7 text-primary text-center whitespace-nowrap align-middle"
                type="submit"
              >
                Tell me more
              </Link>
            </div>
          </div>
          <div className="float-left w-full md:w-[41%] ml-[9%] relative text-left box-border"></div>
        </div>
      </div>
      <div className="hidden md:block absolute max-w-[100vw] bottom-0 left-0 h-[5%] w-full bg-white z-[1] overflow-x-clip">
        <div className="bg-wave bg-repeat-x absolute -top-[100px] w-[6400px] h-[100px] animate-wave" />
        <div className="bg-wave bg-repeat-x absolute -top-[56px] w-[6400px] h-[100px] animate-wave2" />
      </div>
    </section>
  );
};

export default About;
