import * as React from "react";

// Components
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import SecondaryButton from "../UI/Buttons/SecondaryButton";
import ThemeToggle from "./ThemeToggle";

// Assets
import NftMarketLogo from "assets/svg/nft-market-logo.svg";

import * as styles from "styles/layout/Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.navContainer}>
      <NftMarketLogo />

      <div className={styles.menus}>
        <a>Aunctions</a>
        <a>Roadmap</a>
        <a>Discover</a>
        <a>Community</a>
      </div>
      <div className="flex flex-row gap-4">
        <SecondaryButton title="Contact" />
        <PrimaryButton title="My account" />
      </div>
    </nav>
  );
};

export default Header;
