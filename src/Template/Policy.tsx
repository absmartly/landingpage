import React, { FC } from "react";
import Header from "../components/Blog/Header";
import { BlogProps } from "../utils/types";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "../components/Common/Layout";
import SEO from "../components/Common/SEO";
import { graphql, Link } from "gatsby";
import { url } from "../utils/utils";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import getReadingTime from "../components/Common/readTime";
import Form from "../components/Blog/Form";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  Heading2,
  Heading3,
  Paragraph,
} from "../components/Common/RichTextComponents";
import SocialShare from "../components/Common/SocialShare";

const Blog: FC<BlogProps> = ({ pageContext }) => {
  let count = 0;
  const root = pageContext.data;
  function truncate(str: string, n: number) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  const estTime = getReadingTime(
    documentToPlainTextString(JSON.parse(root.description.raw))
  ) as unknown as string;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,

      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const ref = root.description.references[count];
        count++;
        return (
          <GatsbyImage
            image={ref.gatsbyImageData}
            alt={ref.file.fileName}
            objectFit='contain'
          />
        );
      },
    },
  };
  return (
    <Layout>
      <SEO
        title={root.title}
        description={truncate(root?.seoDescription?.seoDescription, 200)}
        path={url}
        createdAt={root.createdAt}
        updatedAt={root.updatedAt}
        author={root.author.name}
        estTime={estTime}
        type={root.type}
      />
      <Header title={root.title} />
      <div className='py-20 bg-[#f8f8f8]'>
        <div className='w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl'>
          <div className='-mx-[15px] border-b-2 border-secondary'>
            <div className='relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full mb-20'>
              {root.description &&
                documentToReactComponents(
                  JSON.parse(root.description.raw),
                  options
                )}
              <div className='flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-x-5 '>
                <div className='font-poppins'>
                  <span className='mr-2'>Author:</span>
                  <Link to={`/author/${root.author.username}`}>
                    <span className='text-primary'>{root.author.name}</span>
                  </Link>
                </div>
                <SocialShare title={root.title} tags={root.tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
