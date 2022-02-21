import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FooterProps } from "../../utils/types";
const Footer = () => {
  const data: FooterProps = useStaticQuery(graphql`
    {
      allContentfulFooter {
        nodes {
          title
          footerLinks {
            contentful_id
            title
            slug
          }
          socialLinks {
            contentful_id
            name
            url
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const footer = data.allContentfulFooter.nodes[0];
  return (
    <div className='absolute bottom-0 left-0 bg-primary w-full py-4'>
      <div className='relative w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl'>
        <div className='flex flex-col justify-between flex-wrap items-center lg:flex-row my-auto mr-3 p-1 text-[13px] font-poppins font-medium uppercase text-white'>
          <p className='font-poppins text-center text-white'>
            Copyright 2020 - A/B Smartly
            {footer.footerLinks.map((node) => (
              <span key={node.contentful_id}>
                {" "}
                |{" "}
                <Link key={node.contentful_id} to={`/${node.slug}`}>
                  {node.title}
                </Link>
              </span>
            ))}
          </p>
          <div className='mt-8 lg:mt-0'>
            {footer.socialLinks.map((node) => (
              <a
                key={node.contentful_id}
                href={node.url}
                target='_blank'
                rel='me'
              >
                <GatsbyImage
                  className='w-4 h-4 object-contain mr-3 ml-3 cursor-pointer'
                  image={node.image.gatsbyImageData}
                  alt={node.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
