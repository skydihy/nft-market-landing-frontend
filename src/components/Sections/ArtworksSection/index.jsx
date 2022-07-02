import * as React from "react";

// Assets
import UserIcon from "assets/svg/user.svg";
import ArtworkIcon from "assets/svg/artworks.svg";
import ArtistIcon from "assets/svg/artists.svg";
import SpentIcon from "assets/svg/spent.svg";

import * as styles from "styles/sections/Artworks.module.scss";
const ArtworksSection = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.artworkContainer}>
        <div className={styles.item}>
          <UserIcon />
          <h2>300k</h2>
          <p>Users Active</p>
        </div>
        <div className={styles.item}>
          <ArtworkIcon />
          <h2>52,5k</h2>
          <p>Artworks</p>
        </div>
        <div className={styles.item}>
          <ArtistIcon />
          <h2>17,5k</h2>
          <p>Artists</p>
        </div>
        <div className={styles.item}>
          <SpentIcon />
          <h2>35.58</h2>
          <p>ETH Spent</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworksSection;
