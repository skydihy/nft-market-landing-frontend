import * as React from "react";

import * as styles from "styles/ui/PrimaryButton.module.scss";

const PrimaryButton = ({ title, onClick, disabled }) => {
  return (
    <div
      className={`${styles.primaryContainer} ${
        disabled ? styles.primaryDisabled : ""
      }`}
      onClick={disabled ? null : onClick}
    >
      {title}
    </div>
  );
};

export default PrimaryButton;
