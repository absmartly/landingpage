import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlog(filter: { category: { url: { eq: "root" } } }) {
        nodes {
          contentful_id
          title
          slug
        }
      }
    }
  `);
  return (
    <div className='relative mt-20 lg:mt-5'>
      <div className='absolute bottom-0 left-0 bg-primary w-full py-4'>
        <div className='relative w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl'>
          <div className='flex flex-col justify-between flex-wrap items-center lg:flex-row my-auto mr-3 p-1 text-[13px] font-poppins font-medium uppercase text-white'>
            <p className='font-poppins text-center text-[#a3b0bd]'>
              Copyright 2020 - A/B Smartly |{" "}
              {data?.allContentfulBlog.nodes.map((node) => (
                <Link
                  key={node.contentful_id}
                  to={node.slug}
                  className='text-white'
                >
                  {node.title}
                </Link>
              ))}
            </p>
            <div className='mt-8 lg:mt-0'>
              <a href='https://twitter.com/absmartly' target='_blank' rel='me'>
                <StaticImage
                  className='w-4 h-4 object-contain mr-3 ml-3 cursor-pointer'
                  src='../../assets/twitter.svg'
                  alt='Twitter'
                />
              </a>
              <a
                href='https://www.linkedin.com/company/absmartly'
                target='_blank'
                rel='me'
              >
                <StaticImage
                  className='w-4 h-4 object-contain mr-3 ml-3 cursor-pointer'
                  src='../../assets/linkedin.svg'
                  alt='LinkedIn'
                />
              </a>
              <a
                href='https://www.facebook.com/absmartly'
                target='_blank'
                rel='me'
              >
                <StaticImage
                  className='w-4 h-4 object-contain mr-3 ml-3 cursor-pointer'
                  src='../../assets/facebook.svg'
                  alt='Facebook'
                />
              </a>
              <a href='https://github.com/absmartly/' target='_blank' rel='me'>
                <StaticImage
                  className='w-4 h-4 object-contain mr-3 ml-3 cursor-pointer'
                  src='../../assets/git.png'
                  alt='Git'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
