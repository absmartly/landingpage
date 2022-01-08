import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Section6Props } from "../../../utils/types";

const Section6: FC<Section6Props> = ({ description, image }) => {
  return (
    <section className="relative w-full md:max-h-[75vh] lg:max-h-[65vh] block py-28 bg-blend-soft-light bg-center overflow-hidden px-[15px] md:px-20 text-center bg-primary pattern">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full md:h-80 md:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] mb-[60px] box-border">
              <div className="py-[50px] lg:pr-[50px] pl-0">
                <h5 className="text-xl font-work_sans font-semibold text-white mb-[25px] text-left leading-8">
                  {description}
                </h5>
              </div>
            </div>
          </div>
          <div className="float-left w-full md:w-1/2 relative text-left box-border self-center">
            <div className="w-full px-[15px] box-border">
              <div className="pb-[50px] lg:pr-[50px]">
                <div className="relative w-full">
                  <GatsbyImage
                    className="relative md:absolute md:-top-[50px] min-w-full md:min-w-[990px] max-w-full w-full align-middle border-none"
                    image={image}
                    alt={description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 h-[5%] w-full bg-white z-[2] overflow-x-clip">
        <div className="bg-wave bg-repeat-x absolute -top-[100px] w-[6400px] h-[100px] animate-wave" />
        <div className="bg-wave bg-repeat-x absolute -top-[56px] w-[6400px] h-[100px] animate-wave2" />
      </div>
    </section>
  );
};

export default Section6;
