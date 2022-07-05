import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, useStaticQuery } from "gatsby";

// Components
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import SecondaryButton from "../../UI/Buttons/SecondaryButton";
import HotCard from "../../sections/TripleSection/HotCard";
import RankCard from "./RankCard";

import * as styles from "styles/sections/Triple.module.scss";

const TripleSection = () => {
  const data = useStaticQuery(graphql`
    query tripleQuery {
      getHotList: markdownRemark(
        frontmatter: { title: { eq: "hotsaleList" } }
      ) {
        frontmatter {
          title
          hotsaleList {
            id
            name
            prices
            remainingTimes
            peopleBidding
            liked
            imgPath {
              childImageSharp {
                gatsbyImageData(width: 212, quality: 80)
              }
            }
          }
        }
      }
      getRankList: markdownRemark(frontmatter: { title: { eq: "rankList" } }) {
        frontmatter {
          title
          rankList {
            id
            name
            prices
            remainingTimes
            peopleBidding
            liked
            imgPath {
              childImageSharp {
                gatsbyImageData(width: 120, quality: 80)
              }
            }
          }
        }
      }
    }
  `);

  const hotItemListResponse = data.getHotList.frontmatter.hotsaleList;
  const rankListItemResponse = data.getRankList.frontmatter.rankList;

  const swiperConfigs = {
    direction: "horizontal",
    rebuildonupdate: "false",
    shouldswiperupdate: "false",
    slidesPerView: "auto",
    spaceBetween: 24,
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.tripleContainer}>
        <div className={styles.leftContainer}>
          <h5>Check out the hottest Sale offers</h5>
          <div className="mt-2">
            <Swiper {...swiperConfigs} className="!pr-8">
              {hotItemListResponse.map((item) => (
                <SwiperSlide className="!w-[212px]" key={item.id}>
                  <HotCard nft={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-16 mr-[40px]">
            <SecondaryButton title="Show me more" />
          </div>
        </div>

        <div className={styles.middleContainer}>
          <div className={styles.pleatWrapper}>
            <StaticImage
              className={styles.iamgeWrapper}
              src="../../../images/sections/triple/pleat.png"
              alt="Pleat"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div className={styles.descriptionBox}>
            <StaticImage
              className={styles.iamgeWrapper}
              src="../../../images/sections/triple/hand.png"
              alt="Hand"
              objectFit="contain"
              quality={95}
            />
            <div>
              <p
                className={styles.title}
              >{`Get started creating & selling your NFTs`}</p>
              <p className={styles.description}>
                Nunc gravida faucibus netus feugiat tellus, viverra massa
                feugiat. Mi est sit.
              </p>
              <div className="mt-[38px]">
                <PrimaryButton title="Get started" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <h5>Top NFT at a lower price</h5>
          {rankListItemResponse.map((item) => (
            <RankCard key={item.id} nft={item} />
          ))}

          <div className="mt-16">
            <SecondaryButton title="Show me more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleSection;
