import React from "react";
import { FC } from "react";
import { GrowthProps } from "../../utils/types";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const Growth: FC<GrowthProps> = ({
  title,
  subTitle,
  description,
  cards,
  growthBanner,
  growthBanner2,
  growthBanner2Image,
  growthDecisionImage,
  growthDecisionPoints,
  growthDecisionTitle,
  growthPerformanceDescription,
  growthPerformancePara2,
  growthPerformancePara3,
  growthPerformanceImage,
  growthPerformanceTitle,
}) => {
  return (
    <div className="relative bg-white" id="unlimited-growth">
      <Section1 title={title} subTitle={subTitle} description={description} />
      <Section2 cards={cards} />
      <Section3 banner={growthBanner} />
      <Section4
        title={growthPerformanceTitle}
        para1={growthPerformanceDescription.growthPerformanceDescription}
        para2={growthPerformancePara2.growthPerformancePara2}
        para3={growthPerformancePara3.growthPerformancePara3}
        image={growthPerformanceImage.gatsbyImageData}
      />
      <Section5
        title={growthDecisionTitle}
        image={growthDecisionImage.gatsbyImageData}
        details={growthDecisionPoints}
      />
      <Section6
        description={growthBanner2}
        image={growthBanner2Image.gatsbyImageData}
      />
    </div>
  );
};

export default Growth;
