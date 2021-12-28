import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";

const navLinks = [
  {
    name: "Contact Us",
    link: "#contact-us",
  },
  {
    name: "Unlimited Growth",
    link: "#unlimited-growth",
  },
  {
    name: "Experimentation",
    link: "#experimentation",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "FAQ",
    link: "#faq",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full mx-auto my-0 py-[10px] top-0 left-0 bg-white z-50">
      <div
        className={`w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl transform transition-[height] duration-200 ease-in-out ${
          isOpen ? "h-[300px]" : "h-12"
        }`}
      >
        <div className="flex justify-between flex-wrap items-center my-auto">
          <Link to="/" className="max-w-[220px]">
            <StaticImage
              className="max-w-full"
              src="https://absmartly.com/wp-content/uploads/2020/01/logo2.png"
              alt="Logo"
            />
          </Link>
          <nav className="grow hidden lg:flex justify-end items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="mr-3 p-1 text-[13px] font-poppins font-medium uppercase text-secondary hover:text-primary active:border-b-primary hover:border-b-2 hover:border-primary"
              >
                {link.name}
              </Link>
            ))}
            <button
              className="mr-3 px-7 py-3 text-[13px] font-poppins font-medium uppercase text-white bg-primary rounded-full cursor-pointer"
              type="button"
            >
              Talk to an Expert
            </button>
          </nav>
          <div className="block lg:hidden">
            {isOpen ? (
              <XIcon
                className="w-9 text-black cursor-pointer"
                onClick={handleClick}
              />
            ) : (
              <div
                className="cursor-pointer"
                role="button"
                onClick={handleClick}
              >
                <span className="w-[22px] h-[2px] block bg-black mb-[7px]" />
                <span className="w-[30px] h-[2px] block bg-black mb-[7px]" />
                <span className="w-[22px] h-[2px] block bg-black mb-[7px]" />
              </div>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="block basis-full grow flex-1 lg:hidden">
            <ul className="flex flex-col list-none py-9">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="mr-3 p-1 text-[13px] font-poppins font-medium uppercase text-secondary hover:text-primary active:border-b-primary hover:border-b-2 hover:border-primary"
                >
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <button
              className="mr-3 px-7 py-3 text-[13px] font-poppins font-medium uppercase text-white bg-primary rounded-full cursor-pointer"
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
