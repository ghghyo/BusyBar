import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Thumb from 'public/images/generate/view1.svg';
import Thumb2 from 'public/images/generate/view2.svg';
import Thumb3 from 'public/images/generate/view3.svg';
import Thumb4 from 'public/images/generate/view4.svg';
import Anime from 'public/images/anime-four.png';

const GenerateTwo = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [cityName, setCityName] = useState<string>('Loading...');

  // Function to fetch city name from the API
  const fetchCityName = async () => {
    try {
      const response = await fetch('/api/location');
      const data = await response.json();
      console.log(data.city)
      setCityName(data.city || 'Unknown Location');
    } catch (error) {
      console.error('Failed to fetch city name:', error);
      setCityName('Unknown Location');
    }
  };

  useEffect(() => {
    fetchCityName();
  }, []);
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="section generate pb-0 reduced-margin-top">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-lg-7 col-xl-7">
            <div className="generate__content">
              <div className="section__header text-start">
                <h3 className="h2">
                  The Nightlife In
                  <span className="grd"> {cityName}</span>, Is PACKED Tonight. Discover The Hottest Bars Tailored To Your Mood.
                </h3>
              </div>
              <div>
                {[
                  {
                    icon: "tech-pen",
                    title: "Sign Up & Start Exploring",
                    content:
                      "This app was created by our team with the intent to remain completely free of charge. We built it for us, and honestly we wouldn't want to pay. Dive into the world of your city's thrilling nightlife experience as you explore and uncover hidden gems, bars, pubs, and clubs all for free ... for life.",
                  },
                  {
                    icon: "tech-cart",
                    title: "Choose the Vibe & Discover the Perfect Venue",
                    content:
                      "Discover your city effortlessly, whether you want to kick it back and chill, party like a nightlife animal, or want us to help you explore hidden gems and bustling hotspots - Busy Bar will find the perfect setting to match your vibe.",
                  },
                  {
                    icon: "tech-mike",
                    title: "Unlock Crowd Monitoring & Watch Peak Times",
                    content:
                      "Navigate the buzz at any bar effortlessly with real-time crowd monitoring. Stay ahead of peak times to find the perfect spot, avoid long waits, or ensure you're always at the heart of the action.",
                  },
                  {
                    icon: "tech-globe",
                    title: "Share the Buzz With Friends",
                    content:
                      "Spread the excitement and amplify the fun with friends! Seamlessly share your favorite spots and unforgettable moments, turning every night into an epic adventure.",
                  },
                ].map((tab, index) => (
                  <div
                    key={index}
                    className={`generate__content-btn ${
                      activeTabIndex === index ? "generate__content-btn-active" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <div className="thumb">
                      <i className={tab.icon}></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">{tab.title}</h5>
                      <p>{tab.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-5">
            <div className="generate__thumb">
              {[
                Thumb,
                Thumb2,
                Thumb3,
                Thumb4,
              ].map((imageSrc, index) => (
                <div
                  key={index}
                  className={`tab-content ${
                    activeTabIndex === index ? "active" : ""
                  }`}
                >
                  <Image src={imageSrc} alt="image" style={{ height: '900px' }} />
                </div>
              ))}
              <div className="anime">
                <Image src={Anime} alt="Image" style={{ height: '900px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateTwo;
