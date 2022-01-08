import React, { FC } from "react";

interface IHeader {
  title: string;
}

const Header: FC<IHeader> = ({ title }) => {
  return (
    <section className="pt-[150px] pb-[70px] bg-blog bg-center">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full md:w-1/2 relative text-left box-border">
            <h1
              className="text-white font-poppins tracking-[5px] uppercase text-2xl font-normal text-left mb-5 
            p-[10px]"
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
