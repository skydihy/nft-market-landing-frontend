import * as React from "react";

// Components
import Layout from "components/Layout";
import HeroSection from "components/Sections/HeroSection";
import BucketOverlineSection from "../components/Sections/BucketOverlineSection";
import LiveAunctionSection from "components/Sections/LiveAunctionSection";
import YellowOverlineSection from "../components/Sections/YellowOverlineSection";
import ArtworksSection from "../components/Sections/ArtworksSection";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <LiveAunctionSection />
      <BucketOverlineSection />
      <YellowOverlineSection />
      <ArtworksSection />
    </Layout>
  );
};

export default IndexPage;
