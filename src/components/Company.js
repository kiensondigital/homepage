import React from 'react';
import Logo from '../img/Logo.jpeg'


const CompanyInfo = () => {
    return (
        <div className='company-info'>
            <image src={Logo}/>
            <div className='company-description'>
                <p> Some text</p>
                <ul>
                    <li> Phone number </li>
                    <li> Email Adress </li>
                </ul>
            </div>
        </div>
    )
}

export default CompanyInfo;