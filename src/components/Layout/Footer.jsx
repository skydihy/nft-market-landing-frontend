import * as React from "react";

// Components
import PrimaryButton from "../UI/Buttons/PrimaryButton";

// Assets
import NftMarketLogo from "assets/svg/nft-market-logo.svg";
import FacebookLogo from "assets/svg/facebook.svg";
import LinkedinLogo from "assets/svg/linkedin.svg";
import GithubLogo from "assets/svg/github.svg";
import TwitterLogo from "assets/svg/twitter.svg";
import InstagramLogo from "assets/svg/instagram.svg";

import * as styles from "styles/layout/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.leftContent}>
          <NftMarketLogo />
          <ul className={styles.about}>
            <li>Support</li>
            <li>Term of service</li>
            <li>License</li>
          </ul>
        </div>
        <div className={styles.middleContent}>
          <ul className={styles.external}>
            <li>Auctions</li>
            <li>Roadmap</li>
            <li>Discover</li>
            <li>Community</li>
          </ul>
          <div className={styles.buttonAccount}>
            <PrimaryButton title="My account" />
          </div>
          <div className={styles.socials}>
            <FacebookLogo />
            <LinkedinLogo />
            <GithubLogo />
            <TwitterLogo />
            <InstagramLogo />
          </div>
        </div>
        <div className={styles.rightContent}>
          <p>
            Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
            velit, sed egestas in. Id nam semper dolor tellus vulputate eget
            turpis.
          </p>
          <div className={styles.inputContainer}>
            <input placeholder="Newsletter" />
            <span>Sign in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
