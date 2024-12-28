import React from 'react';
import '../styles/Contact.css'
import { Facebook, Twitter, WhatsApp, YouTube } from '@mui/icons-material';


const Contact = () => {
  return (
    <section id="Contact" className="contact">

      <div class="social-icon-list">
        <div class="icon-group">
            <Facebook className="icon-facebook" style={{ color: '#1778F2' }} />
            <i class="fab fa-facebook"></i>
            <span class="icon-text">
                Facebook
            </span>
            <span class="icon-bg"></span>
        </div>
        <div class="icon-group">
            <Twitter className="icon-twitter" style={{ color: '#1Da1f2' }} />
            <i class="fab fa-twitter"></i>
            <span class="icon-text">
                Twitter
            </span>
            <span class="icon-bg"></span>
        </div>
        <div class="icon-group">
            <WhatsApp className="icon-whatsapp" style={{ color: '#25D366' }} />
            <i class="fab fa-whatsapp"></i>
            <span class="icon-text">
                whatsapp
            </span>
            <span class="icon-bg"></span>
        </div>
        <div class="icon-group">
            <YouTube className="icon-youtube" style={{ color: '#f00' }}/>
            <i class="fab fa-youtube"></i>
            <span class="icon-text">
                Youtube
            </span>
            <span class="icon-bg"></span>
        </div>
    </div>
    </section>
  );
};

export default Contact;
