import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Questions } from "../../utils/types";

interface Faq {
  id: string;
  title: string;
  questions: Questions[];
}

interface ISEOProps {
  title: string;
  seoTitle?: string;
  description?: string;
  path: string;
  createdAt?: string;
  updatedAt?: string;
  estTime?: string;
  author?: string;
  type?: string;
  data?: Faq | null;
}

const SEO: FC<ISEOProps> = ({
  title,
  seoTitle,
  description,
  path,
  createdAt,
  updatedAt,
  author,
  estTime,
  type,
  data,
}) => {
  const questions = data?.questions.map((question, index) => {
    return {
      "@type": "Question",
      name: question.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: question.answer.answer,
      },
    };
  });
  const JsonLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions,
  };

  return (
    <Helmet>
      <html lang='en' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='canonical' href={path} />
      <link
        rel='webmention'
        href='https://webmention.io/absmartly.com/webmention'
      />
      <link rel='pingback' href='https://webmention.io/absmartly.com/xmlrpc' />
      <title>{title}</title>
      <meta property='og:locale' content='en_US' />
      {type && <meta property='og:type' content='article' />}
      <meta property='og:title' content={seoTitle ?? title} />
      {description && <meta name='description' content={description} />}
      {description && <meta property='og:description' content={description} />}
      <meta property='og:url' content={path} />
      <meta
        property='og:site_name'
        content='In-house experimentation platform | A/B Smartly'
      />
      {createdAt && (
        <meta property='article:published_time' content={createdAt} />
      )}
      {updatedAt && (
        <meta property='article:modified_time' content={updatedAt} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      {author && <meta name='twitter:label1' content='Written by' />}
      {author && <meta name='twitter:data1' content={author} />}
      {author && <meta name='twitter:label2' content='Est. reading time' />}
      {author && <meta name='twitter:data2' content={estTime} />}
      {data && (
        <script type='application/ld+json'>{JSON.stringify(JsonLD)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
