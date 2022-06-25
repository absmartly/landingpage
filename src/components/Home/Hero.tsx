import React, { FC, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { HeroProps } from "../../utils/types";
import Cookies from "js-cookie";

const Hero: FC<HeroProps> = ({ title, description }) => {
  const portalId = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
  const formId = process.env.FORM_ID;
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let firstName = name.split(" ").slice(0, -1).join(" ");
    let lastName = name.split(" ").slice(-1).join(" ");
    const isBrowser = typeof window !== "undefined";
    const hutk = isBrowser ? Cookies.get("hubspotutk") : null;
    const pageUri = isBrowser ? window.location.href : null;
    const pageName = isBrowser ? document.title : null;
    console.log(firstName, lastName);
    const postUrl = `https://api.hsforms.com/submissions/v3/integration/submit/20189991/48243ec1-df0f-4cd3-bc86-db322278f098`;
    var body = {
      submittedAt: Date.now(),
      fields: [
        {
          name: "firstname",
          value: firstName,
        },
        {
          name: "lastname",
          value: lastName,
        },
        {
          name: "company",
          value: businessName,
        },
        {
          name: "0-2/industry",
          value: industry,
        },
        {
          name: "email",
          value: email,
        },
        {
          name: "message",
          value: message,
        },
      ],
      context: {
        hutk,
        pageUri,
        pageName,
      },
    };

    fetch(postUrl, {
      method: "post",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data ==> ", data);
        setSuccessMsg(data.inlineMessage);
        setName("");
        setBusinessName("");
        setIndustry("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setShowMsg(false);
    }, 3000);
  }, [showMsg === true]);
  return (
    <section
      id="contact-us"
      className="bg-hero bg-no-repeat bg-center bg-cover bg-tertiary min-h-[700px] h-auto pt-20 pb-[180px] lg:h-[100vh] relative w-full"
    >
      <div className="relative z-[2] w-full top-auto left-auto translate-y-0 lg:top-1/2 lg:left-0 lg:-translate-y-1/2 h-auto">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-6xl">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="float-left w-full lg:w-1/2 relative min-h-[1px] z-10 text-left self-center">
              <div className="w-full px-[15px] box-border">
                <h2 className="text-[45px] leading-[45px] text-white text-center lg:text-left font-semibold font-work_sans">
                  {title}
                </h2>
                <div className="mt-4 mb-6 pb-4 font-normal">
                  <p className="text-lg lg:pr-[150px] tracking-[1px] font-poppins text-white text-center xs:text-left">
                    {description}
                  </p>
                </div>
              </div>
            </div>
            {/* Form Container */}
            <div className="w-full lg:w-1/2 mt-[10px] lg:mt-[250px] md:px-[60px] float-left relative box-border">
              <div className="w-full px-[15px] box-border">
                <form
                  className="py-5 px-[10px] bg-white rounded-lg shadow-form"
                  onSubmit={handleSubmit}
                >
                  {/* Form Header */}
                  <div className="box-border">
                    <div className="grow-0 shrink-0 basis-full px-[15px] mb-[25px]">
                      <h5 className="text-2xl mb-[5px] text-primary font-semibold font-work_sans">
                        Talk to us
                      </h5>
                      <h6 className="text-sm text-[#808080] font-medium mb-4 font-work_sans">
                        Want more info or talk about partnerships?
                      </h6>

                      <p className="text-sm text-[#808080] font-medium mb-4 font-work_sans">
                        {successMsg}
                      </p>
                    </div>
                  </div>
                  {/* Form Inputs */}
                  <div className="box-border">
                    {/* Inputs COntainer */}
                    <div className="shrink-0 grow-0 basis-full w-full px-[15px] font-poppins">
                      {/* Name */}
                      <div className="mb-4">
                        <span className="relative">
                          <input
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary"
                            type="text"
                            placeholder="NAME"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </span>
                      </div>
                      {/* Bussiness Name */}
                      <div className="mb-4">
                        <span className="relative">
                          <input
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary"
                            type="text"
                            placeholder="BUSINESS NAME"
                            required
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                          />
                        </span>
                      </div>
                      {/* Industry */}
                      <div className="mb-4">
                        <span className="relative">
                          <input
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary"
                            type="text"
                            required
                            placeholder="INDUSTRY"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                          />
                        </span>
                      </div>
                      {/* Email */}
                      <div className="mb-4">
                        <span className="relative">
                          <input
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary"
                            type="email"
                            placeholder="EMAIL"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </span>
                      </div>
                      {/* Message */}
                      <div className="mb-4">
                        <span className="relative">
                          <textarea
                            className="w-full rounded bg-white text-[#333] border-2 border-solid border-[#2b60ba24] outline-0 py-3 px-5 text-sm font-normal focus:outline-0 focus:border-primary overflow-auto resize-y"
                            rows={4}
                            required
                            placeholder="ANYTHING YOU'D LIKE TO KNOW MORE ABOUT?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </span>
                      </div>
                    </div>
                    {/* Button COntainer */}
                    <div className="shrink-0 grow-0 basis-full w-full px-[15px]">
                      <button
                        className="button-animation cursor-pointer bg-primary text-[13px] font-medium font-poppins tracking-[1px] border-none rounded-[25px] py-[12px] px-[28px] text-white text-center whitespace-nowrap align-middle"
                        type="submit"
                      >
                        Tell me more
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute max-w-[100vw] bottom-0 left-0 h-[5%] w-full bg-white z-[1] overflow-x-clip">
        <div className="bg-wave bg-repeat-x absolute -top-[100px] w-[6400px] h-[100px] animate-wave" />
        <div className="bg-wave bg-repeat-x absolute -top-[56px] w-[6400px] h-[100px] animate-wave2" />
      </div>
      <div className="  top-0 left-0 z-[0] w-full h-[calc(100%-100px)] overflow-hidden">
        <Particles
          id="tsparticles"
          className=" h-full"
          height="100%"
          options={{
            fpsLimit: 60,

            particles: {
              color: {
                value: "#dddddd",
              },
              links: {
                color: "#dddddd",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 52,
              },
              opacity: {
                value: 0.5,
              },
              size: {
                random: true,
                value: 5,
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
