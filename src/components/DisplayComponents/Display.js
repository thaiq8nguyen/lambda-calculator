import React from "react";
import styles from "./Display.module.scss";

const Display = ({display}) => {
  return (
    <div className={styles.display}>
      <div>
        {display}
      </div>
      
    </div>
  )
};

export default Display;
