import { Link } from "gatsby";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-work_sans font-black">
        Page not found
      </h2>
      <Link
        to="/"
        className="text-white px-6 py-2 rounded-full bg-primary mt-5"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
