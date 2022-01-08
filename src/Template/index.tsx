import React, { FC } from "react";
import Header from "../components/Blog/Header";
import { BlogProps } from "../utils/types";
import RichText from "@madebyconnor/rich-text-to-jsx";
import { BLOCKS } from "@contentful/rich-text-types";

const Paragraph = ({ children, ...props }) => (
  <p {...props} className="font-poppins my-5">
    {children}
  </p>
);

const Heading2 = ({ children, ...props }) => (
  <h2 {...props} className="font-poppins my-5 text-4xl font-bold text-black">
    {children}
  </h2>
);

const Heading3 = ({ children, ...props }) => (
  <h3
    {...props}
    className="font-poppins my-5 text-3xl font-semibold text-black"
  >
    {children}
  </h3>
);

const List = ({ children, ...props }) => {
  return <ol {...props}>{children}</ol>;
};
const Blog: FC<BlogProps> = ({ pageContext }) => {
  console.log(JSON.parse(pageContext.data.description.raw));
  const blog = pageContext.data;
  return (
    <div>
      <Header title={blog.title} />
      <div className="py-20 bg-[#f8f8f8]">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
          <div className="-mx-[15px]">
            <div className="relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full">
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
                  [BLOCKS.OL_LIST]: {
                    component: List,
                  },
                }}
              />
              <div className="font-poppins">
                <span className="mr-2">Tags:</span>
                <span className="text-primary">{blog.tags}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
