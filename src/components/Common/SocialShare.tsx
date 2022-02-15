import React, { FC } from "react";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { url } from "../../utils/utils";

interface ShareProps {
  title: string;
  tags: string[];
}
const SocialShare: FC<ShareProps> = ({ title, tags }) => {
  const hashtags = tags.map((tag) => {
    return tag.replace(/\s/g, "").replace(/\//g, "");
  });
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='font-sans text-base text-gray-800 mb-2'>Share</span>
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={hashtags[0]}
        className='my-1'
      >
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        hashtags={hashtags}
        className='my-1'
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} className='my-1'>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
