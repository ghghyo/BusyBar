import Image from "next/image";
import Link from "next/link";
import React, { useState,FormEvent, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import {db} from '@/components/containers/utils/firebase';
import One from "public/images/banner/anime-one.png";
import Two from "public/images/banner/anime-two.png";
import Three from "public/images/banner/anime-three.png";
import Four from "public/images/banner/anime-four.png";
import Five from "public/images/banner/anime-five.png";

import TypedText from "./TypedText";

const BannerTwo = () => {
  const strings = ["Real-Time Crowd Monitoring", "Personalized Recommendations", "Get Busy With Busy Bar"];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [cityName, setCityName] = useState<string>('Loading...'); // State to hold the city name


  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const createdat = new Date();
  const formattedCreatedAt = createdat.toLocaleString('en-US', {
      weekday: 'long', // "Monday"
      year: 'numeric', // "2023"
      month: 'long', // "April"
      day: 'numeric', // "13"
      hour: '2-digit', // "12 AM"
      minute: '2-digit', // "00"
      second: '2-digit' // "00"
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
          await addDoc(collection(db, 'BusyBar'), {
              email: email,
              createdAt: formattedCreatedAt,
          });
          setIsSubmitted(true);
          console.log('done')
      } catch (err) {
          console.error('Error saving data:', err);
      }
  };

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


  return (
    <section className="section banner-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div
              className="banner-two__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="h2">Best Night Of Your Life,
                     <br className="block md:hidden"></br>With Busy Bar</h1>
              <h2 className="h3">
                <span id="textTyped">
                  <TypedText
                    strings={strings}
                    loop={true}
                    startDelay={50}
                    backDelay={1000}
                    backSpeed={50}
                  />
                </span>
              </h2>
              <p className="text-md">
              Discover hidden gems and enjoy your night out in {cityName} like never before.
              </p>
              <section className="section reduced-margin-top ">
                <div className="container d-flex justify-content-center ">
                    <div className="col-12 col-lg-6 col-xxl-6 ">
                    {isSubmitted ? (
              <p className="text-xl text-center font-bold">Form submitted! We will get back to you shortly.</p> 
            ) : (

                                  <form method="POST" onSubmit={handleSubmit}>
                                      <div className="group-input rounded-full mt-4 bg-gray-100">
                                          <input
                                              type="email"
                                              name="contact-email"
                                              id="contactEmail"
                                              placeholder="Enter your email"
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}
                                              required
                                              className="w-full py-3 px-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
                                          />
                                      </div>

                                
                                    <div className="section__content-cta justify-center text-center">
                                        <button type="submit" className="btn btn--senary">
                                        Get Free Access 
                                            
                                        </button>
                                    </div>
                                    
                            </form>
            )}
                    </div>
                </div>
            </section>

            </div>
          </div>
        </div>
      </div>
      <div className="anime reduced-margin-top">
        {/*
        <Image src={One} alt="Image" className="one" />
        <Image src={Two} alt="Image" className="two" />
        <Image src={Three} alt="Image" className="three" />
        <Image src={Four} alt="Image" className="four" />
        <Image src={Five} alt="Image" className="five" />
        <Image src={Five} alt="Image" className="six" /> {/* add the images here */}
      </div>
    </section>
  );
};

export default BannerTwo;
