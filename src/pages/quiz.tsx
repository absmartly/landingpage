import React from "react";
import Layout from "../components/Common/Layout";
import JotFormReact from "jotform-react";

const Quiz = () => {
  return (
    <Layout>
      <section
        id='contact-us'
        className='bg-hero bg-no-repeat bg-center bg-cover bg-tertiary pt-20 pb-14 h-full w-full'
      >
        <JotFormReact
          formURL='https://form.jotform.com/210834147847359'
          formID='210834147847359'
          initialHeight={900}
          autoResize={false}
        />
      </section>
    </Layout>
  );
};

export default Quiz;
