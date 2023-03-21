import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

export default function Contact() {

  emailjs.init("L-fYRhw0IACWQmU8l")

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
   //function to send email on submit
 

  const handleFormChange = (e) => {
    const { target } = e;
    const inputType = e.target.id;
    const inputValue = e.target.value;

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
    } else {
      sendEmail();
    }

    function sendEmail() {
      let templateParams = {
        from_name: name,
        reply_to: email,
        to_name: "Carli Hudson",
        message: message,
      };
      emailjs
        .send(
          "service_hbr7ad1",
          "template_pnv0gpd",
          templateParams,
          "L-fYRhw0IACWQmU8l"
        )
        .then(
          (response) => {
            alert("Email sent successfully!");
            console.log("Status: ", response.status);
            console.log("Message: ", response.message);
          },
          (err) => {
            alert("Error: Message not sent", err);
          }
        );
    }

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
