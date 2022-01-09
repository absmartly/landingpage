import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 bg-primary w-full py-4">
      <div className="relative w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
        <div className="flex flex-col justify-between flex-wrap items-center lg:flex-row my-auto mr-3 p-1 text-[13px] font-poppins font-medium uppercase text-white">
          <p className="font-poppins text-center text-[#a3b0bd]">
            Copyright 2020 - A/B Smartly |{" "}
            <Link to="/" className="text-white">
              Terms
            </Link>{" "}
            |{" "}
            <Link to="/" className="text-white">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/" className="text-white">
              GDPR &amp; HIPAA
            </Link>
          </p>
          <div className="mt-8 lg:mt-0">
            <a href="https://twitter.com/absmartly" target="_blank">
              <StaticImage
                className="w-4 h-4 object-contain mr-3 ml-3 cursor-pointer"
                src="../../assets/twitter.svg"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/absmartly"
              target="_blank"
            >
              <StaticImage
                className="w-4 h-4 object-contain mr-3 ml-3 cursor-pointer"
                src="../../assets/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a href="https://www.facebook.com/absmartly" target="_blank">
              <StaticImage
                className="w-4 h-4 object-contain mr-3 ml-3 cursor-pointer"
                src="../../assets/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="https://github.com/absmartly/" target="_blank">
              <StaticImage
                className="w-4 h-4 object-contain mr-3 ml-3 cursor-pointer"
                src="../../assets/git.png"
                alt="Git"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
