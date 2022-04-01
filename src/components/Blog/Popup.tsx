import React, { FC } from "react";
import { XIcon } from "@heroicons/react/solid";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { POPUP_STATE } from "../../Template/Blog";
import { IsURL } from "../../utils/utils";

interface PopupProps {
  image?: IGatsbyImageData;
  title: string;
  description: string;
  buttonText: string;
  slug: string;
  setPopup: (popup: POPUP_STATE) => void;
}

const Popup: FC<PopupProps> = ({
  image,
  title,
  description,
  buttonText,
  slug,
  setPopup,
}) => {
  return (
    <div className="fixed w-screen h-screen bg-black/40 z-50">
      <div className="fixed w-[90%] h-auto sm:w-[80%] md:w-[50%] top-1/4 left-1/2 transform -translate-y-1/4 -translate-x-1/2 z-50">
        <div className="w-full bg-white h-full relative rounded-md pb-5">
          <div
            className="absolute top-0 right-0 -mt-2 -mr-2 bg-white/90 rounded-full w-8 h-8 border-2 border-solid border-gray-200
          flex items-center justify-center z-50"
          >
            <button
              className="text-xl leading-none font-bold font-poppins text-gray-800"
              onClick={() => {
                setPopup(POPUP_STATE.CLOSED);
              }}
            >
              <XIcon className="w-4 h-4 object-contain" />
            </button>
          </div>
          <GatsbyImage
            image={image}
            alt={title}
            className="w-full"
            objectFit="contain"
          />
          <div className="p-4 text-center my-5 h-auto">
            <h2 className="text-xl font-work_sans font-bold text-gray-800">
              {title}
            </h2>
            <p className="text-base font-work_sans text-gray-700 my-2">
              {description}
            </p>
            <a
              href={`${IsURL(slug) ? `${slug}` : `/blog${slug}`}`}
              target="_blank"
              className="button-animation mr-3 px-7 py-3 text-[13px] font-poppins font-medium uppercase text-white bg-primary rounded-full
               cursor-pointer my-5"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
