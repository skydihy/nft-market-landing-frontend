import * as React from "react";

// Components
import Layout from "components/Layout";
import HeroSection from "components/Sections/HeroSection";
import LiveAunctionSection from "components/Sections/LiveAunctionSection";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <LiveAunctionSection />
    </Layout>
  );
};

export default IndexPage;
