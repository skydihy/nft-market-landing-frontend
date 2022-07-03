import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// Assets
import LikedIcon from "assets/svg/like-active.svg";
import LikeIcon from "assets/svg/like.svg";
import TimerIcon from "assets/svg/timer.svg";

import * as styles from "styles/ui/PopularCard.module.scss";

const PopularCard = ({ width = "fit-content", padding = 0, nft }) => {
  const { name, prices, remainingTimes, peopleBidding, liked, imgPath } = nft;

  const imageOptimized = getImage(imgPath);

  return (
    <div style={{ width: width, padding: padding }}>
      <div className={styles.cardImageWrapper}>
        <GatsbyImage image={imageOptimized} alt={name} />
        <GatsbyImage
          class={styles.imageShadow}
          image={imageOptimized}
          alt={name}
        />
      </div>

      <div className={styles.cardDescriptionNPricing}>
        <div className={styles.name}>
          {name.length < 50 ? name : name.slice(0, 41) + ".."}
        </div>
        <div className={styles.prices}>
          <span>{prices}</span>
          <span className="ml-2">ETH</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <TimerIcon />
        <p>
          {remainingTimes ? remainingTimes : "-"}
          <span> min left</span>
        </p>
      </div>
      <div className={styles.bidding}>
        <div className="flex flex-row items-center ">
          <p>
            {peopleBidding.toLocaleString()}
            <span className="ml-[4px]">people are bidding</span>
          </p>
        </div>
        <div className="flex ">{liked ? <LikedIcon /> : <LikeIcon />}</div>
      </div>
    </div>
  );
};

export default PopularCard;
