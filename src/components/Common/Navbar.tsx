import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "gatsby";

let navLinks = [
  {
    name: "Contact Us",
    linkHome: "contact-us",
    link: "/#contact-us",
  },
  {
    name: "Unlimited Growth",
    linkHome: "unlimited-growth",
    link: "/#unlimited-growth",
  },
  {
    name: "Experimentation",
    linkHome: "experimentation",
    link: "/#experimentation",
  },
  {
    name: "About",
    linkHome: "about",
    link: "/#about",
  },
  {
    name: "FAQ",
    linkHome: "faq",
    link: "/#faq",
  },
];
const Navbar = ({ home }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("contact-us");
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  function handleSetActive(to: string) {
    setActive(to);
  }

  return (
    <div className="relative lg:fixed w-full mx-auto my-0 py-[10px] top-0 left-0 bg-white z-50 shadow-md">
      <div
        className={`w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl 
        transform transition-[height] duration-200 ease-in-out ${
          isOpen ? "h-[300px]" : "h-12"
        }`}
      >
        <div className="flex justify-between flex-wrap items-center my-auto">
          <Link to="/" className="max-w-[220px] cursor-pointer">
            <StaticImage
              className="max-w-full"
              src="https://absmartly.com/wp-content/uploads/2020/01/logo2.png"
              alt="Logo"
            />
          </Link>
          <nav className="grow hidden lg:flex justify-end items-center">
            {home
              ? navLinks.map((link, index) => (
                  <LinkScroll
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={index}
                    to={link.linkHome}
                    onSetActive={handleSetActive}
                    className={`mr-3 p-1 text-[13px] font-poppins font-medium uppercase cursor-pointer
                 hover:text-primary active:border-b-2 hover:border-b-2 hover:border-primary ${
                   link.linkHome === active
                     ? "border-b-2 border-solid border-b-primary text-primary"
                     : "text-secondary"
                 }`}
                  >
                    {link.name}
                  </LinkScroll>
                ))
              : navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    onClick={() => handleSetActive(link.linkHome)}
                    className={`mr-3 p-1 text-[13px] font-poppins font-medium uppercase cursor-pointer
                 hover:text-primary active:border-b-2 active:border-b-primary active:text-primary hover:border-b-2 hover:border-primary ${
                   link.linkHome === active
                     ? "border-b-2 border-solid border-b-primary text-primary"
                     : "text-secondary"
                 }`}
                  >
                    {link.name}
                  </Link>
                ))}
            <button
              className="button-animation mr-3 px-7 py-3 text-[13px] font-poppins font-medium uppercase text-white
               bg-primary rounded-full cursor-pointer"
              type="button"
            >
              Talk to an Expert
            </button>
          </nav>
          <div className="block lg:hidden">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 text-black cursor-pointer"
                onClick={handleClick}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleClick}
              >
                <span className="w-[22px] h-[2px] block bg-black mb-[7px]" />
                <span className="w-[30px] h-[2px] block bg-black mb-[7px]" />
                <span className="w-[22px] h-[2px] block bg-black mb-[7px]" />
              </button>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="block basis-full grow flex-1 lg:hidden">
            <ul className="flex flex-col list-none py-9">
              {home
                ? navLinks.map((link, index) => (
                    <li
                      key={index}
                      className="mr-3 p-1 text-[13px] font-poppins font-medium uppercase text-secondary hover:text-primary active:border-b-primary hover:border-b-2 hover:border-primary"
                    >
                      <LinkScroll to={link.linkHome}>{link.name}</LinkScroll>
                    </li>
                  ))
                : navLinks.map((link, index) => (
                    <li
                      key={index}
                      className="mr-3 p-1 text-[13px] font-poppins font-medium uppercase text-secondary hover:text-primary active:border-b-primary hover:border-b-2 hover:border-primary"
                    >
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
            </ul>
            <button
              className=" button-animation mr-3 px-7 py-3 text-[13px] font-poppins font-medium uppercase text-white bg-primary rounded-full cursor-pointer"
              type="button"
            >
              Talk to an Expert
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
