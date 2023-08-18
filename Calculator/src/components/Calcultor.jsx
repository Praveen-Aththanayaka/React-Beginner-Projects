import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("0");
  
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setResult("0");
    } else if (value === "C") {
      setResult(result.slice(0, -1) || "0");
    } else {
      setResult((prevResult) => (prevResult === "0" ? value : prevResult + value));
    }
  };

  return (
    <div className="container">
      <div className="display">
        <div className="equal">{result}</div>
        <input 
          type="text"
          className="entered_keys"
          value={result}
          disabled
        />
      </div>
      <div className="cal_keys">
        <div className="keys" onClick={() => handleClick("AC")}>AC</div>
        <div className="keys" onClick={() => handleClick("C")}>C</div>
        <div className="keys" onClick={() => handleClick("%")}>%</div>
        <div className="keys" onClick={() => handleClick("/")}>/</div>
        <div className="keys" onClick={() => handleClick("7")}>7</div>
        <div className="keys" onClick={() => handleClick("8")}>8</div>
        <div className="keys" onClick={() => handleClick("9")}>9</div>
        <div className="keys" onClick={() => handleClick("*")}>*</div>
        <div className="keys" onClick={() => handleClick("4")}>4</div>
        <div className="keys" onClick={() => handleClick("5")}>5</div>
        <div className="keys" onClick={() => handleClick("6")}>6</div>
        <div className="keys" onClick={() => handleClick("-")}>-</div>
        <div className="keys" onClick={() => handleClick("1")}>1</div>
        <div className="keys" onClick={() => handleClick("2")}>2</div>
        <div className="keys" onClick={() => handleClick("3")}>3</div>
        <div className="keys" onClick={() => handleClick("+")}>+</div>
        <div className="keys zero" onClick={() => handleClick("0")}>0</div>
        <div className="keys" onClick={() => handleClick(".")}>.</div>
        <div className="keys" onClick={() => handleClick("=")}>=</div>
      </div>
    </div>
  );
}

export default Calculator;
