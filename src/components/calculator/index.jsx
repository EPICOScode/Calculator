import Display from "../display/index";
import NumButtons from "../Buttons/numbers";
import { useState } from "react";
import MathSymbols from "../Buttons/mathSymbs";
import Calculations from "../../utils.jsx/calculations";


const Calculator = () => {
  let [state, setState] = useState(0);

  return (
    <>
      <Display state={state} />
      <NumButtons setState={setState} />
      <MathSymbols setState={setState}/>
      <Calculations state={state}/>
    </> 
  );
};

export default Calculator;
