import React, { useState } from 'react';
import Child from './Child';
import './ChildParent.css';

function Parent() {
  const [history, setHistory] = useState([]);

  const handleDataFromChild = (data) => {
    setHistory(prevHistory => [...prevHistory, data]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="parent-component">
      <h3>Parent Component</h3>
      <p>Last message received: <strong>{history[history.length - 1] || 'None'}</strong></p>
      <div className="history-log">
        <h4>Message History</h4>
        {history.length > 0 ? (
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="no-history">No messages yet.</p>
        )}
        {history.length > 0 && <button onClick={clearHistory}>Clear History</button>}
      </div>
      <Child onSendData={handleDataFromChild} />
    </div>
  );
}

export default Parent;