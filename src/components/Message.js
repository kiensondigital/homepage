import React from 'react'; 
import emailjs from 'emailjs-com';
import '../styles/Message.css'

// emailapi: https://dashboard.emailjs.com/admin 

const Contactform = () => {
    const sendEmail = (e) => {  
        e.persist();
        e.preventDefault();

        emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.error("Failed to send email:", error.text);
          }
        );

        e.target.reset()
    }

    return (
        <div className='contact-form'>
            <h2> Send us a message! </h2>
            <div className='form-container'>
                <form onSubmit={sendEmail}>
                    <input name="from_name" className='input-field' type='text' placeholder='Name' required />
                    <input id="from_email" name="from_email" className='input-field' type='email' placeholder='Email' required />
                    <textarea name="message" className='message-field' type='field' placeholder='Your Message ...' required />
                    <button className="msg-btn"> Send </button>
                </form>
            </div>
        </div>
    );
};

export default Contactform;