import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Check from "../../assets/check";
import { FC } from "react";
import { SolutionProps } from "../../utils/types";
import { colors } from "../../utils/utils";

const Solution: FC<SolutionProps> = ({ title, details, image }) => {
  return (
    <div className="w-full min-h-screen relative block overflow-x-hidden pt-20 pb-[60px] bg-white md:pt-[60px] md:pb-[180px] lg:pt-[100px] custom:pt-[180px] custom:pb-20">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        {/* Content COntainer */}
        <div className="flex flex-wrap mx-[-15px]">
          {/* Picture */}
          <div className="float-left w-full lg:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full pb-10">
                <GatsbyImage
                  className="relative lg:absolute top-0 min-w-full lg:min-w-[990px] max-w-full w-full left-0 lg:left-[-450px] align-middle border-none"
                  image={image.gatsbyImageData}
                  alt={image.title || image.file.fileName}
                />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="float-left w-full lg:w-1/2 relative text-left box-border self-center">
            <div className="w-full px-[15px] box-border">
              <h4 className="text-left text-[40px] font-700 text-primary mb-[35px] ml-0 relative font-work_sans">
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
                    <h4 className="text-left text-[1.2rem] font-work_sans font-semibold text-[#333333] relative ml-[23px]">
                      {detail.title}
                    </h4>
                  </div>
                  <div className="ml-14 mb-[30px]">
                    <p className="font-medium text-[#535353] font-poppins">
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

export default Solution;
