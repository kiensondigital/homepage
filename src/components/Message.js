import React from 'react'; 
import '../styles/Message.css'

const Contactform = () => {
    return (
        <div className='contact-form'>
            <h2> Send us a message! </h2>
            <div className='form-container'>
                <form>
                    <input className='input-field' type='text' placeholder='Name'></input>
                    <input className='input-field' type='emai' placeholder='Email'></input>
                    <textarea className='message-field' type='field' placeholder='Your Message ...'></textarea>
                    <button className="msg-btn"> Send </button>
                </form>
            </div>
        </div>
    );
};

export default Contactform;