import React from 'react';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import Parent from './components/Parent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React State Showcase</h1>
      </header>
      <main>
        <div className="question-card">
          <h2 className="component-title">Advanced Counter</h2>
          <Counter />
        </div>
        <div className="question-card">
          <h2 className="component-title">Interactive User Form</h2>
          <UserForm />
        </div>
        <div className="question-card">
          <h2 className="component-title">Parent-Child Communication</h2>
          <Parent />
        </div>
      </main>
    </div>
  );
}

export default App;