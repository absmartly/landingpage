import React, { FC, useState } from "react";
import { FAQProps } from "../../../utils/types";
import Accordion from "./Accordion";

const FAQ: FC<FAQProps> = ({ title, subTitle, list }) => {
  const [selectedItem1, setSelectedItem1] = useState<number | null>(0);
  const [selectedItem2, setSelectedItem2] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="relative w-full block overflow-x-hidden pt-20 pb-28 bg-white"
    >
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          {/* Heading */}
          <div className="float-left w-full text-left relative">
            <div className="w-full px-[15px] box-border">
              <div className="relative mb-[60px] text-center">
                <div className="absolute font-work_sans z-[1] -top-6 md:-top-[2.2rem] lg:-top-[60px] left-0 w-full text-center font-bold uppercase text-[50px] md:text-[70px] lg:text-[100px] opacity-10 text-primary">
                  {subTitle}
                </div>
                <h3 className="relative font-work_sans z-[2] w-full text-center text-[30px] font-bold mb-[0.8rem] uppercase text-[#323232]">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="float-left relative w-full md:w-1/2 text-left">
            <div className="w-full px-[15px] box-border">
              {list.slice(0, 3).map((item, index) => (
                <Accordion
                  id={index}
                  title={item.question}
                  content={item.answer}
                  selectedItem={selectedItem1}
                  setSelectedItem={setSelectedItem1}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="float-left relative w-full md:w-1/2 text-left">
            <div className="w-full px-[15px] box-border">
              {list.slice(3, 6).map((item, index) => (
                <Accordion
                  id={index}
                  title={item.question}
                  content={item.answer}
                  selectedItem={selectedItem2}
                  setSelectedItem={setSelectedItem2}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
