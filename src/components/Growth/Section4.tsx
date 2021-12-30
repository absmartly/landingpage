import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Section4 = () => {
  return (
    <section className="relative w-full block overflow-x-hidden py-20">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full lg:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] box-border">
              <h4 className="text-left text-[40px] font-bold text-primary mb-[35px] ml-0 relative">
                No flickering, no lags
              </h4>
              <div className="mb-4">
                <p className="font-medium mb-4 text-[15px] text-left text-[#535353]">
                  Third-party platforms can result in performance issues like
                  flickering or lags. It's very difficult to experimenting if
                  the process harms some of your key conversion drivers — user
                  experience and page load times.
                </p>
                <p className="font-medium mb-4 text-[15px] text-left text-[#535353]">
                  A/B Smartly runs locally, eliminating costly user experience
                  issues.
                </p>
                <p className="font-medium text-[15px] text-left text-[#535353]">
                  Once A/B Smartly is deployed, your team is in control. The
                  data never leaves your data center and you can easily
                  integrate it with other internal tools you might have built.
                  Great for privacy, great for development flexibility.
                </p>
              </div>
            </div>
          </div>
          <div className="float-left w-full lg:w-1/2 relative text-left box-border self-center">
            <div className="w-full px-[15px] box-border">
              <div className="relative w-full">
                <StaticImage
                  className="w-full max-w-full align-middle block"
                  src="../../assets/section4.png"
                  alt="No flickering, no lags"
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
