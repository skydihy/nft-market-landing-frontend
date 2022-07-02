import * as React from "react";

// Components
import Layout from "components/Layout";
import HeroSection from "components/Sections/HeroSection";
import BucketOverlineSection from "../components/Sections/BucketOverlineSection";
import LiveAunctionSection from "components/Sections/LiveAunctionSection";
import YellowOverlineSection from "../components/Sections/YellowOverlineSection";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <LiveAunctionSection />
      <BucketOverlineSection />
      <YellowOverlineSection />
    </Layout>
  );
};

export default IndexPage;
