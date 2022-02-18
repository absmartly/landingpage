import React, { FC } from "react";
import { BlogProps } from "../utils/types";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "../components/Common/Layout";
import SEO from "../components/Common/SEO";
import { Link } from "gatsby";
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
import { Link as LinkScroll } from "react-scroll";

const Blog: FC<BlogProps> = ({ pageContext }) => {
  let count = 0;
  const blog = pageContext.data;
  function truncate(str: string, n: number) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  const estTime = getReadingTime(
    documentToPlainTextString(JSON.parse(blog.description.raw))
  ) as unknown as string;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,

      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.TABLE]: (node, children) => <table>{children}</table>,
      [BLOCKS.TABLE_ROW]: (node, children) => (
        <tr className='text-center p-2'>{children}</tr>
      ),
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className='p-2'>{children}</td>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const ref = blog.description.references[count];
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
        title={blog.seoTitle}
        description={truncate(blog?.seoDescription?.seoDescription, 200)}
        path={url}
        createdAt={blog.createdAt}
        updatedAt={blog.updatedAt}
        author={blog.author?.name}
        estTime={estTime}
        type={blog.type}
        data={blog.faQs}
      />
      <div className='py-20 sm:px-10 md:px-20'>
        <div className='w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl'>
          <div className='-mx-[15px] border-b-2 border-secondary'>
            {blog.heroImage && (
              <div className='my-10'>
                <GatsbyImage
                  image={blog.heroImage.gatsbyImageData}
                  alt={blog.title}
                  objectFit='contain'
                />
              </div>
            )}
            <div className='relative w-full px-10 md:px-20 md:grow-0 md:shrink-0 md:basis-full md:max-w-full mb-20'>
              <h1 className='text-4xl leading-10 md:text-7xl md:leading-[80px] font-work_sans text-gray-800'>
                {blog.title}
              </h1>
              {blog.author && (
                <p className='font-poppins text-base text-gray-700 py-5'>
                  By{" "}
                  <Link
                    to={`/author/${blog.author.username}`}
                    className='text-[#039] hover:text-primary'
                  >
                    {blog.author.name}
                  </Link>{" "}
                  on{" "}
                  <span className='text-lg text-gray-800'>
                    {blog.updatedAt}
                  </span>{" "}
                  |{" "}
                  <LinkScroll
                    to='comment'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='text-lg text-gray-800 cursor-pointer'
                  >
                    Be the first to comment
                  </LinkScroll>
                </p>
              )}
              <div className='pt-10'>
                {blog.description &&
                  documentToReactComponents(
                    JSON.parse(blog.description.raw),
                    options
                  )}
              </div>
              <div className='fixed left-2 top-24'>
                {blog.category.isSocialShare && (
                  <SocialShare title={blog.title} tags={blog.tags} />
                )}
              </div>
              {blog.faQs && (
                <div className='py-5'>
                  <h2
                    className='font-work_sans font-semibold mb-[0.8rem] text-[2.3rem] text-gray-800 
                  tracking-[1.25]'
                  >
                    Frequently asked questions on A/B testing
                  </h2>
                  {blog.faQs.questions.map((question) => (
                    <div className='my-5' key={question.contentful_id}>
                      <h3 className='font-work_sans font-semibold text-lg text-gray-800 mt-2'>
                        {question.question}
                      </h3>
                      <p className='text-base font-poppins text-gray-600 my-2'>
                        {question.answer.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {blog.category.isComments && (
            <div className='px-5 md:px-20'>
              <Form
                id={blog.contentful_id}
                comments={blog.comments && blog.comments}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
