import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Section2 = () => {
  return (
    <section className="relative w-full block pt-5 pb-[120px] bg-[#f7f7f7]">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full maxmd:w-1/2 md:w-1/4 mb-[25px] float-left relative">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full block text-center mx-auto bg-white rounded-lg border-2 border-solid border-b-[#2ad8da] py-[25px] px-[15px] box-border">
                <StaticImage
                  className="w-[100px] h-[100px] object-cover align-middle text-center rounded-full border-[10px] border-solid border-[#d4f7f8] mb-6"
                  src="../../assets/users.png"
                  alt="Users"
                />
                <h5 className="mb-[0.8rem] text-[#212121] font-semibold text-center text-xl">
                  Unlimited users
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full maxmd:w-1/2 lg:w-1/4 mb-[25px] float-left relative">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full block text-center mx-auto bg-white rounded-lg border-2 border-solid border-b-[#f89291] py-[25px] px-[15px] box-border">
                <StaticImage
                  className="w-[100px] h-[100px] filter1 object-cover align-middle text-center rounded-full border-[10px] border-solid border-[#d4f7f8] mb-6"
                  src="../../assets/tests.png"
                  alt="Tests"
                />
                <h5 className="mb-[0.8rem] text-[#212121] font-semibold text-center text-xl">
                  Unlimited A/B tests
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full maxmd:w-1/2 md:w-1/4 mb-[25px] float-left relative">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full block text-center mx-auto bg-white rounded-lg border-2 border-solid border-b-[#51df65] py-[25px] px-[15px] box-border">
                <StaticImage
                  className="w-[100px] h-[100px] filter2 object-cover align-middle text-center rounded-full border-[10px] border-solid border-[#d4f7f8] mb-6"
                  src="../../assets/metrices.png"
                  alt="Metrices"
                />
                <h5 className="mb-[0.8rem] text-[#212121] font-semibold text-center text-xl">
                  Unlimited metrics
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full maxmd:w-1/2 md:w-1/4 mb-[25px] float-left relative">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full block text-center mx-auto bg-white rounded-lg border-2 border-solid border-b-[#ffaa52] py-[25px] px-[15px] box-border">
                <StaticImage
                  className="w-[100px] h-[100px] filter3 object-cover align-middle text-center rounded-full border-[10px] border-solid border-[#d4f7f8] mb-6"
                  src="../../assets/segments.png"
                  alt="Segments"
                />
                <h5 className="mb-[0.8rem] text-[#212121] font-semibold text-center text-xl">
                  Unlimited segments
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
