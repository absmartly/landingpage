import React, { FC } from "react";
import Header from "../components/Blog/Header";
import { BlogProps } from "../utils/types";
import RichText from "@madebyconnor/rich-text-to-jsx";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "../components/Common/Layout";
import SEO from "../components/Common/SEO";

const Paragraph = ({ children, ...props }) => (
  <p
    {...props}
    className="font-poppins text-[15px] leading-6 text-left text-[#535353] mb-4"
  >
    {children}
  </p>
);

const Heading2 = ({ children, ...props }) => (
  <h2
    {...props}
    className="font-work_sans mb-[0.8rem] text-[2.3rem] font-normal text-[#212121] tracking-[1.25]"
  >
    {children}
  </h2>
);

const Heading3 = ({ children, ...props }) => (
  <h3
    {...props}
    className="font-work_sans mb-[0.8rem] text-[2rem] font-normal text-[#212121] tracking-[1.25]"
  >
    {children}
  </h3>
);

const List = ({ children, ...props }) => {
  return (
    <ol {...props} className="list-decimal ml-8">
      {children.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
};
const Blog: FC<BlogProps> = ({ pageContext }) => {
  const blog = pageContext.data;
  return (
    <Layout>
      <SEO title={blog.title} />
      <Header title={blog.title} />
      <div className="py-20 bg-[#f8f8f8]">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
          <div className="-mx-[15px]">
            <div className="relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full ">
              <RichText
                richText={JSON.parse(blog.description.raw)}
                overrides={{
                  [BLOCKS.PARAGRAPH]: {
                    component: Paragraph,
                  },
                  [BLOCKS.HEADING_2]: {
                    component: Heading2,
                  },
                  [BLOCKS.HEADING_3]: {
                    component: Heading3,
                  },
                }}
              />
              <div className="font-poppins">
                <span className="mr-2">Tags:</span>
                <span className="text-primary">{blog.tags.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
