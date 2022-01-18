import React, { FC, FormEvent, useState } from "react";
import Header from "../components/Blog/Header";
import { BlogProps } from "../utils/types";
import RichText from "@madebyconnor/rich-text-to-jsx";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "../components/Common/Layout";
import SEO from "../components/Common/SEO";
import { graphql, Link } from "gatsby";
import { url } from "../utils/utils";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import getReadingTime from "../components/Common/readTime";
import { Disqus } from "gatsby-plugin-disqus";
import Form from "../components/Blog/Form";
import {
  Heading2,
  Heading3,
  Paragraph,
} from "../components/Common/RichTextComponents";
import SocialShare from "../components/Common/SocialShare";

const Blog: FC<BlogProps> = ({ pageContext, data }) => {
  const blog = pageContext.data;
  function truncate(str: string, n: number) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  const estTime = getReadingTime(
    documentToPlainTextString(JSON.parse(blog.description.raw))
  ) as unknown as string;

  return (
    <Layout>
      <SEO
        title={blog.title}
        description={truncate(blog.seoDescription.seoDescription, 200)}
        path={url}
        createdAt={blog.createdAt}
        updatedAt={blog.updatedAt}
        author={blog.author.name}
        estTime={estTime}
        type={blog.type}
      />
      <Header title={blog.title} />
      <div className="py-20 bg-[#f8f8f8]">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
          <div className="-mx-[15px] border-b-2 border-secondary">
            <div className="relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full mb-20">
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
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-x-5 ">
                <div className="font-poppins">
                  <span className="mr-2">Author:</span>
                  <Link to={`/author/${blog.author.username}`}>
                    <span className="text-primary">{blog.author.name}</span>
                  </Link>
                </div>
                <SocialShare title={blog.title} tags={blog.tags} />
              </div>
            </div>
          </div>
          <Form id={blog.contentful_id} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query ($slug: String!) {
    allWebMentionEntry(filter: { wmTarget: { eq: $slug } }) {
      totalCount
      edges {
        node {
          id
          published(formatString: "MM-DD-YYYY")
          author {
            name
            photo
            url
          }
          url
          wmId
          content {
            html
          }
        }
      }
    }
  }
`;
