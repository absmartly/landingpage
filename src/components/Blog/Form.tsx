import React, { FormEvent, useState } from "react";
import { path } from "../../utils/utils";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const submitForm = (event) => {
    const encode = (data) => {
      const formData = new FormData();

      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }

      return formData;
    };
    event.preventDefault();
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": event.target.name,
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
    <div className="py-10">
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
