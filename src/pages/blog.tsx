import React, { FC } from "react";
import { graphql } from "gatsby";
import { BlogListProps } from "../utils/types";
import Layout from "../components/Common/Layout";
import SEO from "../components/Common/SEO";
import { url } from "../utils/utils";
import BlogCard from "../components/Blog/BlogCard";

const Blogs: FC<BlogListProps> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog - In-house experimentation platform | A/B Smartly"
        path={url}
      />
      <div className="py-20 bg-[#f8f8f8]">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
          <div className="-mx-[15px]">
            <div className="relative w-full px-10 md:px-20 md:grow-0 md:shrink-0 md:basis-full md:max-w-full mb-20">
              <h1 className="text-4xl leading-10 md:text-7xl md:leading-[80px] font-work_sans text-gray-800">
                Blogs
              </h1>
            </div>
            <div className="relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 space-x-5 text-center">
                {data.allContentfulBlog.nodes.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;

export const query = graphql`
  {
    allContentfulBlog(filter: { category: { url: { ne: "/" } } }) {
      nodes {
        id
        title
        heroImage {
          gatsbyImageData
          title
          file {
            fileName
          }
        }
        updatedAt(formatString: "MMMM DD, YYYY")
        author {
          name
          username
        }
        category {
          name
          url
        }
        slug
      }
    }
  }
`;
