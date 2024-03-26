import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(parseFloat(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseFloat(event.target.value));
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleCalculate = () => {
    let calcResult;
    switch (operator) {
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        calcResult = num1 / num2;
        break;
      default:
        calcResult = 0;
    }
    setResult(calcResult);
  };

  return (
    <div>
      <label>
        Enter First Number:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <br />
      <label>
        Enter Second Number:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <br />
      <label>
        Select Operation:
        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      <br />
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;