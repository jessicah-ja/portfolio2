import React from 'react';
import '../styles/Contact.css';


const Contact = () => {
  
  return (
    <div className="contact-container">
      <div className="contact-title">
        Contact me
      </div>
      <div className="contact-contents">
        <div className="contact-detail">
          <h1>Details</h1>
          <div>
            <strong>email</strong> jessicah0848@google.com 
            <a href="mailto:jessicah0848@gmail.com" rel="noopener noreferrer" target="_blank">Send mail</a><br/>
            <strong>mobile</strong> 010-5101-0848
          </div>
        </div>
      </div>
      
     
    </div>
  );
};


export default Contact;