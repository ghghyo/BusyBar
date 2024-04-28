import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/images/banner/anime-one.png";
import Two from "public/images/banner/anime-two.png";
import Three from "public/images/banner/anime-three.png";
import Four from "public/images/banner/anime-four.png";
import Five from "public/images/banner/anime-five.png";

import TypedText from "./TypedText";

const BannerTwo = () => {
  const strings = ["Real-Time Crowd Monitoring", "Personalized Recommendations", "Get Busy With Busy Bar"];

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
              <h1 className="h3">the best time of your life, without the wait</h1>
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
              <p className="text-lg">
              Discover hidden gems and unlock the potential of renonwed bars, clubs, pubs and restraunts like never before
              </p>
              <div className="section__content-cta">
                <Link href="#contactus" className="btn btn--senary">
                Get Access
                </Link>
                <p>Unlock Your Day and NightLife potential and join the 1000s of users who use busybar everyday.
Free For Life For The First 1000 Users
</p> {/* change this more creative TODO*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
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
