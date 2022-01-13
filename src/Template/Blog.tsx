import React, { FC, FormEvent, useState } from "react";
import Header from "../components/Blog/Header";
import { BlogProps } from "../utils/types";
import RichText from "@madebyconnor/rich-text-to-jsx";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "../components/Common/Layout";
import SEO from "../components/Common/SEO";
import { Link } from "gatsby";
import { path, url } from "../utils/utils";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import getReadingTime from "../components/Common/readTime";

type FormDataState = { [key: string]: string };

const Paragraph = ({ children, ...props }) => (
  <p
    {...props}
    className="font-poppins text-[15px] leading-6 text-left text-[#535353] mb-4"
  >
    {children}
  </p>
);

const Heading2 = ({ children, ...props }) => (
  <h2
    {...props}
    className="font-work_sans mb-[0.8rem] text-[2.3rem] font-normal text-[#212121] tracking-[1.25]"
  >
    {children}
  </h2>
);

const Heading3 = ({ children, ...props }) => (
  <h3
    {...props}
    className="font-work_sans mb-[0.8rem] text-[2rem] font-normal text-[#212121] tracking-[1.25]"
  >
    {children}
  </h3>
);

const List = ({ children, ...props }) => {
  return (
    <ol {...props} className="list-decimal ml-8">
      {children.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Blog: FC<BlogProps> = ({ pageContext }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const blog = pageContext.data;
  function truncate(str: string, n: number) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  const estTime = getReadingTime(
    documentToPlainTextString(JSON.parse(blog.description.raw))
  ) as unknown as string;

  const hashtags = blog.tags.map((tag) => {
    return tag.replace(/\s/g, "").replace(/\//g, "");
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    fetch("/.netlify/functions/comment-handler", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "comments-queue",
        name,
        email,
        website,
        comment,
        path: path,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thanks for your comment!");
          setName("");
          setEmail("");
          setWebsite("");
          setComment("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsSubmitting(false);
  }
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
                <div className="flex items-center font-poppins">
                  <span className="mr-2">Share:</span>
                  <FacebookShareButton
                    url={url}
                    quote={blog.title}
                    hashtag={hashtags[0]}
                    className="mx-2"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={url}
                    title={blog.title}
                    hashtags={hashtags}
                    className="mx-2"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={url}
                    title={blog.title}
                    className="mx-2"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <h3 className="font-work_sans text-2xl font-normal mb-3 text-[#212121] leading-5">
              Leave a Comment
            </h3>
            <form
              name="comments-queue"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="grid md:grid-cols-3 grid-rows-1 gap-3"
            >
              <textarea
                name="comment"
                rows={6}
                placeholder="Comment *"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="md:col-span-3 w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black
                font-normal text-sm"
              />
              <input
                name="name"
                type="text"
                placeholder="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black
                font-normal text-sm"
              />
              <input
                name="email"
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black
                font-normal text-sm"
              />
              <input
                name="website"
                type="url"
                placeholder="Website *"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black
                font-normal text-sm"
              />
              <p className="md:col-span-3 w-full mb-4 py-3 px-1 flex items-center">
                <input id="checkbox" name="checkbox" type="checkbox" />
                <label
                  htmlFor="checkbox"
                  className="font-poppins text-[16px] font-medium ml-3 text-[#535353]"
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary w-min text-[13px] font-medium mx-2 py-[14px] px-7 rounded-3xl border-none
              outline-none shadow-sm text-white align-middle whitespace-nowrap button-animation"
              >
                Send Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
