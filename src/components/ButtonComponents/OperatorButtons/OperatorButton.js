import React from "react";
import styles from "./OperatorButton.module.scss";

const OperatorButton = ({operator, handleOperatorClick}) => {
  const {char, value} = operator;
  return (
    <button className={styles.operatorButton} onClick={() => handleOperatorClick(value)}>{char}</button>
  );
};

export default OperatorButton;