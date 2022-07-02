import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import SecondaryButton from "../../UI/Buttons/SecondaryButton";

import * as styles from "styles/sections/Folder.module.scss";

const FolderSection = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.folderContainer}>
        <div className={styles.layout}>
          <div className="mobile:w-8/12">
            <StaticImage
              src="../../../images/sections/folder/pleat.png"
              alt="Pleat"
              objectFit="contain"
              quality={85}
            />
          </div>
          <div className={styles.boxContent}>
            <div className={styles.leftContent}>
              <p className={styles.topDescription}>Overline</p>
              <h2 className={styles.headingDescription}>
                Cursus vitae sollicitudin donec nascetur. Join now
              </h2>
              <p className={styles.bottomDescription}>
                Donec volutpat bibendum justo, odio aenean congue est porttitor
                ut. Mauris vestibulum eros libero amet tincidunt.
              </p>
              <div className="flex flex-row gap-4 mt-12 smobile:justify-center smobile:flex-col">
                <PrimaryButton title="Get started" />
                <SecondaryButton title="Learn more" />
              </div>
            </div>
            <div className={styles.rightContent}>
              <StaticImage
                className={styles.imageWrapper}
                src="../../../images/sections/folder/collections.png"
                alt="user collections"
                objectFit="contain"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderSection;
