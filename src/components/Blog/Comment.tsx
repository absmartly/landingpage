import React, { FC, useMemo } from "react";
import { toUrl } from "gatsby-source-gravatar";
import ReactMarkdown from "react-markdown";

interface CommentProps {
  id: string;
  email: string;
  name: string;
  message: string;
  updatedAt: string;
}

const Comment: FC<CommentProps> = ({ id, email, name, message, updatedAt }) => {
  const url = useMemo(() => toUrl(`${email}`, "size = 128"), []);
  return (
    <div key={id} className='py-5 flex items-start'>
      <div
        className='m-1 mr-2 w-16 h-16 object-cover relative flex justify-center items-center rounded-full bg-gray-300 
      text-2xl text-gray-700 uppercase overflow-hidden'
      >
        <img src={url} alt={name} className='w-full h-full rounded-full' />
      </div>
      <div className='mx-4 w-3/4'>
        <h3 className='text-2xl my-1 font-work_sans'>{name}</h3>
        <p className='text-gray-600 my-1 font-poppins'>{updatedAt}</p>
        <div className='text-gray-600 my-1 font-poppins'>
          <div className='whitespace-pre-wrap'>
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
