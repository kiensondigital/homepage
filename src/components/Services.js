import React from 'react';
import '../styles/Services.css'
import { FaWebAwesome } from "react-icons/fa6";
import { TbWorldDollar } from "react-icons/tb";
import { SiKeeweb } from "react-icons/si";



const Card = ({ icon, title, price, features }) => {
  return (
    <div class="card-container"> 
       <div class="card">
        {icon}
        <h2 class="card-title"><strong> {title} </strong></h2>

        <ul class="card-features">
          {features.map((feature) => (
              <li> {feature} </li>
          ))}
        </ul>
      </div>
      <div class="price-container">
        <span class="amount"> {price} </span>
        <span class="currency">€</span>
      </div>
    </div>
  )
}

const Services = () => {
  const cards = [
    {
      "icon" : <SiKeeweb className='service-icon'/>,
      "title" : "Basic",
      "price" : "200",
      "features" : ["Homepage", "Company Description", "Contact Form"]
    },
    {
      "icon" : <TbWorldDollar className='service-icon'/>,
      "title" : "Pro",
      "price" : "350",
      "features" : ["Multiple Pages", "SEO", "Custom animations",]
    },
    {
      "icon" : <FaWebAwesome className='service-icon'/>,
      "title" : "Premium",
      "price" : "1000",
      "features" : ["Ecomerse", "Database", "Paymentsystem","Security Review"]
    }
  ]
  return (
    <div>
      <section id="Services">
        <h2 style={{textAlign:"center", marginBlockStart:10, fontSize:35, marginBlockEnd:0,}}><strong>Our Offers! </strong> </h2>
        <div class="pricing-cards">
          {cards.map((card) => {
            return <Card icon={card.icon} title={card.title} price={card.price} features={card.features} />
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
