import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "styles/sections/Hero.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.backgroundWrapper}>
        <StaticImage
          className={styles.squares}
          src="../../../images/sections/hero/squares-bg.png"
          alt="Square Nfts background"
          objectFit="contain"
          quality={95}
        />
        <StaticImage
          className={styles.littleCircles}
          src="../../../images/sections/hero/little-circles-bg.png"
          alt="Little circle background"
          objectFit="contain"
        />
        <div className={styles.gradient} />
        <StaticImage
          className={styles.circles}
          src="../../../images/sections/hero/circles-bg.png"
          alt="Orbital circle background"
          objectFit="cover"
        />
      </div>
      <div className={styles.heroContainer}>
        <p className={styles.subTitleTop}>Non Fungible Tokens</p>
        <p className={styles.heroTitle}>
          <span>A new NFT</span>
          <span>Experience</span>
        </p>
        <p className={styles.subTitleBottom}>Discover, collect and sell</p>
        <div className={styles.inputContainer}>
          <input placeholder="Items, collections and creators" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
