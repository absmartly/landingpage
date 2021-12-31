import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Check from "../../assets/check";
import { SolutionProps } from "../../utils/types";
import { colors } from "../../utils/utils";

const Section5: FC<SolutionProps> = ({ title, details, image }) => {
  return (
    <div className="w-full min-h-screen relative block overflow-x-hidden pt-20 pb-[60px] bg-[#f7f7f7] md:pt-[60px] md:pb-[180px] lg:pt-[100px] custom:pt-[180px] custom:pb-20">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap items-center mx-[-15px]">
          {/* Picture */}
          <div className="float-left w-full lg:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full pb-10">
                <GatsbyImage
                  className="relative top-0 min-w-full lg:min-w-full max-w-full w-full align-middle border-none"
                  image={image}
                  alt="Home built solution"
                />
              </div>
            </div>
          </div>
          <div className="float-left w-full lg:w-1/2 relative text-left box-border self-center">
            <div className="w-full px-[15px] box-border">
              <h4 className="text-left font-work_sans text-[40px] font-bold text-primary mb-[35px] ml-0 relative">
                {title}
              </h4>
              {details.map((detail, index) => (
                <div key={index}>
                  <div className="flex items-center justify-start">
                    <div
                      className={`w-[35px] h-[35px] rounded-full bg-[${colors[index].bg}] flex items-center justify-center`}
                    >
                      <Check color={colors[index].color} />
                    </div>
                    <h4 className="text-left font-work_sans text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                      {detail.title}
                    </h4>
                  </div>
                  <div className="ml-14 mb-[30px]">
                    <p className="font-medium font-poppins text-[#535353]">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
