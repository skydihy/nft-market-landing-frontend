import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Assets
import Vector1 from "assets/svg/hero-vec1.svg";
import Vector2 from "assets/svg/hero-vec2.svg";
import ArrowDown from "assets/svg/arrow-down.svg";
import SearchIcon from "assets/svg/search.svg";

import * as styles from "styles/sections/Hero.module.scss";

const HeroSection = () => {
  const [showSelector, setShowSelector] = React.useState(false);
  const [currentCategory, setCurrentCategory] = React.useState(null);

  function handleSearchField(category) {
    setCurrentCategory(category);
    setShowSelector(false);
  }

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
          className={styles.blurLayer}
          src="../../../images/sections/hero/blur-bg.png"
          alt="Blur layer"
          objectFit="contain"
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
          <span className={styles.firstRow}>
            A new NFT
            <span className="ml-2">
              <Vector1 />
            </span>
          </span>
          <span className={styles.ndRow}>
            <span className="-mb-6 mr-[1.125rem]">
              <Vector2 />
            </span>
            Experience
          </span>
        </p>
        <p className={styles.subTitleBottom}>Discover, collect and sell</p>
        <div className={styles.inputContainer}>
          <div className={styles.selector}>
            <div
              className={styles.placeholder}
              onClick={() => setShowSelector((prev) => !prev)}
            >
              {currentCategory ? (
                <span className="text-dark-90">{currentCategory}</span>
              ) : (
                <span className="text-dark-90">Category</span>
              )}
              <ArrowDown className={styles.arrowDown} />
            </div>

            {showSelector && (
              <ul className={styles.selectorItemList}>
                <li onClick={() => handleSearchField("Abstract")}>Abstract</li>
                <li onClick={() => handleSearchField("Paints")}>Paints</li>
                <li onClick={() => handleSearchField("Portraits")}>
                  Portraits
                </li>
              </ul>
            )}
          </div>
          <SearchIcon className={styles.btnSearch} />
          <input
            placeholder="Items, collections and creators"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
