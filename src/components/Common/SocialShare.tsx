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
    <div className="flex items-center font-poppins">
      <span className="mr-2">Share:</span>
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={hashtags[0]}
        className="mx-2"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        hashtags={hashtags}
        className="mx-2"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} className="mx-2">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
