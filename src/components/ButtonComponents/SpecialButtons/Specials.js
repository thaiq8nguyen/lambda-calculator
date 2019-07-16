import React from "react";
import { specials } from "../../../data"
//import any components needed
import styles from "./Specials.module.scss"
import SpecialButtons from "./SpecialButton";

//Import your array data to from the provided data file

const Specials = ({handleSpecialClick}) => {
  // STEP 2 - add the imported data to state

  return (
    <div className={styles.specialButtons}>
      
       {specials.map((special, index) => (
          
            <SpecialButtons  key={index} special={special} handleSpecialClick={handleSpecialClick}/>
          
          
        
         
       ))}
    </div>
  );
};

export default Specials;
