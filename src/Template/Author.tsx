import React, { FC } from "react";
import { AuthorProps } from "../utils/types";
import Layout from "../components/Common/Layout";
import SEO from "../components/Common/SEO";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import BlogCard from "../components/Blog/BlogCard";

const Author: FC<AuthorProps> = ({ pageContext }) => {
  const author = pageContext.data;

  return (
    <Layout>
      <SEO
        title='Blog - In-house experimentation platform | A/B Smartly'
        description=''
        path={`https://absmartly.com/author/${author.username}`}
      />
      <div className='py-20 bg-[#f8f8f8]'>
        <div className='w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl'>
          <div className='-mx-[15px]'>
            <div
              className='relative w-full px-10 md:px-20 md:grow-0 md:shrink-0 md:basis-full md:max-w-full mb-20 flex flex-col 
            items-center justify-center '
            >
              {author.profilePic ? (
                <div className='mt-5 mb-2 w-32 h-32 rounded-full'>
                  <GatsbyImage
                    image={author.profilePic.gatsbyImageData}
                    alt={author.name}
                    objectFit='contain'
                    className='rounded-full'
                  />
                </div>
              ) : (
                <div className='my-2 w-32 h-32 rounded-full flex items-center justify-center bg-slate-400'>
                  <span className='text-white text-4xl'>{author.name[0]}</span>
                </div>
              )}
              <h1 className='text-4xl mb-5 leading-10 md:text-7xl md:leading-[80px] font-barlow_semi_condensed text-gray-800'>
                {author.name}
              </h1>
              <p className='font-sans leading-8 tracking-wide text-xl text-gray-800 py-5 max-w-[640px] text-center'>
                {author.bio.bio}
              </p>
              {author?.linkedinUrl && (
                <a href={author.linkedinUrl} target='_blank' rel='me'>
                  <StaticImage
                    src='../assets/linkedin.png'
                    alt='Linkedin'
                    width={40}
                    height={40}
                  />
                </a>
              )}
            </div>
            <div className='relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full'>
              <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 space-x-5 text-center'>
                {author.blog?.map((blog) => (
                  <BlogCard
                    blog={blog}
                    authorName={author.name}
                    authorUsername={author.username}
                    key={blog.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Author;
