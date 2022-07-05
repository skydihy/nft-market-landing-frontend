import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// Assets
import LikedIcon from "assets/svg/like-active.svg";
import LikeIcon from "assets/svg/like.svg";
import TimerIcon from "assets/svg/timer.svg";

import * as styles from "styles/ui/RankCard.module.scss";

const RankCard = ({ width = "fit-content", padding = 0, nft }) => {
  const { name, prices, remainingTimes, peopleBidding, liked, imgPath } = nft;

  const imageOptimized = getImage(imgPath);

  return (
    <div style={{ width: width, padding: padding }}>
      <div className="flex flex-row">
        <div className={styles.cardImageWrapper}>
          <GatsbyImage image={imageOptimized} alt={name} />
        </div>

        <div className={styles.cardDescriptionNPricing}>
          <div className={styles.name}>
            {name.length < 40 ? name : name.slice(0, 41) + ".."}
          </div>
          <div className="flex flex-row items-center justify-between mt-2">
            <div className="flex flex-row items-center">
              <TimerIcon />
              <p className="ml-2">{remainingTimes ? remainingTimes : "-"}</p>
            </div>
            <div className={styles.prices}>
              <span>{prices}</span>
              <span className="ml-2">ETH</span>
            </div>
          </div>

          <div className={styles.bidding}>
            <div className="flex flex-row items-center mobile:flex-col mobile:w-full mobile:items-center mobile:gap-2">
              <p>
                {peopleBidding.toLocaleString()}
                <span className="ml-[4px]">people are bidding</span>
              </p>
            </div>
            <div className="flex gap-2 mobile:mt-2">
              {liked ? <LikedIcon /> : <LikeIcon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
