import { Link } from "react-scroll";
import React, { FC } from "react";

interface IAccordion {
  title: string;
  content: string;
  id: number;
  selectedItem: number | null;
  setSelectedItem: (id: number | null) => void;
}
const Accordion: FC<IAccordion> = ({
  title,
  content,
  id,
  selectedItem,
  setSelectedItem,
}) => {
  function handleChange() {
    if (selectedItem === id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(id);
    }
  }
  return (
    <div className="relative flex flex-col break-words bg-clip-border bg-transparent border-none rounded-none mb-[15px]">
      <div className="p-0 mb-0 bg-transparent border-b-0 rounded-tl-custom rounded-tr-custom break-words">
        <div
          className={`font-semibold font-work_sans text-base shadow-md shadow-[#00000014] border-b border-solid border-b-primary 
          relative w-full block py-3 px-6 transition-all duration-200 ease-linear bg-white hover:bg-primary 
          text-[#212121] hover:text-white cursor-pointer accordion ${
            selectedItem === id ? "after:rotate-90" : "after:rotate-0"
          }`}
          onClick={handleChange}
        >
          {title}
        </div>
        <div
          className={`${
            selectedItem === id ? "max-h-screen" : "max-h-0"
          } break-words transform transition-all duration-200 ease-in-out overflow-hidden`}
        >
          <div className="bg-white p-5 grow shrink basis-auto">
            <p className="leading-[26px] font-poppins text-sm text-[#333333] font-medium mb-4">
              {content ?? (
                <span>
                  We want to hear it!{" "}
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="contact-us"
                    className="text-primary"
                  >
                    Fill in the form
                  </Link>
                  , and we will respond within 24 hours.
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
