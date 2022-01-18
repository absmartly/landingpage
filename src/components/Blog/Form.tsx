import React, { useState, FC } from "react";
import { Comments as IComments } from "../../utils/types";

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
        setIsSubmitting(false);
        console.log("Response from server: ", res);
        setName("");
        setEmail("");
        setWebsite("");
        setComment("");
        return res.json();
      })
      .then((data) => {
        console.log("JSON DAta: ", data.comments);
        setPostComments(data.comments);
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.log("Error: ", err);
      });
  };
  return (
    <div className="py-10">
      <div className="px-10 my-10">
        <h3 className="font-work_sans text-2xl font-normal mb-3 text-[#212121] leading-5">
          Comments
        </h3>
        {postComments?.map((comment) => {
          return (
            <div key={comment.id} className="px-5 py-5 my-5">
              <p>{comment.name}</p>
              <p>{comment.email}</p>
              <p>{comment.website}</p>
              <p>{comment.message}</p>
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
