import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useClickAway } from "react-use";

// Assets
import Vector1 from "assets/svg/hero-vec1.svg";
import Vector2 from "assets/svg/hero-vec2.svg";
import ArrowDown from "assets/svg/arrow-down.svg";
import SearchIcon from "assets/svg/search.svg";

import * as styles from "styles/sections/Hero.module.scss";

const Category = {
  ARCHITECTURE: "Architecture",
  PHOTOGRAPHY: "Photography",
  GAMES: "Games",
  MUSIC: "Music",
};

const CategoryList = [
  Category.ARCHITECTURE,
  Category.PHOTOGRAPHY,
  Category.GAMES,
  Category.MUSIC,
];

const HeroSection = () => {
  const [showSelector, setShowSelector] = React.useState(false);
  const [currentCategory, setCurrentCategory] = React.useState(null);

  const searchFieldRef = React.useRef(null);

  function handleSearchField(category) {
    setCurrentCategory(category);
    setShowSelector(false);
  }

  function parseCategoryName(category, limitLength = 8) {
    if (category.length < limitLength) return category;

    return truncateString(category, limitLength);
  }

  function truncateString(text, limitLength) {
    return text.slice(0, limitLength) + "..";
  }

  useClickAway(searchFieldRef, () => {
    setShowSelector(false);
  });

  const renderCategoryList = React.useMemo(
    () => (
      <ul className={styles.selectorItemList}>
        {CategoryList.map((categoryName) => (
          <li onClick={() => handleSearchField(categoryName)}>
            {categoryName}
          </li>
        ))}
      </ul>
    ),
    [CategoryList]
  );

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
          quality={90}
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
          <input
            placeholder="Items, collections and creators"
            autoComplete="off"
          />
          <div className={styles.selector} ref={searchFieldRef}>
            <div
              className={styles.placeholder}
              onClick={() => setShowSelector((prev) => !prev)}
            >
              {currentCategory && (
                <label className="text-dark-90">
                  {parseCategoryName(currentCategory)}
                </label>
              )}

              {!currentCategory && (
                <label className="text-dark-90">Category</label>
              )}

              <ArrowDown className={styles.arrowDown} />
            </div>

            {showSelector && renderCategoryList}
          </div>
          <SearchIcon className={styles.btnSearch} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
