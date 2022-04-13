import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const seo = {
  title: '',
  defaultTitle: '',
  description: '',
  image: '',
  url: '',
  twitter: '',
};

const SEO = ({ title, description, image }) => {
  return (
    <Head title={title} defaultTitle={seo.title} titleTemplate={`%s | ${seo.defaultTitle}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};
