import React, { FC } from "react";
import About from "../components/Home/About";
import Experimentation from "../components/Home/Experimentation";
import FAQ from "../components/Home/FAQ";
import Growth from "../components/Home/Growth";
import Hero from "../components/Home/Hero";
import SEO from "../components/Common/SEO";
import Solution from "../components/Home/Solution";
import { graphql } from "gatsby";
import { HomeProps } from "../utils/types";
import Layout from "../components/Common/Layout";
import FeaturedBlogs from "../components/Home/FeaturedBlogs";
import { url, path } from "../utils/utils";

const Home: FC<HomeProps> = ({ data }) => {
  const {
    pageTitle,
    seoTitle,
    heroTitle,
    heroDescription,
    solutionTitle,
    solutionImage,
    solutionDetails,
    growthTitle,
    growthSubTitle,
    growthDescription,
    growthCards,
    growthBanner,
    growthBanner2,
    growthBanner2Image,
    growthDecisionImage,
    growthDecisionTitle,
    growthDecisionPoints,
    growthPerformanceTitle,
    growthPerformanceImage,
    growthPerformanceDescription,
    growthPerformancePara2,
    growthPerformancePara3,
    experimentationTitle,
    experimentationDescription,
    aboutTitle,
    aboutDescription,
    aboutPara2,
    aboutPara3,
    aboutPara4,
    faqTitle,
    faqSubtitle,
    faqList,
    featured,
  } = data.allContentfulLandingPage.nodes[0];

  const list = data.allContentfulExperimentation.nodes;
  return (
    <Layout>
      <SEO title={pageTitle} seoTitle={seoTitle} path={url} />
      <Hero title={heroTitle} description={heroDescription.heroDescription} />
      <Solution
        title={solutionTitle}
        image={solutionImage}
        details={solutionDetails}
      />
      <Growth
        title={growthTitle}
        subTitle={growthSubTitle}
        description={growthDescription.growthDescription}
        cards={growthCards}
        growthBanner={growthBanner.growthBanner}
        growthPerformanceTitle={growthPerformanceTitle}
        growthPerformanceImage={growthPerformanceImage}
        growthPerformanceDescription={growthPerformanceDescription}
        growthPerformancePara2={growthPerformancePara2}
        growthPerformancePara3={growthPerformancePara3}
        growthDecisionTitle={growthDecisionTitle}
        growthDecisionImage={growthDecisionImage}
        growthDecisionPoints={growthDecisionPoints}
        growthBanner2={growthBanner2}
        growthBanner2Image={growthBanner2Image}
      />
      <Experimentation
        title={experimentationTitle}
        description={experimentationDescription.experimentationDescription}
        list={list}
      />
      <div>
        <About
          title={aboutTitle}
          para1={aboutDescription.aboutDescription}
          para2={aboutPara2.aboutPara2}
          para3={aboutPara3.aboutPara3}
          para4={aboutPara4.aboutPara4}
        />
      </div>
      <FeaturedBlogs featuredBlogs={featured} />
      <FAQ title={faqTitle} subTitle={faqSubtitle} list={faqList} />
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulLandingPage {
      nodes {
        pageTitle
        seoTitle
        heroTitle
        heroDescription {
          heroDescription
        }
        solutionTitle
        solutionImage {
          gatsbyImageData
          title
          file {
            fileName
          }
        }
        solutionDetails {
          id
          title
          description
        }
        growthTitle
        growthSubTitle
        growthDescription {
          growthDescription
        }
        growthCards {
          title
          gatsbyImageData
          title
          file {
            fileName
          }
        }
        growthBanner {
          growthBanner
        }
        growthPerformanceTitle
        growthPerformanceImage {
          gatsbyImageData
          title
          file {
            fileName
          }
        }
        growthPerformanceDescription {
          growthPerformanceDescription
        }
        growthPerformancePara2 {
          growthPerformancePara2
        }
        growthPerformancePara3 {
          growthPerformancePara3
        }
        growthDecisionTitle
        growthDecisionImage {
          gatsbyImageData
          title
          file {
            fileName
          }
        }
        growthDecisionPoints {
          id
          title
          description
        }
        growthBanner2
        growthBanner2Image {
          gatsbyImageData
          title
          file {
            fileName
          }
        }
        experimentationTitle
        experimentationDescription {
          experimentationDescription
        }
        aboutTitle
        aboutDescription {
          aboutDescription
        }
        aboutPara2 {
          aboutPara2
        }
        aboutPara3 {
          aboutPara3
        }
        aboutPara4 {
          aboutPara4
        }
        faqTitle
        faqSubtitle
        faqList {
          question
          answer
        }
        featured {
          id
          title
          slug
          heroImage {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
          category {
            url
          }
        }
      }
    }
    allContentfulExperimentation(sort: { fields: createdAt, order: ASC }) {
      nodes {
        id
        title
        description {
          description
        }
        image {
          gatsbyImageData
          title
          file {
            fileName
          }
        }
      }
    }
  }
`;

export default Home;
