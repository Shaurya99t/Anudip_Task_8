import React, { useState } from 'react';
import './UserForm.css';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="form-container">
      {isSubmitted && <div className="success-message">Form submitted successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group password-group">
          <label>Password:</label>
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <div className="preview-card">
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {name || '...'}</p>
        <p><strong>Email:</strong> {email || '...'}</p>
      </div>
    </div>
  );
}

export default UserForm;