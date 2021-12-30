import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className="relative bg-primary w-full py-4">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-col justify-between flex-wrap items-center lg:flex-row my-auto mr-3 p-1 text-[13px] font-poppins font-medium uppercase text-white">
          <p className="font-poppins text-center">
            Copyright 2020 - A/B Smartly | <Link to="/">Terms</Link> |{" "}
            <Link to="/">Privacy Policy</Link> |{" "}
            <Link to="/">GDPR &amp; HIPAA</Link>
          </p>
          <div className="mt-8 lg:mt-0">
            <StaticImage
              className="w-4 h-4 object-contain mr-3 ml-3 cursor-pointer"
              src="../assets/twitter.png"
              alt="Twitter"
            />
            <StaticImage
              className="w-4 h-4 object-contain mr-3 ml-3 cursor-pointer"
              src="../assets/linkedin.png"
              alt="LinkedIn"
            />
            <StaticImage
              className="w-4 h-4 object-contain mr-3 ml-3 cursor-pointer"
              src="../assets/facebook.png"
              alt="Facebook"
            />
            <StaticImage
              className="w-4 h-4 object-contain mr-3 ml-3 cursor-pointer"
              src="../assets/git.png"
              alt="Git"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
