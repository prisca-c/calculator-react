import './App.css';
import React, {useState, useEffect} from "react";
import ButtonPanel from "./components/ButtonPanel";
import Screen from "./components/Screen";

function App() {
  const [result, setResult] = useState(null);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [intFirstNumber, setIntFirstNumber] = useState(null);
  const [intSecondNumber, setIntSecondNumber] = useState(null);
  const [operator, setOperator] = useState("");

  const [screenResult, setScreenResult] = useState(0);

  useEffect(() => {
    if(operator === ""){
      setScreenResult(intFirstNumber);
    } else if (operator !== "" && secondNumber !== "" && result === null) {
      setScreenResult(intSecondNumber);
    } else if (result !== null){
      setScreenResult(result.toFixed(10))
    }

    setIntFirstNumber(parseFloat(firstNumber));
    setIntSecondNumber(parseFloat(secondNumber));

  }, [screenResult, intFirstNumber, intSecondNumber, operator, firstNumber, secondNumber, result]);

  const handleClick = (buttonName) => {
    if (buttonName === "AC") {
      setResult(null);
      setScreenResult(0);
      setFirstNumber("");
      setSecondNumber("");
      setIntFirstNumber(null);
      setIntSecondNumber(null);
      setOperator("");
    }
    else if (buttonName === "x" || buttonName === "+" || buttonName === "-" || buttonName === "/") {
      setOperator(buttonName);
    }
    else if (buttonName === "=") {
      if (operator === "x") {
        if(intFirstNumber !== null && intSecondNumber !== null) {
          setResult(intFirstNumber * intSecondNumber);
        }
      }
      else if (operator === "+") {
        if(intFirstNumber !== null && intSecondNumber !== null){
          setResult(intFirstNumber + intSecondNumber);
        }
      }
      else if (operator === "-") {
        if(intFirstNumber !== null && intSecondNumber !== null){
          setResult(intFirstNumber - intSecondNumber);
        }
      }
      else if (operator === "/") {
        if(intFirstNumber !== null && intSecondNumber !== null){
          setResult(intFirstNumber / intSecondNumber);
        }
      }
    }
    else if (buttonName === "+/-") {
      if (operator === "") {
          setFirstNumber((parseFloat(firstNumber) * -1).toString());
      }
      else if (secondNumber !== "") {
          setSecondNumber((parseFloat(secondNumber) * -1).toString())
      }
    }
    else if (buttonName === ".") {
      if (operator === "") {
        if (firstNumber.includes(".")) {
          setFirstNumber(firstNumber);
        } else {
          setFirstNumber(firstNumber + buttonName);
        }
      } else if (operator !== "") {
        if (secondNumber.includes(".")) {
          setSecondNumber(secondNumber);
        } else {
          setSecondNumber(secondNumber + buttonName);
        }
      }
    }
    else if (buttonName === "%") {
      if (secondNumber !== "") {
          setIntSecondNumber(intFirstNumber * (intSecondNumber / 100));
      }
    }
    else if (parseInt(buttonName) >= 0 && parseInt(buttonName) <= 9) {
      if (operator === "") {
        setFirstNumber(firstNumber + buttonName);
      }
      else if (operator !== "") {
        setSecondNumber(secondNumber + buttonName);
      }
    }
  }

  return (
    <div className="App">
      <Screen handleResult={screenResult}/>
      <ButtonPanel  handleClick={handleClick}/>
    </div>
  );
}

export default App;
