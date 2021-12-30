import React, { useState } from "react";
import Accordion from "./Accordion";

const data = [
  {
    title: "Who is AB Smartly?",
    content:
      "You are already doing A/B testing but have realized that the A/B testing tools you’re using aren’t enough for what you need. Maybe you’re on the fence about building an internal experimentation platform yourself, but want to make sure you get it right. A/B Smartly is flexible enough to integrate with existent event streams and data warehouses and all your internal platforms.",
  },
  {
    title: "Who is AB Smartly?",
    content:
      "You are already doing A/B testing but have realized that the A/B testing tools you’re using aren’t enough for what you need. Maybe you’re on the fence about building an internal experimentation platform yourself, but want to make sure you get it right. A/B Smartly is flexible enough to integrate with existent event streams and data warehouses and all your internal platforms.",
  },
  {
    title: "Who is AB Smartly?",
    content:
      "You are already doing A/B testing but have realized that the A/B testing tools you’re using aren’t enough for what you need. Maybe you’re on the fence about building an internal experimentation platform yourself, but want to make sure you get it right. A/B Smartly is flexible enough to integrate with existent event streams and data warehouses and all your internal platforms.",
  },
  {
    title: "Who is AB Smartly?",
    content:
      "You are already doing A/B testing but have realized that the A/B testing tools you’re using aren’t enough for what you need. Maybe you’re on the fence about building an internal experimentation platform yourself, but want to make sure you get it right. A/B Smartly is flexible enough to integrate with existent event streams and data warehouses and all your internal platforms.",
  },
  {
    title: "Who is AB Smartly?",
    content:
      "You are already doing A/B testing but have realized that the A/B testing tools you’re using aren’t enough for what you need. Maybe you’re on the fence about building an internal experimentation platform yourself, but want to make sure you get it right. A/B Smartly is flexible enough to integrate with existent event streams and data warehouses and all your internal platforms.",
  },
];
const FAQ = () => {
  const [selectedItem1, setSelectedItem1] = useState<number | null>(0);
  const [selectedItem2, setSelectedItem2] = useState<number | null>(0);
  return (
    <section className="relative w-full block overflow-x-hidden pt-20 pb-28">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          {/* Heading */}
          <div className="float-left w-full text-left relative">
            <div className="w-full px-[15px] box-border">
              <div className="relative mb-[60px] text-center">
                <div className="absolute z-[1] -top-6 md:-top-[2.2rem] lg:-top-[60px] left-0 w-full text-center font-bold uppercase text-[50px] md:text-[70px] lg:text-[100px] opacity-10 text-primary">
                  FAQ
                </div>
                <h3 className="relative z-[2] w-full text-center text-[30px] font-bold mb-[0.8rem] uppercase text-[#323232]">
                  FAQ
                </h3>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="float-left relative w-full md:w-1/2 text-left">
            <div className="w-full px-[15px] box-border">
              {data.slice(0, 3).map((item, index) => (
                <Accordion
                  id={index}
                  title={item.title}
                  content={item.content}
                  selectedItem={selectedItem1}
                  setSelectedItem={setSelectedItem1}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="float-left relative w-full md:w-1/2 text-left">
            <div className="w-full px-[15px] box-border">
              {data.slice(3, 6).map((item, index) => (
                <Accordion
                  id={index}
                  title={item.title}
                  content={item.content}
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
