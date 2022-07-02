import * as React from "react";

// Components
import Layout from "components/Layout";
import HeroSection from "components/Sections/HeroSection";
import OverlineSection from "../components/Sections/OverlineSection";
import LiveAunctionSection from "components/Sections/LiveAunctionSection";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <LiveAunctionSection />
      <OverlineSection />
    </Layout>
  );
};

export default IndexPage;
