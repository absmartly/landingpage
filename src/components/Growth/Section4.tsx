import React, { FC } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Section4Props } from "../../utils/types";

const Section4: FC<Section4Props> = ({ title, para1, para2, para3, image }) => {
  return (
    <section className="relative w-full block overflow-x-hidden py-20">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full lg:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] box-border">
              <h4 className="text-left text-[40px] font-bold text-primary mb-[35px] ml-0 relative">
                {title}
              </h4>
              <div className="mb-4">
                <p className="font-medium mb-4 text-[15px] text-left text-[#535353]">
                  {para1}
                </p>
                <p className="font-medium mb-4 text-[15px] text-left text-[#535353]">
                  {para2}
                </p>
                <p className="font-medium text-[15px] text-left text-[#535353]">
                  {para3}
                </p>
              </div>
            </div>
          </div>
          <div className="float-left w-full lg:w-1/2 relative text-left box-border self-center">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full">
                <GatsbyImage
                  className="w-full max-w-full align-middle block"
                  image={image}
                  alt={title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
