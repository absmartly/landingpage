import React from "react";

const Paragraph = ({ children, ...props }) => (
  <p
    {...props}
    className='font-poppins text-[17px] leading-7 text-left text-[#444444] mb-4'
  >
    {children}
  </p>
);

const Heading2 = ({ children, ...props }) => (
  <h2
    {...props}
    className='font-work_sans mb-[0.8rem] text-[40px] text-gray-800 tracking-[1.25]'
  >
    {children}
  </h2>
);

const Heading3 = ({ children, ...props }) => (
  <h3
    {...props}
    className='font-work_sans mb-[0.8rem] text-2xl text-gray-800 tracking-[1.25]'
  >
    {children}
  </h3>
);

const List = ({ children, ...props }) => {
  console.log(children, props);
  return (
    <ol {...props} className='list-decimal ml-8'>
      {children.map((item, index) => {
        return (
          <li key={index} className='font-poppins'>
            {item}
          </li>
        );
      })}
    </ol>
  );
};

export { Paragraph, Heading2, Heading3, List };
