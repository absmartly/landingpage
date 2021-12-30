import React, { FC } from "react";
import { ExperimentationProps } from "../utils/types";

const Experimentation: FC<ExperimentationProps> = ({ title, description }) => {
  return (
    <section
      id="experimentation"
      className="relative w-full block overflow-x-hidden pt-20"
    >
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full relative box-border">
            <div className="w-full px-[15px] mb-[60px] box-border">
              <h3 className="text-[40px] font-bold text-primary mb-5 text-center">
                {title}
              </h3>
              <div className="mb-9">
                <p className="text-center px-[140px] font-medium text-[#535353]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experimentation;
