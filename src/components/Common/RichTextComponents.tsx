import React from "react";

const Paragraph = ({ children, ...props }) => (
  <p
    {...props}
    className='font-poppins text-[15px] leading-6 text-left text-[#535353] mb-4'
  >
    {children}
  </p>
);

const Heading2 = ({ children, ...props }) => (
  <h2
    {...props}
    className='font-work_sans mb-[0.8rem] text-[2.3rem] font-normal text-[#212121] tracking-[1.25]'
  >
    {children}
  </h2>
);

const Heading3 = ({ children, ...props }) => (
  <h3
    {...props}
    className='font-work_sans mb-[0.8rem] text-[2rem] font-normal text-[#212121] tracking-[1.25]'
  >
    {children}
  </h3>
);

const List = ({ children, ...props }) => {
  console.log(children, props);
  return (
    <ol {...props} className='list-decimal ml-8'>
      {children.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
};

const ImageComponent = ({ children, props }) => (
  <img
    className='font-work_sans mb-[0.8rem] text-[2rem] font-normal text-[#212121] tracking-[1.25]'
    src={props.url}
    alt='Img'
  />
);

export { Paragraph, Heading2, Heading3, List };
