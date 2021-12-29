import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "gatsby";

const About = () => {
  return (
    <section className="py-20 px-[180px] bg-about bg-primary bg-no-repeat bg-position bg-blend-soft-light bg-fixed relative overflow-hidden w-full block pattern before:w-1/2">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="float-left w-full md:w-1/2 relative text-left box-border">
            <div className="w-full px-[15px] mb-[60px] box-border">
              <h4 className="text-[40px] font-bold mb-5 text-white">
                Built for product teams
              </h4>
              <div className="mb-4">
                <p className="text-white font-medium mb-4">
                  From some of the minds that powered Booking.com’s
                  experimentation platform, comes A/B Smartly.
                </p>
                <p className="text-white font-medium mb-4">
                  Our vision is to democratize experimentation across
                  organizations. We want to empower product teams to A/B test
                  every change on their own and use the data to answer any
                  question they might have.
                </p>
                <p className="text-white font-medium mb-4">
                  A/B Smartly helps you understand the "why". A/B tests make it
                  very easy to measure the impact of your changes, but not so
                  easy to understand why the visitors are demonstrating a
                  specific behaviour, or why a test works or doesn't work.
                </p>
                <p className="text-white font-medium mb-4">
                  With A/B Smartly the data lake stays on your side, you can
                  easily create custom reports or even query it with external
                  tools like Looker or Tableau. Answer all your questions in
                  minutes instead of days or weeks.
                </p>
                <p className="text-white font-medium mb-4">
                  <Link to="/">Learn more</Link>
                </p>
              </div>
              <Link
                to="/"
                className="button-animation cursor-pointer bg-white text-[13px] font-medium font-poppins tracking-[1px] border-none rounded-[25px] py-3 px-7 text-primary text-center whitespace-nowrap align-middle"
                type="submit"
              >
                Tell me more
              </Link>
            </div>
          </div>
          <div className="float-left w-full md:w-[41%] ml-[9%] relative text-left box-border"></div>
        </div>
      </div>
      <div className="hidden md:block absolute max-w-[100vw] bottom-0 left-0 h-[5%] w-full bg-white z-[1] overflow-x-clip">
        <div className="bg-wave bg-repeat-x absolute top-[-100px] w-[6400px] h-[100px] animate-wave" />
        <div className="bg-wave bg-repeat-x absolute top-[-56px] w-[6400px] h-[80px] animate-wave2" />
      </div>
    </section>
  );
};

export default About;
