import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="media container">
    <div className="media-body row">
      <div className="col d-flex justify-content-center">
        <h2 className="mt-0 mb-1">Contact</h2>
      </div>
      <form className="form">
      <div className="form-group mt-4">
        <label for="name-input">Name:</label>
        <textarea className="form-control" value={name} onChange={handleFormChange} id="name" rows="1"></textarea>
      </div>
      <div className="form-group mt-4">
        <label for="email-input">Email:</label>
        <input type="email" class="form-control" value={email} onChange={handleFormChange} id="exampleFormControlInput1" />
      </div>
      <div class="form-group mt-4">
        <label for="message-input">Message:</label>
        <textarea className="form-control" value={message} onChange={handleFormChange} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button type="button" onClick={handleFormSubmit} className="btn btn-secondary mt-4">Submit</button>

      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

    </div>
    
  </div>
  );
}
