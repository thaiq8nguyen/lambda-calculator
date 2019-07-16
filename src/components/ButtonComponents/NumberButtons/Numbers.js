import React from "react";
import { numbers } from "../../../data";
import styles from "./Numbers.module.scss";
import NumberButton from "../NumberButtons/NumberButton";

//import any components needed

//Import your array data to from the provided data file

const Numbers = ({handleNumberClick}) => {
  // STEP 2 - add the imported data to state
  return (
    <div className={styles.numberButtons}>
      
        {numbers.map((number, index) => (
          <NumberButton key={index} number={number} handleNumberClick={handleNumberClick}/>
        ))}
    </div>
  );
};

export default Numbers;
