import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Thumb from 'public/images/generate/view2.jpg';
import Thumb2 from 'public/images/generate/view1.png';
import Anime from 'public/images/anime-four.png';

//TODO code needs adjustments for images in mobile mode
const GenerateTwo = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [cityName, setCityName] = useState<string>('Loading...'); // State to hold the city name

  // Function to fetch city name from the API
  const fetchCityName = async () => {
    try {
      const response = await fetch('/api/location');
      const data = await response.json();
      console.log(data)
      setCityName(data.city || 'Unknown Location');
    } catch (error) {
      console.error('Failed to fetch city name:', error);
      setCityName('Unknown Location');
    }
  };

  useEffect(() => {
    fetchCityName(); // Fetch city name when component mounts
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="section generate pb-0">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-lg-7 col-xl-7">
            <div className="generate__content" >
              <div className="section__header text-start">
                <h3 className="h2">
                Wherever you are in
                  <span className="grd" > {cityName}</span>
                  , never miss out on the hottest venues  tailored to your mood.
                </h3>
              </div>
              <div>
                <div
                  className={`generate__content-btn ${
                    activeTabIndex === 0 ? "generate__content-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(0)}
                >
                  <div className="thumb">
                    <i className="tech-pen"></i>
                  </div>
                  <div className="content">
                    <h5 className="h5">Sign Up & Start Exploring</h5>
                    <p>
                    Embark on your adventure with a quick sign-up! Dive into a world of endless exploration and excitement as you uncover hidden gems and thrilling experiences.
                    </p>
                  </div>
                  
                </div>
                <div
                  className={`generate__content-btn ${
                    activeTabIndex === 1 ? "generate__content-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  <div className="thumb">
                    <i className="tech-cart"></i>
                  </div>
                  <div className="content">
                    <h5 className="h5">Discover Venues & Vibe</h5>
                    <p>
                    Navigate effortlessly through a diverse array of venues and discover the perfect vibe for your night out! From intimate hideaways to bustling hotspots, find the ideal setting to match your mood.
                    </p>
                  </div>
                  
                </div>
                <div
                  className={`generate__content-btn ${
                    activeTabIndex === 2 ? "generate__content-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  
                  <div className="thumb">
                    <i className="tech-mike"></i>
                    
                  </div>
                  <div className="content">
                    <h5 className="h5">Monitor Crowd Flow & Peak Times </h5>
                    
                    <p>
                    Stay ahead of the curve with real-time crowd monitoring! Easily gauge the flow of people and identify peak times to ensure you're always at the heart of the action, minus the crowds.
                    </p>
                  </div>
                  
                </div>
                <div
                  className={`generate__content-btn ${
                    activeTabIndex === 3 ? "generate__content-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(3)}
                >
                  <div className="thumb">
                    <i className="tech-globe"></i>
                  </div>
                  <div className="content">
                    <h5 className="h5">Share the Buzz With Friends</h5>
                    <p>
                    Spread the excitement and amplify the fun with friends! Seamlessly share your favorite spots and unforgettable moments, turning every outing into an epic adventure.
                    </p>
                  </div>
                  
                </div>
                
              </div>
              
            </div>

          </div>
          <div className="col-12 col-lg-5 col-xl-5">
            <div
              className="generate__thumb"
            >
              <div
                className={`tab-content ${
                  activeTabIndex === 0 ? "active" : ""
                }`}
              >
                <Image src={Thumb} alt="image" />
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 1 ? "active" : ""
                }`}
              >
                <Image src={Thumb2} alt="image" />
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 2 ? "active" : ""
                }`}
              >
                <Image src={Thumb} alt="image" />
              </div>
              <div
                className={`tab-content ${
                  activeTabIndex === 3 ? "active" : ""
                }`}
              >
                <Image src={Thumb} alt="image" />
              </div>
              <div className="anime">
                <Image src={Anime} alt="Image" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateTwo;
