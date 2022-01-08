import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <html lang="en" />
      <title>Home - In-house experimentation platform | A/B Smartly</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Knowledge based and engineering centric experimentation platform where multiple teams can run hundreds or thousands of simultaneous experiments without stepping on each other toes, with transparency to all stakeholders, and full visibility about possible interactions."
      />
    </Helmet>
  );
};

export default SEO;
