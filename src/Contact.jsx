import React, { useState } from 'react';

const Contact = function Contact() {
  const password = 'swordfish';
  const [input, setInput] = useState('');
  const [authorized, setAuthorized] = useState(false);

  const authorize = () => {
    setAuthorized(input === password);
  };

  return (
    <div id="authorization">
      {authorized ? (
        <div id="authorized">
          <h1>Contact</h1>
          <ul>
            <li>
              client@example.com
            </li>
            <li>
              555.555.5555
            </li>
          </ul>
        </div>
      ) : (
        <div id="unauthorized">
          <h1> not authorized </h1>
          <label htmlFor="password">
            <input id="password" type="password" value={input} onChange={({ target: { value } }) => setInput(value)} />
          </label>
          <button type="submit" onClick={authorize}>
            Submit Password
          </button>
        </div>
      )}
      <p>are you worthy?</p>
    </div>
  );
};

export default Contact;
