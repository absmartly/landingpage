import React, { FC } from "react";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

interface FeaturedBlog {
  id: string;
  title: string;
  slug: string;
  heroImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  category: {
    url: string;
  };
}

interface FeaturedBlogs {
  featuredBlogs: FeaturedBlog[];
}

const FeaturedBlogs: FC<FeaturedBlogs> = ({ featuredBlogs }) => {
  return (
    <section
      id="faq"
      className="relative w-full block overflow-x-hidden pt-20 pb-28 bg-white"
    >
      <div className="w-full mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1240px] xl:max-w-full px-10 lg:px-20 xl:px-40 2xl:px-60">
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
          <div className="relative w-full md:grow-0 md:shrink-0 md:basis-full md:max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  grid-rows-1 space-x-5 text-center">
              {featuredBlogs.map((blog) => (
                <FeaturedBlogCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  slug={blog.slug}
                  heroImage={blog.heroImage}
                  category={blog.category}
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

const FeaturedBlogCard: FC<FeaturedBlog> = ({
  id,
  title,
  slug,
  heroImage,
  category,
}) => {
  return (
    <div
      key={id}
      className={`z-[2] mb-[30px] max-w-full text-left border border-solid border-[#D8D8D8] ${
        heroImage?.gatsbyImageData ? "row-span-2 pb-6" : "py-6 row-span-1"
      }`}
    >
      {heroImage && (
        <div className={`w-full ${heroImage?.gatsbyImageData && "mb-5"}`}>
          <GatsbyImage
            image={heroImage.gatsbyImageData}
            alt={title}
            className="max-w-full w-full h-fit object-contain block align-middle border-none"
          />
        </div>
      )}
      <div className="px-7 space-y-3">
        <h5
          className="my-2 md:h-24 overflow-x-clip text-xl font-work_sans font-semibold text-gray-800 hover:text-primary
        leading-8 lg:leading-7"
        >
          {title}
        </h5>
        <Link
          className="font-work_sans font-medium text-lg leading-8 lg:leading-10 text-white bg-primary rounded-md px-3 py-2"
          to={`/${category.url}/${slug}/`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
