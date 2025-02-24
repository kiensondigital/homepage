import React from 'react';
import Logo from '../img/Logo.jpeg'
import Navbar from './Navbar';
import '../styles/Company.css'


const CompanyInfo = () => {
    return (
        <div className='company-info'>
            <Navbar />
            <div className='company-info-box'>
                <div className='company-description'>
                    <h2> <b> KienSon </b> Digital </h2>
                    <p>  We are a Webdeveloment Company founded and currently based in Austria/Vienna. We provide a wide range of services including but not limited to Frontend Development, Database integration, SEO and Websecurity</p>
                    <ul>
                        <li> +43 677 611 25982 </li>
                        <li> KienSon.Digital@gmail.com  </li>
                    </ul>
                </div>
                <div className='image-container' alt="">
                    <img src={Logo}/>
                </div>  
            </div>
        </div>
    )
}

export default CompanyInfo;