import React, { useState } from 'react';
import './ChildParent.css';

function Child({ onSendData }) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendData(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="child-component">
      <h4>Child Component</h4>
      <div className="child-controls">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type message for parent"
        />
        <button onClick={handleSend}>Send to Parent</button>
      </div>
    </div>
  );
}

export default Child;