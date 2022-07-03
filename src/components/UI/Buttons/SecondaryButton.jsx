import * as React from "react";

import * as styles from "styles/ui/SecondaryButton.module.scss";

const SecondaryButton = ({ title, onClick, disabled, className }) => {
  return (
    <div
      className={`${styles.secondaryContainer} ${
        disabled ? styles.secondaryDisabled : ""
      } ${className}`}
      onClick={disabled ? null : onClick}
    >
      {title}
    </div>
  );
};

export default SecondaryButton;
