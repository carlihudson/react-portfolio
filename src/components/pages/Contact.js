import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
// import { SMTPClient } from 'emailjs';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (e) => {
    const { target } = e;
    const inputType = e.target.id;
    const inputValue = e.target.value;
    console.log(inputType)

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

    // const client = new SMTPClient({
    //   user: 'name',
    //   host: 'smtp.carlihudson@gmail.com',
    //   ssl: true
    // });

    // client.send(
    //   {
    //     text: message,
    //     from: email,
    //     to: 'carlihudson@gmail.com',
    //     subject: 'You Have an Inquiry!'
    //   }
    // )

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('')
  };

  return (
    <div className="media container">
    <div className="media-body row">
      <div className="col d-flex justify-content-center">
        <h2 className="mt-0 mb-1">Contact</h2>
      </div>
      <form className="form">
      <div className="form-group mt-4">
        <label htmlFor="name-input">Name:</label>
        <input className="form-control" value={name} onChange={handleFormChange} id="name" rows="1"></input>
      </div>
      <div className="form-group mt-4">
        <label htmlFor="email-input">Email:</label>
        <input type="email" className="form-control" value={email} onChange={handleFormChange} id="email" />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="message-input">Message:</label>
        <textarea className="form-control" value={message} onChange={handleFormChange} id="message" rows="10"></textarea>
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
