import React, { useState, FC, useEffect } from "react";
import { Comments as IComments } from "../../utils/types";
import ReactMarkdown from "react-markdown";

interface IFormProps {
  id: string;
  comments?: IComments[];
}

const Form: FC<IFormProps> = ({ id, comments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [save, setSave] = useState(false);
  const [postComments, setPostComments] = useState(
    comments.filter((comment) => comment.status === "Approved") || []
  );
  const [showAlert, setShowAlert] = useState(false);
  const [sortComments, setSortComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const axiosConfig = {
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    setIsSubmitting(true);
    setName("");
    setEmail("");
    setWebsite("");
    setComment("");
    setShowAlert(true);
    fetch("/.netlify/functions/addComment", {
      method: "POST",
      headers: axiosConfig.header,
      body: JSON.stringify({
        name,
        email,
        website,
        message: comment,
        ID: id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        setIsSubmitting(false);
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.log("Error: ", err);
      });
    if (save && typeof window !== "undefined") {
      localStorage.setItem(
        "myInfo",
        JSON.stringify({
          name,
          email,
          website,
        })
      );
    }
  };

  function checkURL() {
    if (!~website.indexOf("https://")) {
      setWebsite("https://" + website);
    }
    return website;
  }

  useEffect(() => {
    const sorts = postComments?.sort((a, b) =>
      a.updatedAt > b.updatedAt ? -1 : 1
    );
    setSortComments(sorts);
  }, [postComments, comments]);

  useEffect(() => {
    setTimeout(() => setShowAlert(false), 2000);
  }, [showAlert === true]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const info = localStorage.getItem("myInfo");
      if (info) {
        const { name, email, website } = JSON.parse(info);
        setName(name);
        setEmail(email);
        setWebsite(website);
      }
    }
  }, []);

  return (
    <div className='py-10'>
      <div className='my-10'>
        <h3 className='font-sans text-2xl font-normal mb-3 text-[#212121] leading-5'>
          {sortComments?.length} Comments
        </h3>
        {sortComments?.map((comment) => {
          return (
            <div key={comment?.id} className='py-5 flex items-start'>
              <div
                className='m-1 mr-2 w-16 h-16 object-cover relative flex justify-center items-center rounded-full bg-gray-300 
                text-2xl text-gray-700 uppercase'
              >
                {comment?.name.charAt(0)}
              </div>
              <div className='mx-4 w-3/4'>
                <h3 className='text-2xl my-1 font-sans'>{comment?.name}</h3>
                <p className='text-gray-600 my-1 font-sans'>
                  {comment.updatedAt}
                </p>
                <div className='text-gray-600 my-1 font-sans'>
                  <p className='whitespace-pre-wrap'>
                    <ReactMarkdown>{comment?.message.message}</ReactMarkdown>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3 className='font-sans text-2xl font-normal mb-3 text-[#212121] leading-5'>
        Leave a Comment
      </h3>
      <form
        name='comments-queue'
        onSubmit={submitForm}
        className='grid md:grid-cols-3 grid-rows-1 gap-3'
      >
        <textarea
          id='comment'
          name='comment'
          rows={6}
          placeholder='Comment *'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className='md:col-span-3 w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black font-normal 
          text-sm'
          required
        />
        <label htmlFor='comment' hidden>
          Comment
        </label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Name *'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black font-normal text-sm'
          required
        />
        <label htmlFor='name' hidden>
          Name
        </label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Email *'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black font-normal text-sm'
          required
        />
        <label htmlFor='email' hidden>
          Email
        </label>
        <input
          name='website'
          type='url'
          placeholder='Website *'
          value={website}
          onBlur={checkURL}
          onChange={(e) => setWebsite(e.target.value)}
          className='w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black font-normal text-sm'
          required
        />

        <label htmlFor='website' hidden>
          Website
        </label>
        <p className='md:col-span-3 w-full mb-4 py-3 px-1 flex items-center'>
          <input
            id='checkbox'
            name='checkbox'
            type='checkbox'
            checked={save}
            onChange={() => setSave(!save)}
          />
          <label
            htmlFor='checkbox'
            className='font-sans text-[16px] font-medium ml-3 text-[#535353]'
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </p>
        {showAlert && (
          <div
            className='px-4 py-2 mb-4 col-span-3 text-sm text-gray-100 bg-green-600 rounded-lg w-max 
          flex items-center justify-between'
            onClick={() => setShowAlert(false)}
            role='alert'
          >
            <span className='font-medium'>
              Your comment is submitted for approval
            </span>
            <button
              type='button'
              className='bg-transparent text-gray-100 rounded-lg ml-5'
              data-collapse-toggle='alertId'
              aria-label='Close'
            >
              <span className='sr-only'>Dismiss</span>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        )}
        <button
          type='submit'
          disabled={isSubmitting}
          className='bg-primary w-min text-base font-medium mx-2 py-[14px] px-7 rounded-3xl border-none
              outline-none shadow-sm text-white align-middle whitespace-nowrap button-animation block'
        >
          Send Comment
        </button>
      </form>
    </div>
  );
};

export default Form;
