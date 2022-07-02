import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import SecondaryButton from "../../UI/Buttons/SecondaryButton";

// Assets
import PaintIcon from "assets/svg/paint.svg";
import GameIcon from "assets/svg/game.svg";

import * as styles from "styles/sections/YellowOverline.module.scss";

const YellowOverlineSection = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.overlineContainer}>
        <div className={styles.leftBox}>
          <StaticImage
            className={styles.imageWrapper}
            src="../../../images/sections/yellow-overline/yellow.png"
            alt="Yellow ball looking at the paper rocket"
            objectFit="contain"
            quality={80}
          />
        </div>
        <div className={styles.rightBox}>
          <p className={styles.topDescription}>Overline</p>
          <h1 className={styles.headingDescription}>
            Habitant tristique aliquam in vel scelerisque
          </h1>
          <p className={styles.bottomDescription}>
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className={styles.services}>
            <div className={styles.serviceItem}>
              <PaintIcon />
              <h6>Sollicitudin sapien</h6>
              <p>Cursus fermentum</p>
            </div>
            <div className={styles.serviceItem}>
              <GameIcon />
              <h6>Sollicitudin sapien</h6>
              <p>Cursus fermentum</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-12 mobile:justify-center mobile:flex-col">
            <PrimaryButton title="Get started" />
            <SecondaryButton title="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowOverlineSection;
