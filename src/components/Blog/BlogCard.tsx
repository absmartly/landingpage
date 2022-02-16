import React, { FC } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Blog } from "../../utils/types";

interface BlogCardProps {
  blog: Blog;
  authorName?: string;
  authorUsername?: string;
}

const BlogCard: FC<BlogCardProps> = ({ blog, authorName, authorUsername }) => {
  return (
    <div
      key={blog.id}
      className={`z-[2] mb-[30px] h-min max-w-full text-left border border-solid border-[#D8D8D8] ${
        blog.heroImage?.gatsbyImageData ? "row-span-2 pb-6" : "py-6 row-span-1"
      }`}
    >
      {blog.heroImage && (
        <div className={`w-full ${blog.heroImage?.gatsbyImageData && "mb-5"}`}>
          <GatsbyImage
            image={blog.heroImage.gatsbyImageData}
            alt={blog.title}
            className='max-w-full w-full h-60 object-contain block align-middle border-none'
          />
        </div>
      )}
      <div className='px-7'>
        <span className='text-[#0033ff] font-sans text-sm tracking-wide'>
          {blog.category.name}
        </span>
        <h5
          className='mt-2 mb-5 text-3xl font-medium font-barlow_semi_condensed text-gray-800 hover:text-primary
        leading-10'
        >
          <Link to={`/${blog.category.url}/${blog.slug}`}>{blog.title}</Link>
        </h5>
        <p className='font-sans text-base text-gray-700 pt-2 pb-5'>
          By{" "}
          <Link
            to={`/author/${
              blog?.author ? blog.author.username : authorUsername
            }`}
            className='text-[#039] hover:text-primary'
          >
            {blog?.author ? blog.author.name : authorName}
          </Link>{" "}
          • <span className='text-lg text-gray-800'>{blog.updatedAt}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
