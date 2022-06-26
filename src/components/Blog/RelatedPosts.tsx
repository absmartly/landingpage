import React, { FC } from "react";
import { Blog } from "../../utils/types";
import BlogCard from "./BlogCard";

interface IBlogsProps {
  blogs: Blog[];
}

const RelatedPosts: FC<IBlogsProps> = ({ blogs }) => {
  return (
    <div className="relative w-full px-[15px] md:grow-0 md:shrink-0 md:basis-full md:max-w-full my-10">
      <h2 className="text-4xl font-semibold font-work_sans my-5">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 space-x-5 text-center">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
