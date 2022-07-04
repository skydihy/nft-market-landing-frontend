import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Components
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import PopularCard from "../../UI/PopularCard";

import * as styles from "styles/sections/Popular.module.scss";

const PopularSection = () => {
  const data = useStaticQuery(graphql`
    query popularQuery {
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "popularList" } } }
      ) {
        nodes {
          frontmatter {
            popularList {
              id
              imgPath {
                childImageSharp {
                  gatsbyImageData(width: 212, height: 335, quality: 85)
                }
              }
              name
              liked
              peopleBidding
              prices
              remainingTimes
            }
          }
        }
      }
    }
  `);

  const popularListResponse =
    data.allMarkdownRemark.nodes[0].frontmatter.popularList;

  const [currentCategory, setCurrentCategory] = React.useState("Photography");

  const memorizedPopularList = React.useMemo(() => {
    return popularListResponse.map((item) => (
      <PopularCard key={item.id} nft={item} width={212} />
    ));
  }, [popularListResponse]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.popularContainer}>
        <div className={styles.headingWrapper}>
          <p className={styles.subTitle}>Overline</p>
          <h4 className={styles.headingTitle}>Most popular live auctions</h4>
          <div className={styles.category}>
            <SecondaryButton
              title="Architecture"
              className={`${currentCategory === 0 ? styles.active : ""}`}
              onClick={() => setCurrentCategory(0)}
            />
            <SecondaryButton
              title="Photography"
              className={`${currentCategory === 1 ? styles.active : ""}`}
              onClick={() => setCurrentCategory(1)}
            />
            <SecondaryButton
              title="Games"
              className={`${currentCategory === 2 ? styles.active : ""}`}
              onClick={() => setCurrentCategory(2)}
            />
            <SecondaryButton
              title="Music"
              className={`${currentCategory === 3 ? styles.active : ""}`}
              onClick={() => setCurrentCategory(3)}
            />
          </div>
        </div>

        <div className={styles.popularList}>{memorizedPopularList}</div>

        <div className="mx-auto w-fit mt-[72px]">
          <SecondaryButton title="Show me more" />
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
