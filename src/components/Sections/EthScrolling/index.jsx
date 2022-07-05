import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "styles/sections/EthScrolling.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const EthScrolling = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "ethList" } }) {
        frontmatter {
          title
          ethList {
            id
            prices
            imgPath {
              childImageSharp {
                gatsbyImageData(width: 89, quality: 80)
              }
            }
          }
        }
      }
    }
  `);

  const itemListResponse = markdownRemark.frontmatter.ethList;

  const itemRef = React.useRef(null);

  const [perView, setPerView] = React.useState(0);

  const swiperConfigs = {
    modules: [Autoplay],
    direction: "horizontal",
    loop: true,
    rebuildonupdate: "false",
    shouldswiperupdate: "false",
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    slidesPerView: perView,
    speed: 6000,
    centeredSlides: true,
    spaceBetween: 24,
    allowTouchMove: false,
  };

  React.useEffect(() => {
    if (itemRef) {
      setPerView(+(itemRef.current?.offsetWidth / 89));
      window.addEventListener("resize", () => {
        setPerView(+(itemRef.current?.offsetWidth / 89));
      });
    }
  }, [itemRef]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.scrollingContainer}>
        <Swiper {...swiperConfigs} ref={itemRef}>
          {itemListResponse.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative flex flex-col items-center">
                <GatsbyImage image={getImage(item.imgPath)} />
                <GatsbyImage
                  className={styles.blurImage}
                  image={getImage(item.imgPath)}
                />
                <p className="mt-2 text-grey-100 font-inter">
                  {item.prices}
                  <span className="ml-2">ETH</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EthScrolling;
