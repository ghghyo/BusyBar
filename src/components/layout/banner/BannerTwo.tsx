import Image from "next/image";
import Link from "next/link";
import React, { useState,FormEvent, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import {db} from '@/components/containers/utils/firebase';
import Form from "@/components/containers/sponsor/Form";
import One from "public/images/banner/anime-one.png";
import Two from "public/images/banner/anime-two.png";
import Three from "public/images/banner/anime-three.png";
import Four from "public/images/banner/anime-four.png";
import Five from "public/images/banner/anime-five.png";

import TypedText from "./TypedText";

const BannerTwo = () => {
  const strings = ["Real-Time Crowd Monitoring", "Night-Out Decisions Made Easy", "Get Busy With Busy Bar"];
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
      console.log(data.city);
      setCityName(data.city || 'Unknown Location');
    } catch (error) {
      console.error('Failed to fetch city name:', error);
      setCityName('Unknown Location');
    }
  };

  useEffect(() => {
    fetchCityName();
  }, []);


  return (
    <section className="section banner-two">
      <div className="container mt-4">
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
              Find the people and enjoy your night out in {cityName} like never before.
              </p>
              <section className="section contact-main reduced-margin-top">
                <div className="container d-flex justify-content-center">
                    <div className="col-12 col-lg-6 col-xxl-6 ">
                    {isSubmitted ? (
              <p className="text-xl text-center font-bold">Thank you for joining our waitlist! We will be in touch with you soon to invite you to test our app.</p> 
            ) : (
                        <div
                            className="contact-main__form mt-4"

                        >
                            <form method="POST" onSubmit={handleSubmit}>

                                <div
                                    className="group-input"

                                >
                                    <input
                                        type="email"
                                        name="contact-email"
                                        id="contactEmail"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </div>

                                <div className="section__content-cta justify-center text-center">
                                        <button type="submit" className="btn btn--senary">
                                        Get Early Access
                                            
                                        </button>
                                         <p> Free Forever For The First 1,000 Sign Ups </p>
                                    </div>
                                    
                            </form>
                        </div>
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
