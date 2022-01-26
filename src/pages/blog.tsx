import { graphql, Link } from "gatsby";
import React from "react";
import { FC } from "react";
import Header from "../components/Blog/Header";
import { BlogsProps } from "../utils/types";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Layout from "../components/Common/Layout";
import SEO from "../components/Common/SEO";
import { url } from "../utils/utils";

const Blogs: FC<BlogsProps> = ({ data }) => {
  function truncate(str: string, n: number) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  return (
    <Layout>
      <Header title='Blog' />
      <SEO
        title='Blog - In-house experimentation platform | A/B Smartly'
        path={url}
      />
      <div className='py-20 bg-[#f8f8f8]'>
        <div className='w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl'>
          <div className='-mx-[15px]'>
            <div className='relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full'>
              {/* Blogs List */}
              <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 text-center'>
                {data.allContentfulBlog.nodes.map((blog) => (
                  <div
                    key={blog.id}
                    className='z-[2] mb-[30px] bg-white py-6 px-[30px] text-center max-w-full'
                  >
                    <ul className='text-center'>
                      <li
                        className='text-primary inline-block mx-[10px] text-sm uppercase relative
                    after:absolute after:bottom-[6px] after:-right-3 after:h-[10px] after:w-[1px] 
                    after:bg-secondary '
                      >
                        {blog.updatedAt}
                      </li>
                      <li className='text-primary inline-block mx-[10px] text-sm uppercase relative'>
                        {blog.category.name}
                      </li>
                    </ul>
                    <h5
                      className='mt-[10px] mb-5 text-xl font-semibold font-work_sans text-[#212121] 
                    hover:text-primary'
                    >
                      <Link to={`/${blog.category.slug}/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h5>
                    <div>
                      <p className='text-center px-2 font-poppins font-medium mb-4 text-[16px] text-[#535353]'>
                        {truncate(
                          documentToPlainTextString(
                            JSON.parse(blog.description.raw)
                          ),
                          120
                        )}
                      </p>
                    </div>
                  </div>
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
    allContentfulBlog {
      nodes {
        id
        title
        createdAt(formatString: "MMMM DD, YYYY")
        updatedAt(formatString: "MMMM DD, YYYY")
        description {
          raw
        }
        category {
          name
          slug
        }
        type
        tags
        slug
      }
    }
  }
`;
