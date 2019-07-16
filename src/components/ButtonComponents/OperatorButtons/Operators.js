import React from "react";
import { operators } from "../../../data"

//import any components needed
import styles from "./Operators.module.scss";
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file

const Operators = ({handleOperatorClick}) => {
  // STEP 2 - add the imported data to state
  
  return (
    <div className={styles.operatorButtons}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operators.map((operator, index) => (
         <OperatorButton key={index} operator={operator} handleOperatorClick={handleOperatorClick}/>
       ))}
    </div>
  );
};

export default Operators;
