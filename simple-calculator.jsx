import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleAddition() {
    setResult(prevResult => prevResult + parseInt(inputValue));
    setInputValue("");
  }

  function handleSubtraction() {
    setResult(prevResult => prevResult - parseInt(inputValue));
    setInputValue("");
  }

  function handleMultiplication() {
    setResult(prevResult => prevResult * parseInt(inputValue));
    setInputValue("");
  }

  function handleDivision() {
    setResult(prevResult => prevResult / parseInt(inputValue));
    setInputValue("");
  }

  return (
    <div className="container">
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        <input
          className="calculator__input"
          type="text"
          placeholder="0"
          value={inputValue}
          onChange={handleInput}
        />
        <div className="calculator__buttons">
          <button onClick={handleAddition}>+</button>
          <button onClick={handleSubtraction}>-</button>
          <button onClick={handleMultiplication}>*</button>
          <button onClick={handleDivision}>/</button>
        </div>
        <h2 className="calculator__result">Result: {result}</h2>
      </div>
    </div>
  );
}

export default Calculator;
