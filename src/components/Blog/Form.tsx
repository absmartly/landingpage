import React, { useState, FC, useEffect } from "react";
import { Comments as IComments } from "../../utils/types";
import moment from "moment";

interface IFormProps {
  id: string;
  comments: IComments[];
}

const Form: FC<IFormProps> = ({ id, comments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState(comments);
  const [sortComments, setSortComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function getTime(time: number) {
    return new Date(time).toDateString();
  }
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
      .then((data) => {
        setPostComments(data.comments);
        setIsSubmitting(false);
        setName("");
        setEmail("");
        setWebsite("");
        setComment("");
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    const sorts = postComments.sort((a, b) =>
      a.timestamp > b.timestamp ? -1 : 1
    );
    setSortComments(sorts);
  }, [postComments, comments]);

  return (
    <div className="py-10">
      <div className="my-10">
        <h3 className="font-work_sans text-2xl font-normal mb-3 text-[#212121] leading-5">
          {sortComments.length} Comments
        </h3>
        {sortComments?.map((comment) => {
          return (
            <div key={comment.id} className="py-5 flex items-start">
              <div
                className="m-1 mr-2 w-16 h-16 relative flex justify-center items-center rounded-full bg-gray-300 
                text-2xl text-gray-700 uppercase"
              >
                {comment.name.charAt(0)}
              </div>
              <div className="mx-4">
                <h3 className="text-2xl my-1 font-work_sans">{comment.name}</h3>
                <p className="text-gray-600 my-1 font-poppins">
                  {getTime(comment.timestamp * 1000)}
                </p>
                <p className="text-gray-600 my-1 font-poppins">
                  {comment.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h3 className="font-work_sans text-2xl font-normal mb-3 text-[#212121] leading-5">
        Leave a Comment
      </h3>
      <form
        name="comments-queue"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={submitForm}
        className="grid md:grid-cols-3 grid-rows-1 gap-3"
      >
        <input type="hidden" name="form-name" value="comments-queue" />
        <textarea
          id="comment"
          name="comment"
          rows={6}
          placeholder="Comment *"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="md:col-span-3 w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black
                font-normal text-sm"
        />
        <label htmlFor="comment" hidden>
          Comment
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black
                font-normal text-sm"
        />
        <label htmlFor="name" hidden>
          Name
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black
                font-normal text-sm"
        />
        <label htmlFor="email" hidden>
          Email
        </label>
        <input
          name="website"
          type="url"
          placeholder="Website *"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full mb-4 bg-[#2b60ba14] outline-0 border-0 py-3 px-5 text-black
                font-normal text-sm"
        />
        <label htmlFor="website" hidden>
          Website
        </label>
        <p className="md:col-span-3 w-full mb-4 py-3 px-1 flex items-center">
          <input id="checkbox" name="checkbox" type="checkbox" />
          <label
            htmlFor="checkbox"
            className="font-poppins text-[16px] font-medium ml-3 text-[#535353]"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary w-min text-[13px] font-medium mx-2 py-[14px] px-7 rounded-3xl border-none
              outline-none shadow-sm text-white align-middle whitespace-nowrap button-animation"
        >
          Send Comment
        </button>
      </form>
    </div>
  );
};

export default Form;
