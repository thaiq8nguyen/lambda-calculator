import React from "react";
import styles from "./SpecialButton.module.scss";
const SpecialButton = ({special, handleSpecialClick}) => {
  return (
    
    <button className={styles.specialButton} onClick={() => handleSpecialClick(special)}>{special}</button>
  );
};

export default SpecialButton;
