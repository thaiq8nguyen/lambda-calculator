import React from "react";
import styles from "./NumberButton.module.scss";
const NumberButton = ({number, handleNumberClick}) => {
  return (
    
    
    <button 
      className={styles.numberButton} 
      onClick={() => handleNumberClick(number)}
      >
      {number}
    </button>
    
  );
};

export default NumberButton;
