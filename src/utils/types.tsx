import { IGatsbyImageData } from "gatsby-plugin-image";

interface SolutionDetail {
  id: string;
  title: string;
  description: string;
}

export interface ExperimentationList {
  id: string;
  title: string;
  description: {
    description: string;
  };
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface Section6Props {
  description: string;
  image: IGatsbyImageData;
}

interface Cards {
  title: string;
  gatsbyImageData: IGatsbyImageData;
}

export interface Section1Props {
  title: string;
  subTitle: string;
  description: string;
}

export interface Section2Props {
  cards: Cards[];
}

export interface Section3Props {
  banner: string;
}

export interface Section4Props {
  title: string;
  para1: string;
  para2: string;
  para3: string;
  image: IGatsbyImageData;
}

export interface HeroProps {
  title: string;
  description: string;
}

export interface SolutionProps {
  title: string;
  image: IGatsbyImageData;
  details: SolutionDetail[];
}

export interface ExperimentationProps {
  title: string;
  description: string;
  list: ExperimentationList[];
}

export interface AboutProps {
  title: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
}

export interface FAQProps {
  title: string;
  subTitle: string;
  list: {
    question: string;
    answer: string;
  }[];
}

export enum Status {
  UnApproved = "UnApproved",
  Approved = "Approved",
  Rejected = "Rejected",
}
export interface Comments {
  id: string;
  message: {
    message: string;
  };
  name: string;
  timestamp: string;
  website: string;
  email: string;
  status: Status;
}

export interface GrowthProps {
  title: string;
  subTitle: string;
  description: string;
  cards: Cards[];
  growthBanner: string;
  growthPerformanceTitle: string;
  growthPerformanceImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  growthPerformanceDescription: {
    growthPerformanceDescription: string;
  };
  growthPerformancePara2: {
    growthPerformancePara2: string;
  };
  growthPerformancePara3: {
    growthPerformancePara3: string;
  };
  growthDecisionTitle: string;
  growthDecisionImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  growthDecisionPoints: SolutionDetail[];
  growthBanner2: string;
  growthBanner2Image: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface LandingPage {
  heroTitle: string;
  heroDescription: {
    heroDescription: string;
  };
  solutionTitle: string;
  solutionImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  solutionDetails: SolutionDetail[];
  growthTitle: string;
  growthSubTitle: string;
  growthDescription: {
    growthDescription: string;
  };
  growthCards: Cards[];
  growthBanner: {
    growthBanner: string;
  };
  growthPerformanceTitle: string;
  growthPerformanceImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  growthPerformanceDescription: {
    growthPerformanceDescription: string;
  };
  growthPerformancePara2: {
    growthPerformancePara2: string;
  };
  growthPerformancePara3: {
    growthPerformancePara3: string;
  };
  growthDecisionTitle: string;
  growthDecisionImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  growthDecisionPoints: {
    id: string;
    title: string;
    description: string;
  }[];
  growthBanner2: string;
  growthBanner2Image: {
    gatsbyImageData: IGatsbyImageData;
  };
  experimentationTitle: string;
  experimentationDescription: {
    experimentationDescription: string;
  };
  aboutPara2: {
    aboutPara2: string;
  };
  aboutPara3: {
    aboutPara3: string;
  };
  aboutPara4: {
    aboutPara4: string;
  };
  aboutTitle: string;
  aboutDescription: {
    aboutDescription: string;
  };
  faqTitle: string;
  faqSubtitle: string;
  faqList: {
    question: string;
    answer: string;
  }[];
}

interface Blogs {
  id: string;
  contentful_id: string;
  title: string;
  description: {
    raw: string;
  };
  comments: Comments[] | null;
  seoDescription: {
    seoDescription: string;
  };
  createdAt: string;
  updatedAt: string;
  type: string;
  slug: string;
  tags: string[];
  author: {
    name: string;
    username: string;
  };
}

interface AuthorBlogs {
  id: string;
  title: string;
  slug: string;
  type: string;
  updatedAt: string;
  description: {
    raw: string;
  };
}

interface Author {
  name: string;
  username: string;
  blog?: AuthorBlogs[];
}

export interface HomeProps {
  data: {
    allContentfulLandingPage: {
      nodes: LandingPage[];
    };
    allContentfulExperimentation: {
      nodes: ExperimentationList[];
    };
  };
}

export interface BlogsProps {
  data: {
    allContentfulBlog: {
      nodes: Blogs[];
    };
  };
}

export interface BlogProps {
  pageContext: {
    data: Blogs;
  };
  data: any;
}

export interface AuthorProps {
  pageContext: {
    data: Author;
  };
}
