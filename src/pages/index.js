import * as React from "react";

// Components
import Layout from "components/Layout";
import HeroSection from "components/Sections/HeroSection";
import BucketOverlineSection from "../components/Sections/BucketOverlineSection";
import LiveAunctionSection from "components/Sections/LiveAunctionSection";
import YellowOverlineSection from "../components/Sections/YellowOverlineSection";
import ArtworksSection from "../components/Sections/ArtworksSection";
import FolderSection from "../components/Sections/FolderSection";
import PopularSection from "../components/Sections/PopularSection";
import EthScrolling from "../components/Sections/EthScrolling";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <LiveAunctionSection />
      <BucketOverlineSection />
      <YellowOverlineSection />
      <PopularSection />
      <ArtworksSection />
      <FolderSection />
      <EthScrolling />
    </Layout>
  );
};

export default IndexPage;
