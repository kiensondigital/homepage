import React, { useEffect, useState, useRef } from 'react';
import '../styles/Description.css';
import RocketIcon from '../svgs/rocket';
import Flowchart from '../svgs/flowchart.svg'

const SalesSlide = () => {
  return (
    <div className="slide sales">
      <div className="slide-content">
      <img id="sales-flowchart" src={Flowchart} />
        <div className="text-content left-textbox" style={{marginBlockStart:55}}>
          <h2 className="fade-text"> Digital Solutions </h2>
          <p className="fade-text"> From Frontend designs, to Backend Full stack infastruktur we offer a wide variety of Services including <b>Database</b> Setups, <b>Payment Systems</b>, <b>Web Security</b> Reviews and Search Engine Optimization (<b>SEO</b>) </p>
        </div>
      </div>
    </div>
  );
};

const BulleSlide = () => {
  const items = [
    { number: 1, title: "Responsive Designs", text: "Our designs aren’t just visually stunning—they adapt seamlessly to any device. Whether it’s a desktop, tablet, or smartphone, we ensure your site looks and works perfectly." },
    { number: 2, title: "User-Friendly", text: "We create intuitive, easy-to-navigate interfaces that keep your visitors engaged. A better user experience means higher conversions and satisfied customers." },
    { number: 3, title: "Custom Solutions", text: "Your business is unique, and your website should reflect that. We tailor every aspect to your vision, delivering a site that’s as distinctive as your brand." },
  ];

  return (
    <div className="slide info">
      <div className="slide-content">
        <div className="fade-text bullet-list">
          {items.map((item, index) => (
            <div key={index} className="bullet-item">
              <div className="circle-title">
                <div className="circle">{item.number}</div>
                <div className="title">{item.title}</div>
              </div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SeoSlide = () => {
  return (
    <div className="slide ">
      <div className="slide-content">
        <RocketIcon className="svg-animation" style={{ height: "400px", width: "400px", margin: "0" }} />
        <div className="text-content left-textbox">
          <h2 className="fade-text">SEO - Search Engine Optimization</h2>
          <p className="fade-text">Enhance your website’s visibility with tailored SEO strategies. From optimizing content and keywords to improving technical performance and user experience, we ensure your site ranks higher in search results. Higher rankings mean increased traffic, better engagement, and more conversions for your business.</p>
        </div>
      </div>
    </div>
  );
};

const descriptions = [<SalesSlide />,<BulleSlide />, <SeoSlide />];

const DescriptionBlocks = () => {
  const refs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false); // To track About section visibility

  useEffect(() => {
    const handleScroll = (entries) => {
      let anyVisible = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anyVisible = true;
          setActiveIndex(entry.target.dataset.index);
          entry.target.classList.add('visible');

          entry.target.querySelectorAll('.fade-text').forEach((el) => {
            el.classList.add('fade-in');
          });
        } else {
          entry.target.classList.remove('visible');
          entry.target.querySelectorAll('.fade-text').forEach((el) => {
            el.classList.remove('fade-in');
          });
        }
      });
      setIsVisible(anyVisible);
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const aboutSection = document.getElementById('About');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        } else {
          setIsAboutVisible(false);
        }
      });
    }, { threshold: 0.3 });

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section id="About">
      <div className="description-container">
        
        {/* Show progress bar only when the About section is visible */}
        <div className={`progress-indicator ${isAboutVisible ? 'visible' : ''}`}>
          {descriptions.map((_, index) => (
            <div
              key={index}
              className={`indicator-circle ${index === Number(activeIndex) ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="description-box"> 
          {descriptions.map((desc, index) => (
            <div
              key={index}
              className={`description-block ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
            >
              {desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DescriptionBlocks;
