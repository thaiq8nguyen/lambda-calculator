import React, { useState } from "react";

import "bulma";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import styles from "./App.module.scss";
import cx from "classnames";
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import SpecialButtons from "./components/ButtonComponents/SpecialButtons/Specials";
import OperatorButtons from "./components/ButtonComponents/OperatorButtons/Operators";
import NumberButtons from "./components/ButtonComponents/NumberButtons/Numbers"


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  
  //const [operators, setOperators] = useState([]);
  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState(0);

  const handleSpecialClick = (special) => {
    if(special === "C") {
      reset();
    } else if(special === "x/-") {
      setCalculate(calculate => "-" + calculate)
    } else if(special === "%") {
      setCalculate(calculate => calculate + " / 100")
      performCalculation();
    }
  }
  const handleOperatorClick = (operator) => {
    
    

    // if(operator === "=") {
    //   performCalculation();
    // }

    setCalculate(calculate => calculate + " " + operator + " ");
    performCalculation()

    
  }
  const handleNumberClick = (number) => {
    
    
    setCalculate(calculate => calculate + number)
    setResult(number);
    //console.log(current.join(""));
    //setDisplay([]);
    //setDisplay();
    //performCalculation();
    

    
  }
  const reset = () => {
      setCalculate("");
      setResult(0);
  }
  const performCalculation = () => {

    try {
      const calculatedResult = eval(calculate);
      const finalResult = Number.isInteger(calculatedResult) ? calculatedResult : parseFloat(calculatedResult).toFixed(2);
      setResult(finalResult);
    } catch(error) {
      console.log(error);
    }
    
  }

  
  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-one-quarter">
        <div className={cx("has-background-danger", styles.calculator)}>
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <Logo/>
              </div>
              
            </div>
          </div>
          <div className="app">
          <Display display={result}/>
          <div className={cx("container", styles.buttons)}>
            <div className={cx(styles.leftButtons)}>
              <SpecialButtons handleSpecialClick={handleSpecialClick}/>
              <NumberButtons handleNumberClick={handleNumberClick}/>
            </div>
            <div className={styles.rightButtons}>
              <OperatorButtons handleOperatorClick={handleOperatorClick}/>
            </div>
          </div>
          </div>
          
            
      
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
