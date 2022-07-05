import * as React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../../hooks";

const DefaultSeo = {
  title: "Nft Market - Landing",
  description:
    "A new NFT experience | Non Fungible Tokens, Discover | collect and sell",
  siteUrl: `http://localhost:8000/`,
};

const Seo = () => {
  const { title, description, siteUrl } = useSiteMetadata();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? title : DefaultSeo.title}</title>
      <meta
        property="og:url"
        content={siteUrl ? siteUrl : DefaultSeo.siteUrl}
      />
      <meta
        name="description"
        content={description ? description : DefaultSeo.description}
      />
      <meta
        property="og:description"
        content={description ? description : DefaultSeo.description}
      />
      <meta
        name="twitter:description"
        content={description ? description : DefaultSeo.description}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Seo;
