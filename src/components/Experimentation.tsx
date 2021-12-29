import React from "react";

const Experimentation = () => {
  return (
    <section className="relative w-full block overflow-x-hidden pt-20">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full relative box-border">
            <div className="w-full px-[15px] mb-[60px] box-border">
              <h3 className="text-[40px] font-bold text-primary mb-5 text-center">
                Democratize experimentation
              </h3>
              <div className="mb-9">
                <p className="text-center px-[140px] font-medium text-[#535353]">
                  Let your designers, engineers or complete product teams be in
                  control of A/B testing. With the config API even Product
                  Managers can make changes in experiments without development
                  resources.
                  <br />
                  Run tests across the entire infrastructure, from apps to
                  websites to email to ML models and beyond.
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
