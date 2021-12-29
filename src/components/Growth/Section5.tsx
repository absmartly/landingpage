import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { CheckCircleIcon } from "@heroicons/react/outline";

const Section5 = () => {
  return (
    <div className="w-full min-h-screen relative block overflow-x-hidden pt-20 pb-[60px] bg-[#f7f7f7] md:pt-[60px] md:pb-[180px] lg:pt-[100px] custom:pt-[180px] custom:pb-20">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
        <div className="flex flex-wrap items-center mx-[-15px]">
          {/* Picture */}
          <div className="float-left w-full lg:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full pb-10">
                <StaticImage
                  className="relative top-0 min-w-full lg:min-w-full max-w-full w-full align-middle border-none"
                  src="../../assets/section5.png"
                  alt="Home built solution"
                />
              </div>
            </div>
          </div>
          <div className="float-left w-full lg:w-1/2 relative text-left box-border self-center">
            <div className="w-full px-[15px] box-border">
              <h4 className="text-left text-[40px] font-bold text-primary mb-[35px] ml-0 relative">
                Make better decisions at every level
              </h4>
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#2ad8da1a] flex items-center justify-center ">
                  <CheckCircleIcon className="w-[20px] h-[20px] text-[#2ad8da]" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  Performance
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  See the impact of your experiments on page load, query, and
                  render times.
                </p>
              </div>
              {/* 2nd */}
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#f443361a] flex items-center justify-center ">
                  <CheckCircleIcon className="w-[20px] h-[20px] text-[#F44336]" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  Bye-bye bots
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  Filter out bots and abnormal users to only measure real-life
                  humans.
                </p>
              </div>
              {/* 3rd */}
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#ff98001a] flex items-center justify-center ">
                  <CheckCircleIcon className="w-[20px] h-[20px] text-[#FF9800]" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  Build loyalty
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  Measure the impact on returning visitors. Look at longer-term
                  effects, even months after the decision making.
                </p>
              </div>
              {/* 4th */}
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#4caf501a] flex items-center justify-center ">
                  <CheckCircleIcon className="w-[20px] h-[20px] text-[#4caf50]" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  Meaningful metrics
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  See how much users spend, how long they stay on your site or
                  how many times they buy.
                </p>
              </div>
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#fb5c921a] flex items-center justify-center ">
                  <CheckCircleIcon className="w-[20px] h-[20px] text-[#fb5c92]" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  SEO
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  Find out the impact that A/B tests have on your organic
                  traffic. Run SEO experiments to bring in more free traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
