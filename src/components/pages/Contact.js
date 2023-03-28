import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

const styles = {
  errorMessage: {
      color: 'red',
  }
}

export default function Contact() {

  emailjs.init("L-fYRhw0IACWQmU8l")

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   

  const handleFormChange = (e) => {
    const { target } = e;
    const inputType = e.target.name;
    const inputValue = e.target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }

    console.log(e.target.value)
  
    if(e.target.name === 'name') {
       if(e.target.value.length <= 0) {
        setErrorMessage('Please enter a name')
       }
    }

    if(e.target.name === 'email') {
      if(e.target.value.length <= 0) {
       setErrorMessage('Please enter an email address')
      }
   }

   if(e.target.name === 'message') {
    if(e.target.value.length <= 0) {
     setErrorMessage('Please enter a message')
    }
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

  //function to send email on submit
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

     <div className="media container main-content">
      <div className="media-body row contact-content">
        <div className="row">
          <h1 className='page-title'>Contact Me</h1>
          <div className="align-items-center">
          <form className="form">
            <div className="form-group mt-4">
              <label htmlFor="name-input">Name:</label>
             <input className="form-control" value={name} onChange={handleFormChange} onBlur={handleFormChange} name="name" rows="1"></input>
          </div>
            <div className="form-group mt-4">
              <label htmlFor="email-input">Email:</label>
              <input type="email" className="form-control" value={email} onChange={handleFormChange} onBlur={handleFormChange} name="email" />
           </div>
            <div className="form-group mt-4">
              <label htmlFor="message-input">Message:</label>
              <textarea className="form-control" value={message} onChange={handleFormChange} onBlur={handleFormChange} name="message" rows="10"></textarea>
            </div>
            <div>
          <p  style={styles.errorMessage} className="error-text">{errorMessage}</p>
        </div>
           <button type="button" onClick={handleFormSubmit} className="btn btn-secondary mt-4">Submit</button>
          </form>
          
          
  
        </div>
      
      
    </div>
    
   
  </div>
  
</div>

  //     <div className="media-body row contact-content">
  //       <div className="col d-flex justify-content-center">
  //        </div>
  //        <div className="row align-items-center">
  //         <h2 className="mt-0 mb-1">Contact</h2>
  //         
  //         </div>
  //     {errorMessage && (
  //      
  //     )}

  //   </div>
    
  // </div>
  );
}
