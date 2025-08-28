import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  const handleSetCount = () => {
    const newCount = parseInt(inputValue, 10);
    if (!isNaN(newCount)) {
      setCount(newCount);
    }
  };

  return (
    <div className="counter-container">
      <div className="count-display-wrapper">
        <p className="count-display">{count}</p>
        <span className="count-label">{count % 2 === 0 ? 'Even' : 'Odd'}</span>
      </div>
      <div className="button-group">
        <button className="increment-btn" onClick={handleIncrement}>+</button>
        <button className="decrement-btn" onClick={handleDecrement}>-</button>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
      <div className="set-value-group">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Set a value"
        />
        <button onClick={handleSetCount}>Set</button>
      </div>
    </div>
  );
}

export default Counter;