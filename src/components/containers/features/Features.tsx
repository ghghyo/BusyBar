import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/feature-thumb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const Features = () => {
  return (
    <section className="section features">
                  <div className="section__header" >
              <h4 className="h2">Join the Exclusive Waitlist for BusyBar!</h4>
              <p className="grd"> Elevate your nightlife experience! <br></br>Sign up now to secure your spot on the waitlist and revolutionize the way you explore the city after dark.</p>
              
            </div>
      <div className="feature-wrapper">
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-12 col-xl-9">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: ".next-feature",
                  prevEl: ".prev-feature",
                }}
                autoplay={{
                  delay: 3000,
                }}
                pagination={false}
                className="features__slider"
              >
                <SwiperSlide>
                  
                  <div className="features__slider-single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> Reason #1</span>
                          <div className="content">
                            <h2 className="h2">
                            Be Among the First
                            </h2>
                            <p>
                          Get exclusive access to the app before it's released to the public. Be one of the very first to experience BusyBar and its innovative features firsthand.
                            </p>
                            <Link href="#contactus">
                              get started now
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-3 d-none d-xl-block">
                        <div className="feature__thumb text-center">
                         {/* <Image src={Thumb} alt="Image" /> */}
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> Reason #2</span>
                          <div className="content">
                            <h2 className="h2">
                              Unlock VIP Benefits
                            </h2>
                            <p>
                            As a waitlist member, you'll receive special perks and privileges, including early access to updates, sneak peeks at upcoming features, and more.
                            </p>
                            <Link href="#contactus">
                              join now
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="features__slider-single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> Reason #3</span>
                          <div className="content">
                            <h2 className="h2">
                              Shape the future
                            </h2>
                            <p>
                            Your feedback matters! By joining the waitlist, you'll have the opportunity to provide valuable input and help shape the direction of the app.
                            </p>
                            <Link href="#contactus">
                              Lets get going
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-3 d-none d-xl-block">
                        <div className="feature__thumb text-center">
                          {/* <Image src={Thumb} alt="Image" /> */}
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> Reason #4</span>
                          <div className="content">
                            <h2 className="h2">
                              Discover Hidden Gems
                            </h2>
                            <p>
                            Explore the city like never before with our app's curated selection of top-notch venues and events. Uncover hidden gems and create unforgettable memories with friends.
                            </p>
                            <Link href="#contactus">
                              Request A Demo
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*
                <SwiperSlide>
                  <div className="features__slider-single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> features 05</span>
                          <div className="content">
                            <h2 className="h2">
                              Write Factual Trending Content
                            </h2>
                            <p>
                              tech AI is trained and powered by &apos;Google Search&apos;
                              to chat with you on current events and trending
                            </p>
                            <Link href="/register">
                              get started free
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-3 d-none d-xl-block">
                        <div className="feature__thumb text-center">
                          {/* <Image src={Thumb} alt="Image" /> 
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> features 06</span>
                          <div className="content">
                            <h2 className="h2">
                              Write anywhere and everywhere
                            </h2>
                            <p>
                              tech AI is trained and powered by &apos;Google Search&apos;
                              to chat with you on current events and trending
                            </p>
                            <Link href="/sign-in">
                              Request A Demo
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                */}
              </Swiper>
              <div className="feature__arrows">
                <button
                  aria-label="previous slide"
                  className="slide-btn prev-feature"
                >
                  <i className="tech-left-angle"></i>
                </button>
                <button
                  aria-label="next slide"
                  className="slide-btn next-feature"
                >
                  <i className="tech-right-angle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
