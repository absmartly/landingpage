import React, { FC, useState } from "react";
import { FeaturedBlogProps } from "../../utils/types";
import BlogCard from "../Blog/BlogCard";

const FeaturedBlogs: FC<FeaturedBlogProps> = ({ blogs }) => {
  return (
    <section
      id="faq"
      className="relative w-full min-h-screen block overflow-x-hidden pt-20 pb-28 bg-white"
    >
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          {/* Heading */}
          <div className="float-left w-full text-left relative">
            <div className="w-full px-[15px] box-border">
              <div className="relative mb-[60px] text-center">
                <div className="absolute font-work_sans z-[1] -top-6 md:-top-[2.2rem] lg:-top-[60px] left-0 w-full text-center font-bold uppercase text-[50px] md:text-[70px] lg:text-[100px] opacity-10 text-primary">
                  Featured Blogs
                </div>
                <h3 className="relative font-work_sans z-[2] w-full text-center text-[30px] font-bold mb-[0.8rem] uppercase text-[#323232]">
                  Blogs
                </h3>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 space-x-5 text-center">
              {blogs.map((blog) => (
                <BlogCard
                  blog={blog}
                  authorName={blog.author?.name}
                  authorUsername={blog.author?.username}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
