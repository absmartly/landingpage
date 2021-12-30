import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Check from "../assets/check";

const Solution = () => {
  return (
    <div className="w-full min-h-screen relative block overflow-x-hidden pt-20 pb-[60px] bg-white md:pt-[60px] md:pb-[180px] lg:pt-[100px] custom:pt-[180px] custom:pb-20">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        {/* Content COntainer */}
        <div className="flex flex-wrap mx-[-15px]">
          {/* Picture */}
          <div className="float-left w-full lg:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full pb-10">
                <StaticImage
                  className="relative lg:absolute top-0 min-w-full lg:min-w-[990px] max-w-full w-full left-0 lg:left-[-450px] align-middle border-none"
                  src="../assets/solution.png"
                  alt="Home built solution"
                />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="float-left w-full lg:w-1/2 relative text-left box-border self-center">
            <div className="w-full px-[15px] box-border">
              <h4 className="text-left text-[40px] font-bold text-primary mb-[35px] ml-0 relative">
                Like a home-built solution
              </h4>
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#2ad8da1a] flex items-center justify-center ">
                  <Check color="#2ad8da" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  Run it locally
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  The world’s first single-tenant/private cloud experimentation
                  platform. Like a home built solution.
                </p>
              </div>
              {/* 2nd */}
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#f443361a] flex items-center justify-center ">
                  <Check color="#F44336" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  Store the data anywhere
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  Multiple data sinks supported: Redshift, BigQuery, Snowflake,
                  Hadoop, S3, Apache Druid, ClickHouse and more to come.
                </p>
              </div>
              {/* 3rd */}
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#ff98001a] flex items-center justify-center ">
                  <Check color="#FF9800" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  Real-time reports
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  Sub-minute latency in the dashboards. Start one experiment now
                  and look at the data right away. Identify breakages quickly or
                  even have broken experiments being stopped automatically in
                  seconds.
                </p>
              </div>
              {/* 4th */}
              <div className="flex items-center justify-start">
                <div className="w-[35px] h-[35px] rounded-full bg-[#4caf501a] flex items-center justify-center ">
                  <Check color="#4caf50" />
                </div>
                <h4 className="text-left text-[1.2rem] font-semibold text-[#333333] relative ml-[23px]">
                  Rely on guardrail and debugging metrics
                </h4>
              </div>
              <div className="ml-14 mb-[30px]">
                <p className="font-medium text-[#535353]">
                  A/B Smartly automatically warns you about sample ratio
                  mismatches, novelty effects, trigger day effects, deeps or
                  spikes caused by robots/scrappers, etc. You can even add your
                  own custom guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
