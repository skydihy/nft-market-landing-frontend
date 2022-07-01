import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

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
              peopleBidding
              poepleLikes
              prices
              remainingTimes
              profileCoverPathList {
                childImageSharp {
                  gatsbyImageData(
                    width: 32
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP, AVIF]
                    quality: 90
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const LIVE_AUNCTION_LIST =
    data.allMarkdownRemark.nodes[0].frontmatter.liveAunctionList;

  const aunctionRef = React.useRef(null);

  const [perView, setPerView] = React.useState(0);

  const swiperConfigs = {
    modules: [Autoplay],
    direction: "horizontal",
    loop: true,
    rebuildonupdate: "false",
    shouldswiperupdate: "false",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: perView,
    speed: 6000,
    centeredSlides: true,
    spaceBetween: 24,
  };

  React.useEffect(() => {
    if (aunctionRef) {
      setPerView(parseInt(aunctionRef.current?.offsetWidth / 400));
      window.addEventListener("resize", () =>
        setPerView(parseInt(aunctionRef.current?.offsetWidth / 400))
      );
    }
  }, [aunctionRef]);

  const memorizedAunctionList = React.useMemo(() => {
    return LIVE_AUNCTION_LIST.map((item) => (
      <SwiperSlide key={item.id}>
        <NftCard
          key={item.id}
          width={448}
          padding={24}
          nft={item}
          showProfile
        />
      </SwiperSlide>
    ));
  }, [LiveAunctionSection]);

  return (
    <div className={styles.aunctionPageWrapper}>
      <div className={styles.aunctionContainer}>
        <h4>Latest live auctions</h4>
        <div className={styles.aunctionHorizontal} ref={aunctionRef}>
          <Swiper {...swiperConfigs}>{memorizedAunctionList}</Swiper>
        </div>
      </div>
    </div>
  );
};

export default LiveAunctionSection;
