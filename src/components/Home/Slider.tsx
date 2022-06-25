import React, { FC, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { GatsbyImage } from "gatsby-plugin-image";
import { ExperimentationList } from "../..//utils/types";

interface SliderProps {
  list: ExperimentationList[];
}

const Slider: FC<SliderProps> = ({ list }) => {
  const [active, setActive] = useState<number>(0);

  function handleChange(index: number) {
    setActive(index);
  }

  return (
    <div className="mb-5">
      {/* Flex Container */}
      <div className="flex text-base">
        {/* Left COntainer */}
        <div
          className="hidden md:flex flex-col relative z-[3] overflow-hidden grow-0 shrink-0 basis-auto mt-0 
      mb-[5px] -mr-[1px] ml-o box-border"
        >
          <ul className="overflow-hidden md:grow p-0 mb-0 mr-0 mt-5 md:mt-11 -ml-[1px] list-none">
            {list.map((item, index) => (
              <li
                key={index}
                className={`block ml-1 border-r-2 border-solid border-[#d2d2d2] active:border-primary ${
                  active === index && "border-primary"
                }`}
              >
                <span
                  onClick={() => handleChange(index)}
                  className={`relative font-work_sans block no-underline link-animation shadow-none rounded-tl-[5px] 
                rounded-bl-[5px] py-[14px] px-5 box-border text-lg bg-white border-white font-semibold 
                text-right cursor-pointer
                 ${active === index ? "text-primary" : "text-[#333333]"}`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Container For Desktop*/}
        <div className="hidden md:flex flex-col grow shrink basis-0 min-w-0 relative box-border">
          <div className="rounded-md grow bg-white border-none block overflow-hidden max-h-screen">
            <SwipeableViews index={active}>
              {list.map((item, index) => (
                <div key={index} className=" block h-full overflow-y-hidden">
                  <div
                    className="block min-h-[10px] rounded-tl-none rounded-tr-none rounded-[5px] border-[#f0f0f0]
               border md:border-transparent border-solid box-content py-[14px] px-5 overflow-hidden transform
               translate3d div-animation text-left bg-white overflow-x-hidden"
                  >
                    {/* Image */}
                    <div className="relative max-w-[300px] float-left w-full">
                      <GatsbyImage
                        image={item.image.gatsbyImageData}
                        alt={item.image.title || item.image.file.fileName}
                        className="max-w-full w-full block align-middle border-none"
                      />
                    </div>
                    {/* Text */}
                    <div className="max-w-[60%] float-right mb-0">
                      <div className="block">
                        <h4 className="text-[1.7rem] font-work_sans font-semibold text-primary text-right mt-12">
                          {item.title}
                        </h4>
                        <p className="text-right font-work_sans text-base text-[#333333] mt-3 font-medium">
                          {item.description.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </SwipeableViews>
          </div>
        </div>

        {/* Right COntainer for Mobile */}
        <div className="block md:hidden float-left relative w-full md:w-1/2 text-left">
          <div className="w-full box-border">
            {list.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col break-words bg-clip-border bg-transparent border-none rounded-none mb-[15px]"
              >
                <div className="p-0 mb-0 bg-transparent border-b-0 rounded-tl-custom rounded-tr-custom break-words">
                  <div
                    className={`font-semibold font-work_sans text-base shadow-md shadow-[#00000014] border border-solid border-[#f0f0f0] 
                    relative w-full block py-3 px-6 transition-all duration-200 ease-linear bg-white text-[#212121]
                     cursor-pointer`}
                    onClick={() => handleChange(index)}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`${
                      active === index ? "max-h-[130vh]" : "max-h-0"
                    } break-words transform transition-all duration-200 ease-in-out overflow-hidden`}
                  >
                    <div className="bg-white grow shrink basis-auto">
                      <div className="leading-[26px] text-sm text-[#333333] font-medium mb-4 block">
                        <GatsbyImage
                          image={item.image.gatsbyImageData}
                          alt={item.image.title || item.image.file.fileName}
                          className="max-w-full xs:max-w-[200px] w-full float-left border-none"
                        />
                        <div className="max-w-full xs:max-w-[50%] w-full float-left xs:float-right my-0 py-0">
                          <div className="block mb-4 xs:mb-0">
                            <h4 className="text-[1.7rem] font-work_sans font-semibold text-primary xs:text-right xs:mt-12">
                              {item.title}
                            </h4>
                            <p className="text-left font-work_sans xs:text-right text-base text-[#333333] mt-3 font-medium">
                              {item.description.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
