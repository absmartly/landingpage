import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Section2Props } from "../../../utils/types";
import { cardsColors } from "../../../utils/utils";
const borderColor = ["2ad8da", "f89291", "51df65", "ffaa52"];
const Section2: FC<Section2Props> = ({ cards }) => {
  return (
    <section className="relative w-full block pt-5 pb-[120px] bg-[#f7f7f7]">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full maxmd:w-1/2 md:w-1/4 mb-[25px] float-left relative"
            >
              <div className="w-full px-[15px] box-border">
                <div
                  className={`relative w-full block text-center mx-auto bg-white rounded-lg ${cardsColors[index].border} py-[25px] px-[15px] box-border`}
                >
                  <GatsbyImage
                    className={`w-[100px] h-[100px] ${cardsColors[index].filter} object-cover align-middle text-center rounded-full border-[10px] border-solid border-[#d4f7f8] mb-6`}
                    image={card.gatsbyImageData}
                    alt={card.title}
                  />
                  <h5 className="mb-[0.8rem] font-work_sans text-[#212121] font-semibold text-center text-xl">
                    {card.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
