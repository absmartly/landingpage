import { Link } from "gatsby";
import React, { FC } from "react";
import { Section3Props } from "../../utils/types";

const Section3: FC<Section3Props> = ({ banner }) => {
  return (
    <section className="relative w-full block box-border py-20 px-[15px] md:px-20 text-center bg-primary pattern before:w-full mb-10">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full relative min-h-[1px] box-border float-left">
            <div className="w-full px-[15px] mb-[60px]">
              <h5 className="text-3xl font-work_sans pb-[30px] font-semibold text-white text-center">
                {banner}
              </h5>
              <Link
                to="/"
                className="button-animation cursor-pointer bg-white text-[13px] font-medium font-poppins tracking-[1px] border-none rounded-[25px] py-3 px-7 text-primary text-center whitespace-nowrap align-middle"
                type="submit"
              >
                Tell me more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 h-[5%] w-full bg-white z-[1] overflow-x-clip">
        <div className="bg-wave bg-repeat-x absolute -top-[100px] w-[6400px] h-[100px] animate-wave" />
        <div className="bg-wave bg-repeat-x absolute -top-[56px] w-[6400px] h-[100px] animate-wave2" />
      </div>
    </section>
  );
};

export default Section3;
