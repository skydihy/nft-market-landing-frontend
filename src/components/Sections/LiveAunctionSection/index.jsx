import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Components
import NftCard from "../../UI/NftCard";

import * as styles from "styles/sections/LiveAunction.module.scss";

const LiveAunctionSection = () => {
  const data = useStaticQuery(graphql`
    query liveAunctionQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            liveAunctionList {
              id
              imgPath {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP, AVIF]
                    quality: 90
                  )
                }
              }
              name
              liked
              peopleBinding
              poepleLikes
              prices
              remainingTimes
            }
          }
        }
      }
    }
  `);

  const LIVE_AUNCTION_LIST =
    data.allMarkdownRemark.nodes[0].frontmatter.liveAunctionList;

  return (
    <div className={styles.aunctionPageWrapper}>
      <div className={styles.aunctionContainer}>
        <h4>Latest live auctions</h4>
        <div className={styles.aunctionHorizontal}>
          {LIVE_AUNCTION_LIST.map((item) => (
            <NftCard key={item.id} width={448} padding={24} nft={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAunctionSection;
