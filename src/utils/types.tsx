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
    title: string;
    file: {
      fileName: string;
    };
  };
}

export interface Section6Props {
  description: string;
  image: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
  };
}

interface Cards {
  title: string;
  gatsbyImageData: IGatsbyImageData;
  file: {
    fileName: string;
  };
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
  image: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
  };
}

export interface HeroProps {
  title: string;
  description: string;
}

export interface SolutionProps {
  title: string;
  image: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
  };
  details: SolutionDetail[];
}

export interface BlogCardProps {
  blog: Blog;
  authorName?: string;
  authorUsername?: string;
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

export interface FeaturedBlogProps {
  blogs: Blog[];
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
  updatedAt: string;
  website: string;
  email: string;
  status: Status;
}
export interface References {
  id: string;
  align: string;
  table: {
    align: string;
    tableData: Array<Array<string>>;
  };
  contentful_id: string;
  media: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
  };
  gatsbyImageData: IGatsbyImageData;
  file: {
    fileName: string;
  };
  title: string;
  __typename: string;
  slug: string;
  newTab?: string;
  altText?: string;
  banner: {
    gatsbyImageData: IGatsbyImageData;
  };
}
export interface CategroyProps {
  name: string;
  url: string;
  isSocialShare: boolean;
  isComments: boolean;
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
    title: string;
    file: {
      fileName: string;
    };
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
    title: string;
    file: {
      fileName: string;
    };
  };
  growthDecisionPoints: SolutionDetail[];
  growthBanner2: string;
  growthBanner2Image: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
  };
}

interface LandingPage {
  pageTitle: string;
  seoTitle: string;
  heroTitle: string;
  heroDescription: {
    heroDescription: string;
  };
  solutionTitle: string;
  solutionImage: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
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
    title: string;
    file: {
      fileName: string;
    };
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
    title: string;
    file: {
      fileName: string;
    };
  };
  growthDecisionPoints: {
    id: string;
    title: string;
    description: string;
  }[];
  growthBanner2: string;
  growthBanner2Image: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
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
  featured: {
    id: string;
    title: string;
    slug: string;
    heroImage: {
      gatsbyImageData: IGatsbyImageData;
    };
    category: {
      url: string;
    };
  }[];
}

interface FooterLinks {
  contentful_id: string;
  title: string;
  slug: string;
}

interface SocialLinks {
  contentful_id: string;
  name: string;
  url: string;
  image: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
  };
}

interface FooterContent {
  title: string;
  footerLinks: FooterLinks[];
  socialLinks: SocialLinks[];
}

export interface FooterProps {
  allContentfulFooter: {
    nodes: FooterContent[];
  };
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  heroImage: {
    gatsbyImageData: IGatsbyImageData;
    title: string;
    file: {
      fileName: string;
    };
  };
  heroImageAltText?: string;
  author: {
    name: string;
    username: string;
  };
  category: {
    name: string;
    url: string;
  };
  updatedAt: string;
  createdAt: string;
}

export interface Questions {
  contentful_id: string;
  question: string;
  answer: {
    answer: string;
  };
}

export interface Blogs {
  id: string;
  contentful_id: string;
  title: string;
  heroImage:
    | {
        gatsbyImageData: IGatsbyImageData | undefined;
        title: string;
        file: {
          fileName: string;
        };
      }
    | undefined;
  heroImageAltText: string;
  description: {
    raw: string;
    references: References[];
  };

  comments: Comments[] | null;
  seoTitle: string;
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
  category: CategroyProps;
  faQs?: {
    id: string;
    title: string;
    questions: Questions[];
  };
  popUp?: {
    banner: {
      gatsbyImageData: IGatsbyImageData;
    };
    title: string;
    description: {
      description: string;
    };
    buttonText: string;
    slug: string;
  };
}

export interface AuthorBlogs {
  id: string;
  title: string;
  slug: string;
  category: CategroyProps;
  updatedAt: string;
  description: {
    raw: string;
  };
  heroImage: {
    gatsbyImageData: IGatsbyImageData | undefined;
    title: string;
    file: {
      fileName: string;
    };
  };
}

interface Author {
  name: string;
  username: string;
  bio: {
    bio: string;
  };
  profilePic: {
    gatsbyImageData: IGatsbyImageData | undefined;
    title: string;
    file: {
      fileName: string;
    };
  };
  linkedinUrl: string | undefined;
  blog?: Blog[];
}

export interface HomeProps {
  data: {
    allContentfulLandingPage: {
      nodes: LandingPage[];
    };
    allContentfulExperimentation: {
      nodes: ExperimentationList[];
    };
    allContentfulBlog: {
      nodes: Blog[];
    };
  };
}

export interface BlogListProps {
  data: {
    allContentfulBlog: {
      nodes: Blog[];
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

export interface RelatedBlogsProps {
  PostWithTag: {
    nodes: Blog[];
  };
  PostWithoutTag: {
    nodes: Blog[];
  };
}

export interface BlogProps {
  pageContext: {
    data: Blogs;
  };
  data: RelatedBlogsProps;
}

export interface AuthorProps {
  pageContext: {
    data: Author;
  };
}
