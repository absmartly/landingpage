import React, { FormEvent, useRef, useState } from "react";
import { path } from "../../utils/utils";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const submitForm = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "comments-queue",
        name,
        email,
        website,
        comment,
        path: path,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thanks for your comment!");
          setName("");
          setEmail("");
          setWebsite("");
          setComment("");
        }
      })
      .catch((error) => console.log("Error ==> ", error));
  };
  return (
    <form
      name="comments-queue"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/blog"
      className="grid md:grid-cols-3 grid-rows-1 gap-3"
    >
      <input type="hidden" name="bot-field" />
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
  );
};

export default Form;
